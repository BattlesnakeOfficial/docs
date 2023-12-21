---
title: Rating Calculations
---

import Figure from '@site/src/components/Figure';

# Rating Calculations


:::info
Heads up! You don’t need to know how Ratings work to play Battlesnake. But if you’re curious, we’ve got you covered :point_right::sunglasses::point_right:
:::

The Leaderboards use the [TrueSkill](https://en.wikipedia.org/wiki/TrueSkill) system to rank Battlesnakes according to their performance, and those rankings are used to generate future matches with Battlesnakes at a similar skill level.

## About TrueSkill


TrueSkill is a ranking system [developed by Microsoft](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/) as an alternative to ELO specifically with 'free-for-all' and team play in mind, making it a better fit for Battlesnake gameplay. In TrueSkill, a player's Rating is a combination of two parameters, $\mu$ (**mu**) and $\sigma$ (**sigma**) which represent an estimate of a player's skill as a normal distribution with mean **mu** and standard deviation **sigma**.

<Figure caption="A normal distribution with mean mu and standard deviation sigma" credit="http://www.moserware.com/2010/03/computing-your-skill.html" src="/img/normal-distribution.png" />

All players start off with the same mu and sigma. As they play more matches, sigma decreases, representing the system having more confidence in the Rating. You can visualize this as the bell curve above getting "narrower".

To calculate a single value for sorting a Leaderboard, a conservative estimate of $\mu - 3\sigma$ is used, which effectively says: "We don't know exactly what your skill level is, but we're 99% sure it's above this number".

To learn more about how TrueSkill works under the hood, check out these resources:
- [TrueSkill Ranking System](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/)
- [Computing Your Skill](http://www.moserware.com/2010/03/computing-your-skill.html)

## How are Leaderboard Ratings calculated?

In the Leaderboards, each Battlesnake has a separate TrueSkill mu and sigma, and we update these values after each game. The conservative estimate of $\mu - 3\sigma$ described previously is then used to sort and rank the Battlesnakes in the Leaderboard. However, this estimate can produce some odd looking numbers that are hard to reason about. If you're just starting out, you don't want to see your Battlesnake given a Rating of **-11.483**!

To improve on this, we transform the TrueSkill Rating into an integer between 0 - 10,000, by first passing it through a [logistic function](https://en.wikipedia.org/wiki/Logistic_function) which forces it into the range of 0 - 1, then multiplying by 10,000 and rounding down to the nearest integer.

$$$
\large\begin{split}
Trueskill &= \mu - 3 \cdot \sigma \\
Rating &= \lfloor 10000 \cdot \frac{1}{1 + e^{-\frac{(trueskill - \mu_0)}{\sigma_0}}} \rfloor \\[4ex]
\mu_0 &= \textnormal{initial value for }\mu \\
\sigma_0 &= \textnormal{initial value for }\sigma
\end{split}
$$$

<Figure caption="Transforming TrueSkill Ratings" src="/img/ratings_logistic_function.png" />

An important detail about this transformation is that it doesn't change the ordering of Ratings in any way, just the range of displayed values. The Leaderboard is also still sorted by the underlying TrueSkill estimates.

## How are player Ratings calculated?

:::info

The calculation of global player Ratings is experimental, and likely to change.

:::

To populate a global leaderboard of players, we add the Trueskill estimates of all of each player's Battlesnakes that are in an active Leaderboard. We then transform this cumulative score using a similar logistic function as above, but scaled to match the number of Leaderboards. **This means in order to be competitive on the global Player Rankings, a player will need to have a high ranking Battlesnake in every Leaderboard**. The difficulty or competitiveness of each Leaderboard is not currently taken into account.

$$$
\LARGE\begin{split}
{Rating}_{base} &= \sum_{n=1}^{N} (\mu_n - 3 \cdot \sigma_n) \\
Rating &= \lfloor 10,000 \cdot \frac{1}{1 + e^{-\frac{(Rating_{\small{base}} - N \cdot \mu_0)}{N \cdot \sigma_0}}} \rfloor \\[4ex]
N &= \textnormal{Number of active leaderboards} \\
\mu_0 &= \textnormal{initial value for }\mu \\
\sigma_0 &= \textnormal{initial value for }\sigma
\end{split}
$$$
