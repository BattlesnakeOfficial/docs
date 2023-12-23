---
title: Competitive Play
description: A collection of tips for developing your best Battlesnake.
---

# Tips for Competitive Play

These tips have been suggested and collected by the community over the years. Hopefully, they'll be helpful to new Battlesnake developers playing the game for the first time!


## Concurrency and Game IDs

Web development often means handling multiple requests concurrently and Battlesnake is no different. It's quite likely your Battlesnake will be playing multiple games at once, and you should develop your web server with that in mind.

Start thinking about this early, and use game identifiers provided by the game engine to keep your code organized, and properly prioritized.

Note that not all web servers are built for handling multiple requests concurrently. You'll want to choose carefully and follow best practices for deploying your particular stack to a production environment.


## Keep Your Battlesnake Server Running

Some hosting services like [Heroku](https://www.heroku.com), [Replit](https://repl.it), and even [AWS](https://aws.amazon.com) will de-provision or turn off servers when they're at low usage. For example, free Heroku apps will sleep automatically after 30 minutes of inactivity.

Think about strategies you can deploy to make sure your Battlesnake is awake and running at full speed when you need it most. This problem is relevant to all web development, not just Battlesnake. We encourage you to explore ways that software developers solve this outside of Battlesnake too.


## Don't Take Too Long to Respond

The Battlesnake game engine gives each Battlesnake a limited amount of time to respond to API requests - if your Battlesnake takes too long, it could be disqualified from games or the engine could make moves on its behalf.

The amount of time you have to respond is provided in each API request sent. In most cases, it defaults to 500ms, but this value can change depending on the map and game mode being played.

For most Battlesnake developers this won't be a problem. However top competitors will optimize their Battlesnakes to use as much compute time as possible.

If you're experiencing additional latency based on where your Battlesnake is hosted geographically (i.e. far from the game engine servers), check out alternative [Engine Regions](guides/engine-regions) and consider deploying your Battlesnake closer to the game engine.


## Testing Your Battlesnake Locally

All Battlesnake game logic is [open source](https://github.com/BattlesnakeOfficial/rules) and available for personal use. If you'd like to run games locally using your own development environment, there's an included CLI.

Install the [Battlesnake Rules CLI](https://github.com/BattlesnakeOfficial/rules/tree/main/cli) to get started.

Running games locally can speed up your development cycles significantly, but can also be more complex than using play.battlesnake.com.


## Brand Matters!

Be creative with your Battlesnake name and description. Names like _"test"_ or _"snek-1"_ are super popular and are easy to confuse with other Battlesnakes. If you really want your Battlesnake to stand out during competitive play, best to give it a creative and unique name.

The best Battlesnake names are fun, creative, and also abide by our [Code of Conduct](https://docs.battlesnake.com/conduct/). Names in violation of our Code of Conduct will not be tolerated.
