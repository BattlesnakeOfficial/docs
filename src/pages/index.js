import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
         <Link
            className={clsx('button button--secondary button--lg', styles.heroButton)}
            to="quickstart">
            Get Started
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="https://play.battlesnake.com">
            Play Battlesnake
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome to the Battlesnake Docs"
      description="A multiplayer programming game where your code is the controller.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
