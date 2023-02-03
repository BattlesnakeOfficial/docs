---
title: Battlesnake Developer Update - September 2021
authors:
- Aurora
---

We are now well and truly into Fall in the northern hemisphere, as marked by the traditional seasonal change of what Battlesnakes are chompin' on. The time has come for them to slither towards their favourite seasonal spiced beverage, which became available at the opening of the 2021 Fall League Ladder on September 24th.

Although we may have had a tasty seasonal beverage in one hand, we still had a second hand free to type out some code changes this month.
![](./img/psl_snake.png)Battlesnake '😎 Nerdy Caterpillar 🐛' reaches for a nutritional spiced latte.
## Final Touches on Fall League

Before opening the Ladder on September 24th, parameter tweaks to the matching algorithm were made, as well as a last-minute change to prevent Battlesnakes who have achieved Bronze level status from demoting out back to the introductory stage. Chris has kindly laid out all the details in the [Competition & Tournament Details]() blog post. Balancing a fun competition with an effective matching and ranking algorithm is an ongoing process, and we appreciate all the feedback we're getting on this!

And if you haven't registered yet, it's not too late! [Fall League](https://play.battlesnake.com/league/fall-league-2021/) runs until November 20th, so there is still plenty of time to get a Battlesnake in there!

## New High-Latency Arena
![](./img/galaxy_brain.png)A new high-latency Roayle Arena.
As requested by [penelopezone](https://play.battlesnake.com/u/penelopezone/), a new public arena has been created, dubbed *[Galaxy Brain](https://play.battlesnake.com/arena/global-royale-galaxy-brain/)*, a Global Royale with a 2,500ms timeout! This is the place to pull out your computationally complex algorithms and play games with other like-minded folks who are looking to take it slow and see just how low you can go on your search tree.

## Gameplay Bug Fixes

Folks in Discord reported a bug where adding a random Battlesnake to a game no longer worked. We also were able to address an [older issue](https://github.com/BattlesnakeOfficial/feedback/discussions/53) where a Battlesnake experiencing an error, or a Battlesnake responding in more than the standard 500ms, both appeared as having 0 ms latency in the game statistics. We are pleased to announce that the ability to add random Battlesnakes to a game is now restored, and that latency highs and lows are no longer reported as just 0 ms. Good thing too, as those Galaxy Brain Battlesnakes are really hitting some new latency highs.
![](./img/latency.png)Latency graph from a Global Royale (Galaxy Brain) game.
## Front Page Touch Ups

Some folks noticed a flurry of small updates and changes to the main page of [play.battlesnake.com](https://play.battlesnake.com/), updating text, images, and of course the favicon. It's never too late or too early to do some spring cleaning! I'll leave it as an exercise for the reader to decide which case applies to us.

## Challenges Refresh

As of writing this update, there is still a little bit of polishing to do, but it is hard to miss the fact that [Challenges](https://play.battlesnake.com/challenges/) have had an update, not only visually, but functionally as well. All the juicy details will be outlined in their own blog post coming out soon, but I do want to recognize the contributions of our newest developers, Rob and Sherri, who were able to make changes to both the Engine and the Board to allow us greater flexibility, such as having better control over initial food placement, and expanding what it means for a game to be 'over' such that single-Battlesnake challenges can have more interesting win conditions. This foundational work really opens up some fun possibilities for the future!

## Hacktoberfest
![](./img/hacktoberfest.png)Hacktoberfest 2021!
If you are the sort of person who likes to participate in the annual [Hacktoberfest](https://hacktoberfest.digitalocean.com/) event, this year we'd like to invite you to spend some of your hacking time making some updates to the [Battlesnake Official](https://github.com/BattlesnakeOfficial) repositories.

Each participating repository has a *CONTRIBUTING.md *file with instructions, and please check the [Feedback Repo](https://github.com/BattlesnakeOfficial/feedback/discussions) for specific areas where we are looking for some assistance, with items tagged as "flag/help-wanted ✋". If you have any other suggestion or contribution in mind, please feel free to reach out to us and chat!

---

That's all for now. If you have any questions, reach out to us on the [Battlesnake Discord](https://discord.battlesnake.com/) server.
