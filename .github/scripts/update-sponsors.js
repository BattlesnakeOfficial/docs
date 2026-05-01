// Fetches current GitHub Sponsors data and writes src/data/sponsors.json
// Run via: node .github/scripts/update-sponsors.js
// Requires GITHUB_TOKEN env var with read:org scope

const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN environment variable is required');
  process.exit(1);
}

const QUERY = `{
  viewer {
    login
  }
  organization(login: "BattlesnakeOfficial") {
    viewerIsAMember
    viewerCanAdminister
    sponsorshipsAsMaintainer(first: 100, activeOnly: true) {
      totalCount
      nodes {
        sponsorEntity {
          ... on User {
            login
            name
            avatarUrl
          }
          ... on Organization {
            login
            name
            avatarUrl
          }
        }
        tier {
          monthlyPriceInDollars
        }
      }
    }
    monthlyEstimatedSponsorsIncomeInCents
  }
}`;

async function main() {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: QUERY }),
  });

  if (!response.ok) {
    console.error(`GitHub API error: ${response.status} ${response.statusText}`);
    process.exit(1);
  }

  const result = await response.json();

  if (result.errors) {
    console.error('GraphQL errors:', JSON.stringify(result.errors, null, 2));
    process.exit(1);
  }

  const org = result.data.organization;
  const sponsorships = org.sponsorshipsAsMaintainer;
  const incomeInCents = org.monthlyEstimatedSponsorsIncomeInCents;

  // Diagnostic: surface what the token actually sees so we can tell whether
  // a null monthlyIncomeEstimate is a permission gate or a real zero.
  console.log(
    `viewer.login=${result.data.viewer?.login} ` +
    `viewerIsAMember=${org.viewerIsAMember} ` +
    `viewerCanAdminister=${org.viewerCanAdminister} ` +
    `tokenScopes=${response.headers.get('x-oauth-scopes') || 'unknown'}`,
  );

  const sponsors = sponsorships.nodes.map(node => ({
    login: node.sponsorEntity.login,
    name: node.sponsorEntity.name || node.sponsorEntity.login,
    avatarUrl: node.sponsorEntity.avatarUrl,
  }));

  // Prefer the org-level estimate, but fall back to summing per-sponsor tier
  // prices. The org field requires admin scope and returns 0/null for
  // tokens that lack it; the per-sponsor tier data is visible to anyone
  // with read:org and gives us the same monthly total.
  const orgEstimate = incomeInCents > 0 ? Math.round(incomeInCents / 100) : null;
  const tierSum = sponsorships.nodes.reduce(
    (acc, node) => acc + (node.tier?.monthlyPriceInDollars || 0),
    0,
  );
  const monthlyIncomeEstimate = orgEstimate ?? (tierSum > 0 ? tierSum : null);

  // Log which source produced the estimate so token-scope regressions are
  // easy to spot in workflow logs. Both fields require the PAT to belong
  // to a BattlesnakeOfficial org owner; they return 0/null otherwise.
  console.log(
    `monthlyIncomeEstimate=${monthlyIncomeEstimate} ` +
    `(orgEstimate=${orgEstimate}, tierSum=${tierSum})`,
  );

  const data = {
    updatedAt: new Date().toISOString(),
    totalCount: sponsorships.totalCount,
    monthlyIncomeEstimate,
    sponsors,
  };

  const outPath = path.join(__dirname, '..', '..', 'src', 'data', 'sponsors.json');
  fs.writeFileSync(outPath, formatSponsorsJson(data));
  console.log(`Updated ${outPath} with ${sponsors.length} sponsors`);
}

// Custom formatter that keeps each sponsor on a single line so daily diffs
// stay easy to review. The default JSON.stringify(..., 2) expands every
// object, which makes the diff noisy when avatar URLs change.
function formatSponsorsJson(data) {
  const lines = [
    '{',
    `  "updatedAt": ${JSON.stringify(data.updatedAt)},`,
    `  "totalCount": ${JSON.stringify(data.totalCount)},`,
    `  "monthlyIncomeEstimate": ${JSON.stringify(data.monthlyIncomeEstimate)},`,
    '  "sponsors": [',
  ];
  data.sponsors.forEach((sponsor, i) => {
    const trailing = i === data.sponsors.length - 1 ? '' : ',';
    const inner = Object.entries(sponsor)
      .map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`)
      .join(', ');
    lines.push(`    { ${inner} }${trailing}`);
  });
  lines.push('  ]');
  lines.push('}');
  return lines.join('\n') + '\n';
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
