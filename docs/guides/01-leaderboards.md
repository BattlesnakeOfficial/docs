---
title: Leaderboards
description: Battlesnake Leaderboards automatically run and score competitive games. Join whenever you like and compete against developers worldwide!
---

import Figure from '@site/src/components/Figure';

# Leaderboards

Battlesnake Leaderboards are fully automated competitive ladders. Players can enter their Battlesnakes at any time to compete against other developers. Participants earn rating and rank depending on how well their Battlesake performs.

## Definitions

**"Rating"** refers to the competitive value assigned to each Battlesnake after each game, as determined by the TrueSkill algorithm (see below). **"Rank"** refers to position in the Leaderboard when compared to other developers, sorted by rating.

For example, a Battlesnake with a **rating** of 8,564 might be **ranked** 3rd.

<Figure caption="Ranking and Rating as shown on the Leaderboards." src="/img/leaderboard-legend.png" />


## Schedule

Leaderboards operate on a 24 hour schedule. Once a day, at the same time every day, each Leaderboard will initiate a series of competitive games among Leaderboard participants. These games are automatically scored and players are continuously ranked based on how well they perform. This process lasts about 6-10 hours depending on map, players, and skill levels.

Start times for all Leaderboards are intentionally staggered throughout the day to help reduce demand on Battlesnake servers and the game engine.

At the end of each month, developers are awarded Battlesnake Points based on their current rank.


## Matchmaking

Competitive matchmaking is a challenging problem, with no one solution. Battlesnake Leaderboard matchmaking algorithms will attempt to optimize for two things: each Battlesnake playing an equal number of games each day, and having the highest possible quality of opponents for those games.

The target number for games played each day may change daily, depending on game run times and participant numbers. It's impossible to always have everyone play an exact number of games, but the algorithm optimizes to get as close as possible (usually within a game or two).

Secondly, matchmaking will optimize for a competitive opponent set, generally favoring opponents that are close in rank. This is also imperfect though, resulting in a few each day games where opponents are wildly mismatched &mdash; this averages out in the long-term, and you should find yourself typically competing against similarly ranked Battlesnakes.


## Rating Calculations

Leaderboards use an unmodified [TrueSkill](https://en.wikipedia.org/wiki/TrueSkill) algorithm to assign each Battlesnake a rating basd on their in-game performance. These ratings are used to rank Battlesnakes competitively, and generate future matches with opponent Battlesnakes at a similar rank.

#### About TrueSkill

TrueSkill is a ranking system [first developed by Microsoft](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/) as an alternative to the popular ELO. TrueSkill was specifically developed with 'multiplayer free-for-all' gameplay in mind, making it a better fit for Battlesnake than ELO. A player's rating is a combination of two parameters, $\mu$ (**mu**) and $\sigma$ (**sigma**) which represent an estimate of a player's skill as a normal distribution with mean $\mu$ and standard deviation $\sigma$.

<Figure credit="http://www.moserware.com/2010/03/computing-your-skill.html" src="/img/normal-distribution.png" />

All players enter the Leaderboard with the same starting values for $\mu$ and $\sigma$. As they play more matches, $\sigma$ decreases, representing the system having more confidence in their rating being accurate. You can visualize this as the distribuion curve above becoming "narrower".

If Battlesnakes are consistenly winning against higher rated opponents, TrueSkill will increase $\sigma$ (or decrease confidence), which increases overall rating until win rates settle down to expected values.

In the Leaderboards, each Battlesnake has its own $\mu$ and $\sigma$ that are updated after each game. These values are then used to calculate a rating using the formal $\mu - 3\sigma$, which is a conservative way of saying _"We don't know exactly what your skill level is, but we're 99% sure it's above this number"_. Leaderboards are then sorted by rating and ranks are assigned.

However, this estimate can produce some odd looking numbers that are hard to reason about. For example, if you're just starting out it's difficult to understand what a rating of -11.483 actually means. To improve on this, we transform the TrueSkill rating into an integer between 0 and 10,000, by first passing it through a [logistic function](https://en.wikipedia.org/wiki/Logistic_function) which forces it into the range of 0 - 1, then multiplying by 10,000 and rounding down to the nearest integer.

<Figure caption="Transforming TrueSkill Ratings with a Logistic Function" src="/img/ratings_logistic_function.png" />

An important property of this transformation is that it doesn't change the ordering of ratings in any way, only the range of displayed values. Internal ranking and matchmaking systems ignore this value and use TrueSkill's $\mu$ and $\sigma$ for all calculations.

To learn more about how TrueSkill works check out these resources:
- [TrueSkill Ranking System](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/)
- [Computing Your Skill](http://www.moserware.com/2010/03/computing-your-skill.html)


## Player Ratings (Experimental)

:::info
The calculation of global player ratings is experimental, and likely to change.
:::

In order to power a global ranking of all players, we sum the unmodified Trueskill ratings of each player's Leaderboard entries. We then transform this cumulative score using a similar logistic function as above, but scaled to match the number of Leaderboards.

This means that to be competitive on the [global player rankings](https://play.battlesnake.com/rankings), a player will need to have a high ranking Battlesnake in every Leaderboard. The difficulty or relative competitiveness of each Leaderboard is not currently considered in these calculations, but we're open to ideas about this in the future.

$$$
\LARGE\begin{split}
{Rating}_{base} &= \sum_{n=1}^{N} (\mu_n - 3 \cdot \sigma_n) \\
Rating &= \lfloor 10,000 \cdot \frac{1}{1 + e^{-\frac{(Rating_{\small{base}} - N \cdot \mu_0)}{N \cdot \sigma_0}}} \rfloor \\[4ex]
N &= \textnormal{Number of active leaderboards} \\
\mu_0 &= \textnormal{initial value for }\mu \\
\sigma_0 &= \textnormal{initial value for }\sigma
\end{split}
$$$
