---
title: Battlesnake 2026 Update
description: What's ahead for Battlesnake this year - new features, community involvement, and how you can help shape the future.
authors:
  - Corey
---

Hey Team! 👋

This is Corey, you may know me as `coreyja` from [Battlesnake](https://play.battlesnake.com/profile/coreyja), [Youtube](https://www.youtube.com/@coreyja), or [Github](https://github.com/coreyja).

I've been playing Battlesnake [since 2021](https://github.com/coreyja/battlesnake-rs/commit/ebd84eecc9ca89f7c05259a60c8ff764b469435f) and been on the Core Team since 2023 when Battlesnake was given back to the community.

Today I'm happy to share that I'm stepping in to run the Battlesnake infrastructure going forward. The play.battlesnake.com experience isn't changing in the immediate future, but I am planning to bring back things like Single Player mode and Custom Tournaments!

<!--truncate-->

## What's Coming for Players

### Custom Tournaments

This has been the most requested feature we've gotten over the last couple of years, and I think it's important for Battlesnake's continued growth to bring it back. It was unfortunately expensive to run in the current infrastructure and tooling, but I think it's worth investing in so that communities can run their own Battlesnake tournaments, all hosted and provided by the Battlesnake site.

In the last week someone also mentioned Custom Leaderboards, where we could run a private leaderboard for some snakes, and have them compete over a longer period of time. Adding more leaderboards would be a big increase in game volume, but it's something I'd love to support if we can.

### Game Archive

One thing from my personal wishlist for a while has been a game archive. I personally want an archive of games to verify other battlesnake tools against, but we often get requests for this for training ML snakes. Games are also only available for viewing for a limited time, and it would be great to have a longer term archive of games that can be replayed in the browser.

I'm working on archiving the games to Object Storage for longer term storage. The first use case will be to provide replay longer than 30 days, but I want to think about bulk downloads of archives as well.

## The RFC (Request for Comment) Process

I'm introducing an RFC process for player-facing and core infrastructure changes. This gives the community input on changes before they happen, and gives us a way to publish intended changes and gather feedback.

I've got some core infra changes planned for the coming months, so this is a good time to get the process rolling!

Here is the RFC repo if you want to subscribe for updates there, or submit an RFC of your own!
https://github.com/BattlesnakeOfficial/rfcs

### How It Will Work

RFCs will live in a Git repo as markdown files, alongside the resulting "Specification Documents". To open an RFC, someone will create a PR with a draft spec and open it up for community feedback. Depending on the size of the change, we'll have a shorter or longer discussion period before finalizing.

RFCs will cover things like new game modes, rule changes, and major feature additions. The first one will be for Flashlight Tag mode - I wrote up a draft RFC ([and someone implemented it in the meantime](https://github.com/BattlesnakeOfficial/rules/pull/127)) but I think it will make a great first RFC and spec document.

If you've got ideas for what you'd like to see go through this process, come chat in the Discord or send me an email at [coreyja@battlesnake.com](mailto:coreyja@battlesnake.com).

## How You Can Help

### GitHub Sponsors

[GitHub Sponsors](https://github.com/sponsors/BattlesnakeOfficial) is how Battlesnake stays funded. And to be blunt, it only covers about 50% of our costs, and that's with all the core team volunteering our time. And if we are going to build out some new features this year, we need your help now more than ever!

I'm also thinking that some features, like potentially game archive downloads, might be gated by some form of sponsorship to help encourage contributions from the community. But definitely want to balance this with open-ness, so expect anything like this to come through an RFC first.

I'm excited for Battlesnake in 2026 and hope you are too! Battlesnake is nothing without the community, and I can't wait to see what we build together.

If you want a more technical behind the scenes look at some of this development, keep an eye on my personal blog at [coreyja.com](https://coreyja.com) for an upcoming deep dive.
