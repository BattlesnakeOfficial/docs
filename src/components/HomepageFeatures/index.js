import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Starter Templates',
    Svg: require('@site/static/img/illustration-starter.svg').default,
    description: (
      <>
        Looking for code to get you started? These Starter Templates are great starting points for building your own Battlesnake.
      </>
    ),
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/illustration-api.svg').default,
    description: (
      <>
        Anything and everything you need to know to implement the Battlesnake API and start responding to game engine requests.
      </>
    ),
  },
  {
    title: 'Guides',
    Svg: require('@site/static/img/illustration-guides.svg').default,
    description: (
      <>
        Comprehensive guides written by Battlesnake team members and community contributors, ranging from beginner topics to advanced tutorials.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
