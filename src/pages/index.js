import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { DocSearch } from '@docsearch/react'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
          <div className={styles.docSearch}>
            <DocSearch apiKey="0e16ab11aafbcc953a3f72215140716c" appId="MWV3QIWAYI" indexName="battlesnake" />
          </div>


        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.heroButton)}
            to="quickstart">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageQuickstart() {
  return (

    <div className="row">
      <div className="col">
        <div className="text--center padding-bottom--xl">
          <Link
            className={clsx('button button--primary button--lg margin-horiz--md', styles.quickstart)}
            to="quickstart">
            Build Your Battlesnake
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout
      title="Welcome to the Battlesnake Docs"
      description="A multiplayer programming game where your code is the controller.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageQuickstart />
      </main>
    </Layout>
  );
}
