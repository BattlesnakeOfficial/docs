---
title: Build your own Battlesnake Maps!
authors:
- Rob
description: We've open-sourced the code behind custom hazard maps, making it easier to build your own maps in code, and register them to be used with the local CLI.
---

If you've already registered your Battlesnake for Summer League 2022, you might be familiar with the new "Arcade Maze" map. But did you know you can build your own custom Battlesnake maps?

We recently open-sourced the code behind custom hazard maps, snake placement, and food spawning used in past game modes in the [BattlesnakeOfficial/rules](https://github.com/BattlesnakeOfficial/rules) repo. We've also made it easier to build your own maps in code, and register them to be used with the local CLI.

Maps are an all in one deal - each map is responsible for placing all snakes on the board, setting up the initial food and hazards on turn zero, and dynamically adding, removing, or moving food, hazards, and event snakes every turn. But if you just want to build a map that creates some hazards, don't worry - you can call out to the standard map to set up spawn points or randomized food.

Right now maps are in beta mode, and we're looking for community members to try building them. If you open a Pull Request at [BattlesnakeOfficial/rules](https://github.com/BattlesnakeOfficial/rules), we'll review and try to get it merged so that others can play-test it through the CLI. If a map plays well, we'll move it into a new challenge or the Battlegrounds on [play.battlesnake.com](https://play.battlesnake.com)!

A new game map has already been contributed by the amazing [coreyja](https://play.battlesnake.com/u/coreyja/) from the Battlesnake community: the `solo_maze` map! This map not only builds a random maze for your Battlesnake to solve, but will continue to build larger mazes once food has been picked up. The map will be available for anyone to test out locally in [the latest release of the rules CLI](https://github.com/BattlesnakeOfficial/rules/releases/tag/v1.1.12), and we plan to make it available in a series of challenges on the main site soon!

See [the README for more details](https://github.com/BattlesnakeOfficial/rules/blob/main/maps/README.md) on how to implement your own Battlesnake game map!
![](./img/Screen-Shot-2022-07-04-at-11.29.12-AM.png)The "Rivers and Bridges" Map
## Preview games with the Board

You might be wondering if there's a way to check if your map will look good on the real Battlesnake game board. Now there is!

You can view a game played through the CLI with the new `--browser` option. When you pass this, a temporary local websocket server will fire up, a game board URL will automatically open in your default browser, and the game will be played back using the real game board. This feature is pretty new, so please let us know if you run into any bugs when viewing games this way. Heads up - the page can't be refreshed when viewed this way. If you need to keep a record of the game, make sure to also pass `--output <filename>` to keep a log of the results in JSONL format.
