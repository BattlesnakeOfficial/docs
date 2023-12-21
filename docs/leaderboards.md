---
title: Leaderboards
description: Battlesnake Leaderboards automatically run and score competitive games. Join whenever you like and compete against developers worldwide!
---

import Figure from '@site/src/components/Figure';

# Leaderboards

Battlesnake Leaderboards are fully automated competitive ladders. Players can enter their Battlesnakes to compete against other developers and earn rating and rank.

#### Important Definitions

**Rating:** The value your Battlesnake earns by playing automated games in Leaderboards, as determined by TrueSkill (see below).

**Rank**: Refers to your position in the Leaderboard compared to other developers, sorted by Rating.

<Figure caption="Ranking and Rating as shown on the Leaderboards." src="/img/leaderboard-legend.png" />


## Schedule

Leaderboards operate on a 24 hour schedule. At a set time every day, each Leaderboard will attempt to run a fixed number of competitive games for each Battlesnake. These games are automatically scored and players are continuously ranked based on how well they perform. This process typically last 6-10 hours depending on map, players, and skill levels.

Start times for all Leaderboards are intentionally staggered throughout the day to help reduce demand on Battlesnake servers and the game engine.

At the end of each month, developers are awarded Battlesnake Points based on their current rank.


## Matchmaking

Competitive ladder matchmaking is a challenging problem. Leaderboard matching algorithms will attempt to optimize for equal number of games played across all Battlesnakes. This target number may change day-to-day depending on game speed and participant numbers.

Matchmaking will also optimize for a competitive opponent set, generally favoring opponents that are close in rank. This can be imperfect though, resulting in the odd games where opponents are wildly mismatched. This averages out in the long-term, and you should find yourself typically competing against similarly ranked Battlesnakes.


## Rating Calculations

Battlesnake Leaderboards use an unmodified [TrueSkill](https://en.wikipedia.org/wiki/TrueSkill) algorithm to rank Battlesnakes according to their in-game performance. Those rankings are used to generate future matches with Battlesnakes at a similar rank.

### About TrueSkill

TrueSkill is a ranking system [first developed by Microsoft](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/) as an alternative to the popular ELO. TrueSkill was specifically developed with 'multiplayer free-for-all' gameplay in mind, making it a better fit for Battlesnake. A player's rating is a combination of two parameters, $\mu$ (**mu**) and $\sigma$ (**sigma**) which represent an estimate of a player's skill as a normal distribution with mean $\mu$ and standard deviation $\sigma$.

<Figure credit="http://www.moserware.com/2010/03/computing-your-skill.html" src="/img/normal-distribution.png" />

All players enter the Leaderboard with the same values for $\mu$ and $\sigma$. As they play more matches, sigma decreases, representing the system having more confidence in their rating being accurate. You can visualize this as the bell curve above getting "narrower".

In the Leaderboards, each Battlesnake has a separate TrueSkill $\mu$ and $\sigma$, and we update these values after each game. These values are then used to calculate a rating on demand. Ratings use the formal $\mu - 3\sigma$, which is a conservative way of saying _"We don't know exactly what your skill level is, but we're 99% sure it's above this number"_. Leaderboards are then sorted by rating, and ranks are assigned.

However, this estimate can produce some odd looking numbers that are hard to reason about. If you're just starting out, you don't want to see your Battlesnake given a rating of **-11.483**! To improve on this, we transform the TrueSkill rating into an integer between 0 - 10,000, by first passing it through a [logistic function](https://en.wikipedia.org/wiki/Logistic_function) which forces it into the range of 0 - 1, then multiplying by 10,000 and rounding down to the nearest integer.

<Figure caption="Transforming TrueSkill Ratings with a Logistic Function" src="/img/ratings_logistic_function.png" />

An important property of this transformation is that it doesn't change the ordering of ratings in any way, just the range of displayed values.

To learn more about how TrueSkill works under the hood, check out these resources:
- [TrueSkill Ranking System](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/)
- [Computing Your Skill](http://www.moserware.com/2010/03/computing-your-skill.html)


## Player Ratings (Experimental)

:::info
The calculation of global player ratings is experimental, and likely to change.
:::

To populate a global ranking of players, we add the unmodified Trueskill ratings of each player's Battlesnakes that are in an active Leaderboard. We then transform this cumulative score using a similar logistic function as above, but scaled to match the number of Leaderboards. **This means in order to be competitive on the global Player Rankings, a player will need to have a high ranking Battlesnake in every Leaderboard**. The difficulty or competitiveness of each Leaderboard is not currently taken into account.

$$$
\LARGE\begin{split}
{Rating}_{base} &= \sum_{n=1}^{N} (\mu_n - 3 \cdot \sigma_n) \\
Rating &= \lfloor 10,000 \cdot \frac{1}{1 + e^{-\frac{(Rating_{\small{base}} - N \cdot \mu_0)}{N \cdot \sigma_0}}} \rfloor \\[4ex]
N &= \textnormal{Number of active leaderboards} \\
\mu_0 &= \textnormal{initial value for }\mu \\
\sigma_0 &= \textnormal{initial value for }\sigma
\end{split}
$$$
