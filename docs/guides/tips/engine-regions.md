---
sidebar_position: 3
description: Tips and suggestions for choosing your Battlesnake's engine region.
---

# Choosing an Engine Region

### Why Engine Regions?

There are developers from all over the world in the Battlesnake community, and we've heard that latency can be a big issue. The main Battlesnake servers are currently located in the us-west2 (Oregon) datacenter operated by Amazon Web Services (AWS), and by default the response time of a Battlesnake request is measured from there. Although you can deploy your Battlesnake into a hosting provider that's close to Oregon, local development can end up being difficult if you're  located on a different continent. Many services that make hosting easier, like Replit, also don't operate in regions that are nearby.

### What are engine regions?

We've deployed servers around the world that can handle making the requests to your Battlesnake, and we can measure the response time of your Battlesnake as seen by a server that's geographically closer to where it's deployed. So if your snake is hosted on your home network somewhere in Europe, you can change a setting on your Battlesnake to send requests through the region in the Netherlands, and avoid losing several hundred milliseconds every turn in network latency between the main Battlesnake servers and your Battlesnake.

Using these alternate regions does not affect which Battlesnakes you can play against, the rules of the game, or the matchmaking in arenas. The region is just used to measure the response time from your Battlesnake as seen from a different geographic location.

### How do I change my Battlesnake's region?

Go to your profile at [http://play.battlesnake.com/me](http://play.battlesnake.com/me), find the Battlesnake you want to change, and click "Edit". You'll see a dropdown called "Engine Region", which will default to the primary region in AWS US-WEST-2 (Oregon).

![Editing your Battlesnake](/img/wip/engine-region-1.png)

![Options for a Battlesnake's Engine Region](/img/wip/engine-region-2.png)

Selecting one of the other regions and clicking "Save" will refresh your Battlesnake's metadata through the region. If it's reachable and returns a valid response, you'll be able to see the new latency next to your Battlesnake. Hover your cursor over the "Latency" element to see the exact number in milliseconds. From now on, all [Battlesnake API requests](api/index.md) will go through the new engine region, hopefully giving your Battlesnake more time to think!

:::note
Sometimes persistent HTTP connections, DNS lookups, and other factors can cause the first request to a snake from a region to be slower than subsequent requests. If the latency seems higher than expected, try refreshing your Battlesnake again to get a more realistic estimate of the latency for most of the turns in a game.
:::

### How should I choose an Engine Region?

Choosing the right Engine Region might be a little confusing depending on where you are, and where your Battlesnake is hosted. We highly encourage testing with a few different Engine Regions to see how it affects your latency. If you're worried about affecting your snake in a League or Arena, you can make a new snake and re-use the URL.

Here are some tips for common hosting setups:

#### Running on [Replit](https://replit.com)

* Replit decides where to run your repl based on your geographic location. They have several datacenters around the world, and pick one automatically for you when you create the repl.
* If you're in North America, Replit currently seems to deploy in a region on the east coast. As a result, the "GCP US-EAST4" or "DigitalOcean TOR" regions may have lower latency.
* Otherwise, you should pick the region that's closest to you geographically.
* If you're traveling, or using a VPN, Replit might not detect your location accurately. In that case, test out the other regions and see if you get a better result.

**Running locally with** [**Ngrok**](https://ngrok.com/)

* Choose a region that's close to what Ngrok shows in the "Region" field in your terminal.
* You can force Ngrok to use a different region for a tunnel with the `--region` option.

#### Running on AWS, GCP, DigitalOcean

* Pick the region that's closest to the cloud provider's location/region you've deployed your code into.
* e.g. for AWS us-east-1, use "GCP US-EAST4".
* for DigitalOcean TOR1, use "DigitalOcean TOR (Toronto)"

#### Running on Heroku

* If you're using the "United States" Heroku region, use the "GCP US-EAST4" region.
* If you're using the "Europe" Heroku region, use the "GCP EUROPE-WEST4" region.

### Currently supported engine regions

* **Amazon Web Services (AWS)**
  * US-WEST-2 (Oregon) - **This is the default region**
* **Google Cloud Platform (GCP)**
  * GCP US-EAST4 (Virginia)
  * GCP EUROPE-WEST4 (Netherlands)
  * GCP ASIA-SOUTH1 (Mumbai)
* **Digital Ocean**
  * DigitalOcean FRA (Frankfurt, Germany)
  * DigitalOcean SGP (Singapore)
  * DigitalOcean TOR (Toronto, Canada)

### IPv6 Support

Currently the default AWS region (`AWS US-WEST-2`) and DigitalOcean regions do not yet support IPv6 Battlesnakes. If you need support for IPv6, you'll need to use one of the GCP regions.

You can enter your Battlesnake's URL in one of two ways:

* With a regular hostname: `https://my-battlesnake-url.com`, where `my-battlesnake-url.com` has a AAAA DNS record pointing to your server's IPv6 address
* With an IPv6 address: `http://[b513:e52a:d9cd:d5fd:eeb2:fbed:d24c:b12a]` (Note the square brackets around the address)
