---
title: Leaderboard and Player Ratings
sidebar_position: 6
---

import Figure from '@site/src/components/Figure';

# Leaderboard and Player Ratings

The leaderboards use the [Trueskill](https://en.wikipedia.org/wiki/TrueSkill) system to rank Battlesnakes according to their performance, and those rankings are used to generate new matches with Battlesnakes with a similar skill level.

## About Trueskill

Trueskill is a ranking system developed by Microsoft as an alternative to ELO that supports more than 1v1 matches. In Trueskill, a player's rating is a combination of two parameters, $\mu$ (**mu**) and $\sigma$ (**sigma**) which represent an estimate of a player's skill as a normal distribution with mean **mu** and standard deviation **sigma**.

<Figure caption="A normal distribution with mean mu and standard deviation sigma" credit="http://www.moserware.com/2010/03/computing-your-skill.html" src="/img/normal-distribution.png" />

All players start off with the same mu and sigma. As they play more matches, sigma decreases, representing the system having more confidence in the rating. You can visualize this as the bell curve above getting "narrower".

To calculate a single value for sorting a leaderboard, a conservative estimate of $\mu - 3\sigma$ is used, which effectively says: "We don't know exactly what your skill level is, but we're 99% sure it's above this number".

To learn more about how Trueskill works under the hood, check out these resources:
- [Trueskill Ranking System](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/)
- [Computing Your Skill](http://www.moserware.com/2010/03/computing-your-skill.html)

## How are leaderboard ratings calculated?

In the Leaderboards, each Battlesnake has a separate Trueskill mu and sigma, and we update these values after each game. The conservative estimate of $\mu - 3\sigma$ described previously is then used to sort and rank the Battlesnakes in the leaderboard. However, this estimate can produce some odd looking numbers that are hard to reason about. If you're just starting out, you don't want to see your Battlesnake given a rating of **-11.483**!

To improve on this, we transform the Trueskill rating into an integer between 0 - 10,000, by first passing it through a [logistic function](https://en.wikipedia.org/wiki/Logistic_function) which forces it into the range of 0 - 1, then multiplying by 10,000 and rounding down to the nearest integer.

$$$
\large\begin{split}
rating &= \lfloor 10000 \cdot \frac{1}{1 + e^{-\frac{(trueskill - \mu_0)}{\sigma_0}}} \rfloor \\[4ex]
\mu_0 &= \textnormal{initial value for }\mu \\
\sigma_0 &= \textnormal{initial value for }\sigma
\end{split}
$$$

<Figure caption="Transforming Trueskill ratings" src="/img/ratings_logistic_function.png" />

An important detail about this transformation is that it doesn't change the ordering of ratings in any way, just the range of displayed values. The leaderboard is also still sorted by the underlying Trueskill estimates.

## How are player ratings calculated?

:::info

The calculation of global player ratings is experimental, and likely to change.

:::

To populate a global leaderboard of players, we combine the ratings of all of each player's Battlesnakes that are in an active leaderboard. Ratings with a lower **sigma** will be weighted more heavily, as these represent the leaderboards where a Battlesnake has had more activity and should have a more accurate rating. However, the difficulty or competitiveness of each leaderboard is not currently taken into account.

$$$
\huge\begin{split}
\mu_{global} &= \frac{
    \frac{\mu_a}{\sigma_a^2} + \frac{\mu_b}{\sigma_b^2}
}{
    \frac{1}{\sigma_a^2} + \frac{1}{\sigma_b^2}
} \\[4ex]
\sigma_{global} &= \sqrt{
    \frac{1}{
        \frac{1}{\sigma_a^2} + \frac{1}{\sigma_b^2}
    }
}
\end{split}
$$$

Another way of viewing these calculations is as a weighted average of mu, where the weight is the **precision** (inverse of the variance). The sigma values are the sum of the precisions converted back into standard deviation. The mu and sigma values are then [transformed in the same way as the leaderboard ratings](#how-are-leaderboard-ratings-calculated) to produce an easy to read number between 0 - 10,000.

## Feedback

* **Do you have an issue or suggestions for this repository?** Head over to our [Feedback Repository](https://play.battlesnake.com/feedback) today and let us know!
