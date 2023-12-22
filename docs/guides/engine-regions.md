---
title: Choosing an Engine Region
description: Tips and suggestions for choosing your Battlesnake's engine region.
sidebar_position: 2
---

# Choosing an Engine Region

You can control where Battlesnake API requests originate from by selecting an appropriate engine region. This can be helpful when trying to minimize latency between your Battlesnake server and the game engine.

Choice of engine region does not affect which Battlesnakes you can play against, the rules of the game, or the matchmaking in arenas. The region selected is just used to measure the response time from your Battlesnake to each APi request.

### What regions are available?

There are three engine regions available, all hosted on Google Cloud Platform.
* US-WEST (Oregon)
* US-EAST (Virginia)
* EUROPE (Netherlands)

Each region is considered equal in terms of performance and availability.

### How should I choose an Engine Region?

Choosing the right engine region can depend on where you are located, and where your Battlesnake is hosted. We highly encourage testing with a few different regions to see how it impacts your latency to the game engine. If you're worried about testing different regions with a competitive Battlesnake, you can always make a second Battlesnake and re-use your production URL.
