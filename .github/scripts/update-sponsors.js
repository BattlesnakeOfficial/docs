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
  organization(login: "BattlesnakeOfficial") {
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

  const sponsors = sponsorships.nodes.map(node => ({
    login: node.sponsorEntity.login,
    name: node.sponsorEntity.name || node.sponsorEntity.login,
    avatarUrl: node.sponsorEntity.avatarUrl,
  }));

  const data = {
    updatedAt: new Date().toISOString(),
    totalCount: sponsorships.totalCount,
    monthlyIncomeEstimate: incomeInCents > 0 ? Math.round(incomeInCents / 100) : null,
    sponsors,
  };

  const outPath = path.join(__dirname, '..', '..', 'src', 'data', 'sponsors.json');
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2) + '\n');
  console.log(`Updated ${outPath} with ${sponsors.length} sponsors`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
