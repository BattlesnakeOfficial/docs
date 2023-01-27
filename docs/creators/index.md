---
title: Battlesnake Creators
hide_table_of_contents: true
sidebar_position: 0
---

import Link from '@docusaurus/Link'
import CardLink from '@site/src/components/CardLink';


![Battlesnake Creators Banner](/img/creators/creators_banner.png)

## Are you creating Battlesnake content? Share it with the Community!

We want to celebrate and share creative work made by you, the Battlesnake Community! Have something that you’d like to share? Fill out the form below!

export const creations = [
  {
    name: 'Maps & Challenges', 
    avatar: '/img/creators/maps.png'
  },
  {
    name: 'Blog Posts', 
    avatar: '/img/creators/posts.png'
  },
  {
    name: 'Dev Tools', 
    avatar: '/img/creators/tools.png'
  },
   {
    name: 'Works of Art', 
    avatar: '/img/creators/art.png'
  },
]

export const CommunityCreations = ({creators}) => (
  <div className="row">
    {creations.map((i) => (
      <div key={i.name} className="col col--3">
        <CardLink bodyStyle={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={i.avatar} style={{width: '80px'}} />
          <div bodyStyle={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
          <h4>{i.name}</h4>
        </div>
        </CardLink> 
      </div>
    ))}
  </div>
)

<CommunityCreations creators={creations} />

## Share what you've made with us!
Send a brief email to creators@battlesnake.com with the following information:
- Name or Username
- Email
- Content Link
- Social Links
- Description of your creation in a few sentances

Once we've reviewed your submission, a member of the team will get back to you!

---

### What we look for:

We look for the following when considering community content submission
- Public and sharable
- Teach or entertain others
- Appropriate for all ages
- Not sure if your content qualifies?‍ Submit it anyways! We’d love to take a look.

Have more questions? Email the team at creators@battlesnake.com

### Creator Rewards
Creator will be recognized with:

- Your Battlesnake profile & project featured in our Community Showcase
- An achievement badge on your Battlesnake Profile
- An Exclusive head & tail
- A special role in the Battlesnake Discord

