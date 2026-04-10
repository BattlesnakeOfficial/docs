import React from 'react';
import Layout from '@theme/Layout';
import sponsorData from '../data/sponsors.json';

function SponsorAvatar({ sponsor }) {
  return (
    <a
      href={`https://github.com/${sponsor.login}`}
      title={sponsor.name}
      style={{
        display: 'inline-block',
        margin: '0.5rem',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit',
        width: '80px',
      }}
    >
      <img
        src={sponsor.avatarUrl}
        alt={sponsor.name}
        width={64}
        height={64}
        style={{ borderRadius: '50%', border: '2px solid var(--ifm-color-primary)' }}
      />
      <div style={{ fontSize: '0.75rem', marginTop: '0.25rem', wordBreak: 'break-word' }}>
        {sponsor.name}
      </div>
    </a>
  );
}

function CostTable() {
  const costs = [
    { service: 'Google Cloud', description: 'Game engine, web platform, and backend services', cost: '$442.10' },
    { service: 'Mailgun', description: 'Email notifications', cost: '$94.00' },
    { service: 'Google Workspace', description: 'Email and domain for battlesnake.com', cost: '$34.62' },
    { service: 'Sentry', description: 'Error monitoring and alerting', cost: '$29.00' },
    { service: 'GitHub', description: 'Organization plan and CI/CD', cost: '$20.00' },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>What it does</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {costs.map(row => (
          <tr key={row.service}>
            <td>{row.service}</td>
            <td>{row.description}</td>
            <td>{row.cost}</td>
          </tr>
        ))}
        <tr>
          <td><strong>Total</strong></td>
          <td></td>
          <td><strong>$619.72</strong></td>
        </tr>
      </tbody>
    </table>
  );
}

function MaintainerBanner() {
  const monthlyCost = 620;
  const sponsorIncome = sponsorData.monthlyIncomeEstimate || 120;
  const outOfPocket = monthlyCost - sponsorIncome;

  return (
    <div style={{
      marginTop: '3rem',
      padding: '1.5rem',
      borderRadius: '8px',
      border: '1px solid var(--ifm-color-primary)',
      background: 'var(--ifm-background-surface-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <img
          src="https://avatars.githubusercontent.com/u/964771?v=4"
          alt="Corey Alexander"
          width={48}
          height={48}
          style={{ borderRadius: '50%' }}
        />
        <div style={{ flex: 1, minWidth: '200px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Maintained by <a href="https://coreyja.com">Corey Alexander</a> — remaining ~${outOfPocket}/month covered out of pocket
          </div>
          <div style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
            The gap between sponsorships and infrastructure costs is currently funded out of pocket.{' '}
            <a href="https://coreyja.com/blog/battlesnake-in-2026">Read about how I ended up running Battlesnake.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Funding() {
  const updatedDate = new Date(sponsorData.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout title="Funding" description="How Battlesnake is funded, what it costs to run, and how you can help.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>Funding</h1>

            <p>
              Battlesnake is community-funded and maintained by volunteers. All infrastructure
              runs through <a href="https://coreyja.com">Corey Alexander's</a> personal
              LLC — GitHub Sponsors donations come in, infrastructure bills go out, and
              Corey covers the difference out of pocket.
            </p>

            <h2>Monthly Costs</h2>

            <p>
              As of March 2026, it costs roughly <strong>$620–660/month</strong> to keep
              Battlesnake running:
            </p>

            <CostTable />

            <p>
              We're actively rewriting the platform in Rust with cost efficiency as a major
              goal, so these numbers should come down over time.
            </p>

            <h2>Sponsors</h2>

            <p>
              Battlesnake currently has <strong>{sponsorData.totalCount} GitHub Sponsors</strong>
              {sponsorData.monthlyIncomeEstimate && (
                <> contributing roughly <strong>${sponsorData.monthlyIncomeEstimate}/month</strong></>
              )}. Thank you to everyone who helps keep the lights on!
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.25rem',
              margin: '2rem 0',
            }}>
              {sponsorData.sponsors.map(sponsor => (
                <SponsorAvatar key={sponsor.login} sponsor={sponsor} />
              ))}
            </div>

            <h2>How to Help</h2>

            <p>
              If you'd like to help keep Battlesnake running:
            </p>

            <p style={{ textAlign: 'center', margin: '2rem 0' }}>
              <a
                href="https://github.com/sponsors/BattlesnakeOfficial"
                className="button button--primary button--lg"
              >
                Sponsor Battlesnake on GitHub
              </a>
            </p>

            <p>
              Every contribution — no matter the size — makes a difference.
              Sponsorships go directly toward infrastructure costs.
            </p>

            <MaintainerBanner />

            <p style={{ fontSize: '0.85rem', color: 'var(--ifm-color-secondary-darkest)', marginTop: '2rem' }}>
              Sponsor data last updated {updatedDate}.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
