---
title: Announcing Engine Regions
authors:
- Rob
---

Are you playing Battlesnake from outside of North America? Today we're releasing a beta feature that could make your Battlesnake faster, and local testing much easier.

We've heard from many in the community that running a Battlesnake server locally is challenging when you're located far away from our main infrastructure hosted in AWS's Oregon region. You might lose several hundred milliseconds just in latency between your Battlesnake and the game engine, leaving little or no time to respond. On platforms like Replit, your Battlesnake might end up running on a server close to you geographically, but far away from the game engine.

## Introducing Engine Regions

We've launched new servers in India (Mumbai), Netherlands (Eemshaven), and the east coast of the USA (Virginia) using Google Cloud Platform. The main game engine can use these servers to send requests to your Battlesnakes, and we measure the response time as seen by the Engine Region server you choose. So if your Battlesnake is running in Europe, you can select the "GCP EUROPE-WEST4" (Netherlands) region and latency should be much lower for you!

Does this mean you'll be playing against only other Battlesnakes using the same Europe region? No - you'll still be participating in the global Battlesnake leagues, arenas, and competitions, and matchmaking will be unaffected. The choice of Engine Region should only affect your Battlesnake's latency.

## How to Switch Regions

Go to your profile at [http://play.battlesnake.com/me](http://play.battlesnake.com/me), choose a Battlesnake and click "Edit", and you'll see a new dropdown for "Engine Region":
![](./img/Screen-Shot-2021-11-18-at-3.00.24-PM.png)Selecting your Battlesnake's Engine Region
[Check out the documentation](guides/engine-regions) for more info on how to select the right region for your Battlesnake and hosting platform!

## Looking for Feedback!

These new regions are still in beta, and might have some rough edges. If you've tested them out and see some issues, or just want to brag about how much faster your Battlesnake is, please let us know in the [Feedback Repo](https://github.com/BattlesnakeOfficial/feedback/discussions/new?category=bug-report), or on [Discord](https://play.battlesnake.com/discord/). If you send us a game ID, we can take a look in our logs.

We're also hoping to launch more Engine Regions, so if you'd like to see one closer to you, please open a [feature request on the Feedback Repo](https://github.com/BattlesnakeOfficial/feedback/discussions/new?category=feature-request)!

A big thank you to community members [TheApX](https://github.com/TheApX) and [xtagon](https://github.com/xtagon) for [ideas and suggestions related to this feature](https://github.com/BattlesnakeOfficial/feedback/discussions/104).
