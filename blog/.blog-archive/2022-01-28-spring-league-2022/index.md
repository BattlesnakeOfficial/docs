---
title: Spring League and 2022 Competitive Season
authors:
- Brad
description: It's here! The 2022 Competitive Season starts this week with a brand new game mode, a new map, and a whole new matchmaking system. We're going to detail everything you need to know to compete throughout the year, starting now with Spring League. Let's go!
---

### The 2022 season kicks off with [Spring League](https://bit.ly/3g6Akzb)! Registration is now open and games begin February 11th.

It's here! The 2022 Competitive Season starts this week with a brand new game mode, a new map, and a whole new matchmaking system. We're going to detail everything you need to know to compete throughout the year, starting now with [Spring League.](https://bit.ly/3g6Akzb) Let's go!

📝

**TL;DR**
[Spring League registration](https://bit.ly/3g6Akzb) is now open! It features a [new "wrapped" game mode](https://docs.battlesnake.com/references/game-modes#wrapped), our first community-designed map, and a new, simpler matching system. League games begin running daily on February 11th.

![2022 Spring League Graphic with Partner Logos](./img/SpringLeague2022Instagram007.png)
### What is competitive Battlesnake and how do I get involved?

Competitive Battlesnake consists of a series of [competitive leagues](https://docs.battlesnake.com/guides/quick-start-league-guide) that run throughout the year, aptly named [Spring](https://bit.ly/3g6Akzb), Summer, and Fall League. The season ends in December with the Winter Classic Invitational, where a 2022 Battlesnake Champion will be crowned.

Battlesnake Developers can join any of these leagues, earn rank and rewards through daily automated gameplay, and keep track of progress and replays with real-time leaderboards. At the end of each league, qualifying Battlesnakes participate in a [live-streamed Battlesnake Tournament](https://www.youtube.com/watch?v=RY0tzh2eUNo) for additional prizes!

Competitive Battlesnake is a lot of fun to get started, quite challenging at high levels, and incredibly entertaining, supportive, and encouraging along the way. We know you'll have a great time!

If you're new to Battlesnake and not sure how to get started, [check out the quick-start coding guide](https://docs.battlesnake.com/guides/getting-started) or join the [Battlesnake Discord server](https://play.battlesnake.com/discord) and our community will be happy to help :)

## Partners

We're very happy to announce that this year's Battlesnake Competitive Season is presented by our wonderful partners [DigitalOcean](https://play.battlesnake.com/partner/digitalocean), [Twilio](https://play.battlesnake.com/partner/twilio), [New Relic](https://play.battlesnake.com/partner/newrelic), and [RBC](https://play.battlesnake.com/partner/rbc).
[![2022 Battlesnake Competitive Season Graphic with Partner Logos](./img/2022SeasonPartnersTwitterCover-1.png)](https://bit.ly/3g6Akzb)
Battlesnake is growing faster than we ever imagined, all thanks to our wonderful community and supportive partners. Our 2022 partners are committed to helping the Battlesnake community beyond just branded support, and we have some really fun (and unique!) ideas for how they can get involved throughout the year 😀

## Prize Pools

This year's competitive season prize pool is just over $10,000 in cash and swag. Each seasonal league will have a cash prize pool of $1,000, and the Winter Classic will have $5,000 up for grabs. Along the way, there'll be the usual amount of swag giveaways, medals, and trophies 🏆

We've been shifting and experimenting with prize pools lately, ranging from Battlesnake swag to custom medals and trophies, and more recently cash gift cards for online providers. We like where this has landed as of late and hope to keep this up throughout 2022.

## New Game Mode: Wrapped
![Wrapped Mode Game Announcement](./img/image-3.png)
This season will feature a new game mode called "wrapped" - a community-driven game mode first [suggested by Maximtap](https://github.com/BattlesnakeOfficial/feedback/discussions/24) and [lovingly implemented by joram](https://github.com/BattlesnakeOfficial/rules/pull/30). It's never been used in competitive Battlesnake before, and we are very excited to launch it as part of [Spring League](https://bit.ly/3g6Akzb).

Wrapped mode dramatically expands the game board by allowing Battlesnakes to move outside the traditional boundaries and wrap around from one side to the other in a seemingly infinite loop.
![Wrapped Mode GIF](./img/Kapture-2022-01-26-at-20.16.45.gif)
Battlesnake Developers can identify the new game mode ruleset by inspecting the ruleset object sent in every [Battlesnake API](https://docs.battlesnake.com/references/api) request.

#### **Q: Is this just for [Spring League](https://bit.ly/3g6Akzb) or the whole year?**

The entire 2022 season will use this new game mode, including all three leagues and the Winter Classic Invitational. We've heard that new game modes are a lot of fun, and require adequate time for developers to build, test, and execute reliable strategies. That's why we're committing now to use the wrapped game mode throughout the entire 2022 Competitive Season, allowing for more complex strategies and meta-play to emerge throughout the year. Good luck!

#### **Q: What about board size, timeouts, opponents, etc?**

Spring League will operate under similar conditions as previous leagues: 11x11 game board, 4 Battlesnakes per game, and a 500 ms timeout. We don't expect these settings to change between leagues during 2022 (outside of [Snake Pit Live shenanigans](https://www.youtube.com/watch?v=FB2wkxndeog) of course).

## Community Designed Hazard Map

Along with a new game mode, today we're also releasing a new hazard map. Hazard maps are our new name for algorithms that spawn and remove hazards throughout the game - our first hazard map, "Battlesnake Royale", was used last season

The new hazard map is named **"Spiral"** and was [designed by community veteran altersaddle](https://play.battlesnake.com/u/altersaddle/) exclusively for use in[ Spring League](https://bit.ly/3g6Akzb). It features an expanding hazard area centered on a random grid location and intentional allowances for the new wrapped game mode.
![Battlesnake game showing two snakes playing wrapped mode with spiral hazards](./img/Kapture-2022-02-07-at-11.51.04.gif)New Spiral Hazard Map
Our intent is to rotate hazard maps between leagues while keeping the game mode fixed, hopefully allowing more community ideas to be used in competitive play. We also plan to release Battlesnake API support to identify when a map is being played, as well as support for custom maps later this year - stay tuned for more.

## Matchmaking Updates

If you've been in [Discord](https://play.battlesnake.com/discord) lately, you'll know that we've been testing a new matchmaking system. This new system will be used for [Spring League](https://bit.ly/3g6Akzb) and throughout the 2022 season.

Our goal here is simple: we want to make league matchmaking obvious and transparent for all developers. 

To achieve this, we've completely removed hidden matchmaking values and TrueSkill from the process. Instead, we're opting for a rank-based, best-effort matching system that should produce matches that are always obvious in the context of the current league ranking. We hope to publish the majority of this code in the coming months as the system solidifies.

We understand that this new system may not reflect an objective representation of a Battlesnake's "skill", and may result in the odd unfair matchup - these will average out over the course of the league. We believe this system better serves our goals with competitive league play, where obviousness, transparency, and visible progression are most important.

#### **Q: Why not stick to TrueSkill for ranking and matching?**

The short answer is we feel rank-based matching will be more accessible and obvious for new players. We experimented with TrueSkill matching in 2021 and it resulted in invisible matching boundaries and parallel leaderboards that ultimately left developers more confused.

We know there are developers in the community that want a truly objective TrueSkill or ELO leaderboard, and we hear you. We are very interested in providing a venue for this outside of the competitive league context.

## New Matchmaking Windows

Previous leagues operated on consistent, high-frequency game generation, starting games every 10 minutes. Depending on latency and leaderboard size, this resulted in about 100 games being played by each Battlesnake throughout each day*.*

[Spring League](https://bit.ly/3g6Akzb) will use a new scheduler that will run a fixed number of games each day during a pre-determined time window. This means that your Battlesnake could play back-to-back in up to 100 games during an 8-hour window each day, followed by downtime until the next matchmaking window.

We hope this gives developers more opportunity to deploy changes without risking downtime, and more data to work with when they want to improve their Battlesnake's performance. It should also reduce server uptime requirements for those using free and low-cost hosting options, which in turn should allow more folks to compete at a high level.

This is very much an experiment for the [2022 Spring League](https://bit.ly/3g6Akzb) that we'll be watching closely and re-assessing once the league completes. Stay tuned to [Discord ](https://play.battlesnake.com/discord)and [Twitch](https://Battlesnake.TV) to see how the experiment is going.

#### **Q: When is the [Spring League](https://bit.ly/3g6Akzb) play window?**

[Spring League](https://bit.ly/3g6Akzb) games will run daily at 1:00 am ET / 10:00 pm PT, and we expect games to run for 6-8 hours. We'll be watching this new system closely, and will be looking for feedback from the community about window timing for future leagues.

#### **Q: Will my Battlesnake play in multiple games at once?**

No, this new system runs games for your Battlesnake sequentially, promising to never run more than one game for each Battlesnake at any given time. Note this only applies to league games - games from other sources (global arena, custom games, etc) may still run concurrently. It's up to developers to prevent those games from impacting their league results.

#### **Q: What if I enter the league during the play window?**

The new matching system will generate all the matchups for a given day upfront, meaning that if your Battlesnake enters the league after the scheduler has begun, your Battlesnake will not be included in any games until the next day.

## Tournament Format

We love live Battlesnake tournaments, and we hear you do too! As part of that, we're hoping to make tournament play more engaging for those participating. 
[![Battlesnake Tournament GIF](./img/tournament.gif)](https://bit.ly/3g6Akzb)
This year we'll be experimenting with the format of competitive tournaments, hopefully allowing each Battlesnake more games and opportunities to win throughout.

We'll be talking about this more as we get closer to the first [Spring League ](https://play.battlesnake.com/spring-league)tournament broadcast on March 19th.

## Snake Pit Live!

As always, with a new competitive season of Battlesnake comes a new fun-filled season of Snake Pit Live! This bi-weekly Battlesnake stream is the series of choice for those competitors looking to catch up on all the latest league action, while also enjoying the lively antics of the SPL Casting Crew!

![](./img/Screenshot-2022-01-24-143918.png)

![](./img/Screenshot-2022-01-24-144036.png)

![](./img/Screenshot-2022-01-24-143852.png)

Sure to feature a multitude of interesting and entertaining new Battlesnake inspired shenanigans, you can catch Curtis, Aileen, Chris, (and maybe even Joe) every other Saturday during competitive leagues.

## Good Luck!

And with that, the Battlesnake 2022 Competitive Season is officially underway! We're so excited to see what this year will bring, and we hope you are too 🎉 😀

As always, we'd like to hear what you think. If you have ideas or concerns, you can always get in touch with our team directly in the [Battlesnake Discord](https://play.battlesnake.com/discord), provide feedback in our [discussion forums](https://play.battlesnake.com/feedback), or just email us directly at [hello@battlesnake.com](mailto: hello@battlesnake.com).

### Good luck, have fun, and happy battlesnaking! 🐍🥂🐍
[![Battlesnake Team Graphic](./img/image-2.png)](https://bit.ly/3g6Akzb)
Brad, Chris, Aurora, Darcy, Rob, Sherri, Andrew, and the Battlesnake Team **💜**
