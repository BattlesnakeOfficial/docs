---
title: Battlesnake Developer Update - February 2022
authors:
- Aurora
---

February may be a short month, but we've managed to squeeze in some changes to Battlesnake while also enjoying all the fun of  [Spring League 2022](https://play.battlesnake.com/league/spring-league-2022/) and the currently running [North America vs Europe Caster Cup Series](https://play.battlesnake.com/competitions/caster-cup-spring-2022/)!

## Embracing Wrapped and Hazard Maps 

As was announced for the [Spring League 2022 Competitive Season](/), we have some new Battlesnake game mode conditions that have been introduced, [Wrapped Mode](https://docs.battlesnake.com/references/game-modes#wrapped) and Hazard Maps. While we've had ways to test out these new game modes as a part of beta-testing Arenas, and are now running League games in this mode, it's time to fully embrace these new (and very fun!) modes of play and make sure they are accessible in all the usual places so that everyone can enjoy wrapped mode and hazard maps going forward.

### Wrapped and Hazards now available via Create Game

When creating an ad-hoc game via the friendly pink *'[Create Game](https://play.battlesnake.com/account/games/create/)'* button on the Battlesnake website, the options to create a game in Hazard Mode now exists, as well as the ability to pick between two Hazard Map options: 'Spiral' (which is being used for [Spring League 2022](https://play.battlesnake.com/league/spring-league-2022/)) and 'Scatter' (which is being used for the [Caster Cup](https://play.battlesnake.com/competitions/caster-cup-spring-2022/)). 
![Screenshot of the 'Create Game' screen, showing ability to select a specific Hazard Map](./img/Screen-Shot-2022-02-28-at-10.39.18-AM.png)Screenshot of the 'Create Game' screen, showing ability to select a specific Hazard Map
Long-time Battlesnake fans may also notice that the UI around selecting your game mode has changed - and while we are still playing around with exactly how we want to present this, I hope everyone picks up on the fact that drop down menus provide us the *tantalizing possibility* of adding even more options going forward, which I absolutely think is a good thing.

### Rules CLI Updates

Eagle-eyed community member [EbbDrop](https://github.com/EbbDrop) noticed that we had missed updating the Rules CLI, and that both 'Wrapped' and 'Constrictor' games were being [incorrectly reported as 'Standard' for the ruleset](https://github.com/BattlesnakeOfficial/feedback/discussions/161). EbbDrop not only pointed out this issue, but was also kind enough to put up a [Pull Request](https://github.com/BattlesnakeOfficial/rules/pull/61) to fix it. Thanks so much! It's great to know that the Battlesnake community has our back.

## Game Frame Timeline when Watching Games

A really interesting [feedback discussion](https://github.com/BattlesnakeOfficial/feedback/discussions/171) started by community member [mawilson](https://github.com/mawilson) then inspired a contribution by [coreyja](https://github.com/coreyja), and well, one thing lead to another, and now there is an experimental feature for a 'Frame Scrubber' when watching playbacks of games.
![Animated gif showing how to enable the frame scrubber, and use the navigation bar to go to a specific game frame.](./img/framescrubber.gif)How to enable and use the Frame Scrubber
You can turn this feature on in the Playback Settings (via the **⚙** icon) when watching any game, and use the navigation bar to quickly move forward or back in a game.

This feature is still in progress, and the [feedback discussion](https://github.com/BattlesnakeOfficial/feedback/discussions/171) is still open. If you notice any interesting quirks or bugs, or just want to tell us what you think about this, please add to the conversation!

## Tech Tag Updates

When [Creating or Editing your Battlesnakes](https://docs.battlesnake.com/guides/getting-started#step-4-create-your-battlesnake), everyone has the option to add 'Tags' to help describe and label their Battlesnake. You now have the ability to add the tags '*Wrapped*' and '*New Relic*' to your Battlesnake. If you have a tag you think should be added, please let us know in the [Feedback Repo](https://github.com/BattlesnakeOfficial/feedback/discussions)!

We have also removed an auto-generated tag that indicated your Battlesnakes version from the [main GET request](https://docs.battlesnake.com/references/api#get) of your code. While it was interesting, this information was publicly viewable, and as community member [BoldBigFlank](https://play.battlesnake.com/u/boldbigflank/) pointed out, there is the possibility of the developer accidentally leaking secret Battlesnake information through this field. As a result, we've decided to remove this tag from being automatically included.
![Screenshot of Battlesnake tags, with the automatically generated 'version' tag circled in red](./img/tech_tag.png)Screenshot of Battlesnake tags, with the automatically generated 'version' tag circled in red
## Improvements to Game Gifs!

If you have ever clicked the purple '*View Gif*' button at the bottom of a game you are watching, you would have seen a sharable gif of the game in question, made by accessing an API from the [Battlesnake Exporter](https://github.com/BattlesnakeOfficial/exporter) project. Anyone watching that project would see that [torbensky](https://github.com/torbensky), a longtime friend of Battlesnake, has been busy at work making improvements. Colours have been enhanced! The shape of Battlesnakes is much more smooth and less blocky! There have been performance improvements! Basically all the game gifs look and work a lot better now, and it's thanks to this hard work.
![A Battlesnake game animated gif generated by the Exporter](./img/exporter_sample.gif)A Battlesnake game animated gif generated by the Exporter
## New Battlesnake Customizations!

There have been some sneaky new [customization](https://play.battlesnake.com/references/customizations/) releases, so we thought we'd mention them now and give you a hint on how you can get your hands on them.

At the end of the [2021 Fall League Caster Crown](https://play.battlesnake.com/league/fall-league-2021/#caster-crown), Aileen came out on top, yet again, and is continuing her reign as the #1 Caster. Her prize was (another!) custom Battlesnake head and tail, and she has selected a design she has named the 'Crystal Power' set. 
![The new Crystal Power Battlesnake Head and Tail customization](./img/crystalpower.svg)The new Crystal Power Battlesnake Head and Tail customization
We also have a 2022 Competitive Season Partner customization by the fabulous crew at [DigitalOcean](https://play.battlesnake.com/partner/digitalocean)! DigitalOcean has a great promotion right now where if you host your Battlesnake on DO, you can get started with a free [$100 credit](https://play.battlesnake.com/partner/digitalocean). This is an incredible way to try out their services and set your Battlesnake up for success. And to really round it off, why not also use the special Sammy Battlesnake head and tail?
![The new DigitalOcean 'Sammy' Battlesnake Head and Tail customization](./img/do_customization.svg)The new DigitalOcean 'Sammy' Battlesnake Head and Tail customization
Right now, the only way to get these customizations is to keep your eyes on the Twitch streams happening on our [Official Twitch Channel](https://battlesnake.tv/) and catch yourself a Reward Code.  I can't tell you exactly when or how, or even for how long the codes will be valid, but this is your gateway to these new customization options.

You can keep on top of our streaming schedule via the [Battlesnake Community Calendar](https://play.battlesnake.com/schedule/).

---

That's all for now. If you have any questions, reach out to us on the [Battlesnake Discord](https://discord.battlesnake.com/) server.
