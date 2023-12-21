---
description: Tips and suggestions for choosing your Battlesnake's engine region.
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

Here are some tips for common hosting setups.

#### Running on [Replit](https://replit.com)

Replit decides where to run your repl based on **your geographic location**, meaning you should choose the region that's closest to you geographically. If you're traveling, or using a VPN, Replit may not detect your location accurately. In that case, test out the other regions and see if you get a better result.

#### Running locally with [Ngrok](https://ngrok.com/)

Choose a region that's close to what Ngrok shows in the "Region" field in your terminal. You can force Ngrok to use a different region for a tunnel with the `--region` option.

#### Running on AWS, GCP, or DigitalOcean

Pick the region that's closest to the cloud provider's location/region you've deployed your code into. (e.g. for AWS us-east-1, use US-WEST)

#### Running on Railway

Railway deployments run on GCP US-WEST, use the US-WEST engine region for optimal latency.

#### Running on Heroku

If you're using the "United States" Heroku region, use the US-EAST region. If you're using the "Europe" Heroku region, use the EUROPE region.
