---
title: Battlesnake Community
hide_table_of_contents: true
sidebar_position: 0
---

import Link from '@docusaurus/Link';
import CardLink from '@site/src/components/CardLink';

# Battlesnake Community
Community is at the heart of the Battlesnake ecosystem and because of that we look for ways to celebrate the contributions of our community both on the platform and beyond! 

## Check out some of the initiatives below:

export const programs = [
  {
    name: 'Hall of Fame', 
    description: 'Exceptional developers from around the world who have demonstrated excellence in the Battlesnake Community and Competition.',
    href: '/community/hall-of-fame/',
    Svg: require('@site/static/img/icons/tongue.svg').default
  },
  {
    name: 'Creators Program', 
    description: 'Are you creating Battlesnake content? Share it with the Community!', 
    href: '/community/creators/',
    Svg: require('@site/static/img/icons/happy.svg').default
  },
  {
    name: 'Community Showcase', 
description: 'Check out some of the amazing content created by Battlesnake Developers from around the world.', 
    href: '/community/showcase/',
    Svg: require('@site/static/img/icons/caffeine.svg').default
  },
]

export const CommunityPrograms = ({initiatives}) => (
  <div className="row">
    {programs.map((i) => (
      <div key={i.name} className="col col--12">
        <CardLink to={i.href} bodyStyle={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <i.Svg role="img" style={{width: '100px', marginRight: '10px'}} />
          <div bodyStyle={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <h3>{i.name}</h3>
          <p>{i.description}</p>
        </div>
        </CardLink> 
      </div>
    ))}
  </div>
)

<CommunityPrograms initiatives={programs} />

