---
title: Battlesnake Developer Update - March 2022
authors:
- Aurora
---

And just like that, March is over! Spring League 2022 has come to an end and the Battlesnake Dev team is now planning out what we can release before the next League kicks off in June. But first, let's review what happened in March!

## New Double-Win Tournament Play

Those of you who watched the Spring League 2022 final Tournaments may have noticed that there was a new win-state for tournament play. Historically, in the early rounds of a tournament we would play two games - the first winner would advance to the next round, and then a 2nd game would be played (minus the winning Battlesnake) and identify a 2nd winner to also advance to the next round.
![An image a text that diagrams that two games are played for each round, and two winners are selected.](./img/Screen-Shot-2022-03-30-at-10.48.27-AM.png)The classic tournament format
For the [Platinum](https://play.battlesnake.com/competitions/spring-league-2022/spring-league-2022-platinum/brackets/) and [Elite](https://play.battlesnake.com/competitions/spring-league-2022/spring-league-2022-elite/brackets/) tournament this Spring we had a change. In the early rounds, the first two Battlesnakes to each achieve two victories were advanced to the next round (and as soon as a single Battlesnake won two games, it was removed from the group). The net result was more games, more chances to win, and more fun.

Building this out has required some code changes and adjustments on the backend, and we're pretty happy to see the code shaping up in a way that we can explore and expose other tournament formats in future.

You can watch the new format in action on Twitch.
[

Battlesnake Spring League 2022 - Elite Tournament - battlesnakeofficial on Twitch

battlesnakeofficial went live on Twitch. Catch up on their Battlesnake VOD now.

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/6b1df42ae86f46ed5714_battlesnakeofficial_15901203592_9553583752/thumb/thumb1439291227-640x360.jpg)
](https://www.twitch.tv/videos/1439291227)[

Spring League 2022 - Platinum Tournament - battlesnakeofficial on Twitch

battlesnakeofficial went live on Twitch. Catch up on their Science & Technology VOD now.

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/37ad1840858d97d14040_battlesnakeofficial_27308003238_9323625043/thumb/thumb1430616738-640x360.jpg)
](https://www.twitch.tv/videos/1430616738)
## Updating the Battlesnake API Map Properties

This spring saw the release of several [new hazard maps](/) and uses of hazards beyond what [Royale](https://docs.battlesnake.com/references/game-modes#royale) mode gives us.

To make sure this information is correctly and consistently communicated, the API has been updated and changes finalized so that developers can see both the `hazardMap` and `hazardMapAuthor`. Check out the [RulesetSetting object](https://docs.battlesnake.com/references/api#rulesetsettings) in the Battlesnake API documentation for details!

## Favorite Even More Battlesnake Games!

Community member [BoldBigFlank](https://play.battlesnake.com/u/boldbigflank/) discovered the secret maximum number of Battlesnake games a single person can favorite... and found that number to be lacking. So we've cranked up the value to 250 games, but leave the consequences of managing that many favorite games in your hands.
![A screenshot of a Battlesnake game, showing the 'Add to Favorites' button](./img/Screen-Shot-2022-03-30-at-10.11.56-AM.png)When watching a Battlesnake game, click the 'Add to Favorites' button to save it in your profile
Admittedly, the 'Favorites' feature is pretty primitive at the moment. This is absolutely something we'd like to revisit in the future, but for now if you want to save any Battlesnake games for later reference, this will get the job done!

## Community Contribution - Reporting Draws

We love it when folks take advantage of the open source portions of the Battlesnake codebase, and want to thank community member [demin-dmitriy](https://github.com/demin-dmitriy) for noticing and creating a [pull request](https://github.com/BattlesnakeOfficial/rules/pull/66)  to address some invalidly reported data in the Rules repository when a Battlesnake game ended in a draw.

All together we are a much more mighty team, so we appreciate all the folks who contribute in this way!

## Continuing Projects
![Image of at construction-worker Battlesnake with a laptop, hardhat, and tools, with the text 'Battlesnake is under maintenance'.](./img/Asset-1@2x.png)When we write code, we make sure we have a hardhat and hammer at the ready, just in case.
March has had the Battlesnake Devs heads down as we have been focusing on several longer running active projects that are not quite ready to release. We continue to tackle a major overhaul in how the user interface is built, designed, and rendered, we're expanding our [Engine Regions](https://docs.battlesnake.com/references/engine-regions) to provide better global coverage, and we are hoping to launch a new 'Teams' beta before Summer League starts.

Keep your eyes peeled for future blogposts that will outline all the details of these features when they launch!

---

That's all for now. If you have any questions, reach out to us on the [Battlesnake Discord](https://discord.battlesnake.com/) server.
