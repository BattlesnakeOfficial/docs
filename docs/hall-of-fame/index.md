---
title: Battlesnake Hall of Fame
hide_table_of_contents: true
sidebar_position: 0
---

import Link from '@docusaurus/Link'
import CardLink from '@site/src/components/CardLink';


![Battlesnake Hall of Fame Banner](/img/hall-of-fame/hall-of-fame-banner.png)

**The Hall of Fame recognizes exceptional developers from around the world who have demonstrated excellence in the Battlesnake Community and Competition.**

Through their exemplary programming and competitive prowess, they have showcased the best of Battlesnake and through this Hall of Fame we seek to immortalize their achievements, cementing their place in the collective history of the Battlesnake Community.


export const hallInductees = [
  {
    name: 'alexanderekdahl', 
    snake: 'Pretzel',
    href: 'hall-of-fame/inductees/alexanderekdahl',
    avatar: '/img/hall-of-fame/alexanderekdahl.png'
  },
  {
    name: 'calebzmeyer', 
    snake: 'Undefined Behaviour',
    href: 'hall-of-fame/inductees/calebzmeyer',
    avatar: '/img/hall-of-fame/calebzmeyer.png'
  },
  {
    name: 'kudu', 
    snake: 'Salazar Slitherin',
    href: 'hall-of-fame/inductees/kudu',
    avatar: '/img/hall-of-fame/kudu.png'
  },
  {
    name: 'maximilianschier', 
    snake: 'Niedersächsische Kreuzotter 🍻',
    href: 'hall-of-fame/inductees/maximilianschier',
    avatar: '/img/hall-of-fame/maximilianschier.png'
  },
  {
    name: 'pruzze', 
    snake: 'Pruzze v2',
    href: 'hall-of-fame/inductees/pruzze',
    avatar: '/img/hall-of-fame/pruzze.png'
  },
  {
    name: 'robbles', 
    snake: 'Chicken Snake',
    href: 'hall-of-fame/inductees/robbles',
    avatar: '/img/hall-of-fame/robbles.png'
  },
   {
    name: 'tofu', 
    snake: 'tofu',
    href: 'hall-of-fame/inductees/tofu',
    avatar: '/img/hall-of-fame/tofu.png'
  }
]

export const HallInductees = ({inductees}) => (
  <div className="row">
    {inductees.map((i) => (
      <div key={i.name} className="col col--6">
        <CardLink to={i.href} bodyStyle={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={i.avatar} style={{width: '100px'}} />
          <div bodyStyle={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <h2>{i.name}</h2>
          <p>{i.snake}</p>
        </div>
        </CardLink> 
      </div>
    ))}
  </div>
)

<HallInductees inductees={hallInductees} />
