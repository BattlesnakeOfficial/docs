---
title: Quickstart
description: A guide to building your first Battlesnake.
---

# Quickstart

This guide will help you deploy and test your first Battlesnake using an [Official Starter Project](starter-projects.md) and [Replit](https://replit.com).

Battlesnake developers can **use any web development tech stack** they'd like. If you do not wish to use Replit, feel free to follow along with your preferred setup!

Don't feel like reading? Follow our Quickstart video series instead.

<iframe class="video" src="https://www.youtube.com/embed/IA7CeGRfuNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How does it work?

To play Battlesnake you'll need to build and deploy a web server that implements the [Battlesnake Webhook API](api/index.md).

During a game of Battlesnake, the game engine will send requests to your web server. How you program it to respond to these requests will determine your Battlesnake's moves, behavior, and competitive success.

You can use any programming language, cloud platform, and strategy you want - from simple game logic to machine learning and AI.

## 1. Choose a Starter Project

There are several community-supported starter projects for popular languages and technologies. Each one is documented with detailed development and deployment instructions.

For your first Battlesake we recommend choosing one of the [Official Starter Projects](starter-projects.md#official-templates) in a language you're most comfortable with. These can all be deployed instantly to Replit using the 'Run on Replit' button in the GitHub readme for each project.

:::tip
If you're unsure which language to choose, try starting with [JavaScript](https://github.com/BattlesnakeOfficial/starter-snake-node) or [Python](https://github.com/BattlesnakeOfficial/starter-snake-python) as they're both widely supported and popular in the Battlesnake community.
:::

Each of the Official Starter Projects implement the  [Battlesnake Webhook API](api/index.md) with enough code to run a simple Battlesnake that moves randomly.

## 2. Customize Your Battlesnake

To make sure everything is working correctly when you deploy and run your Battlesnake for the first time, **you can edit it's appearance** (such as the color, head, and tail of your Battlesnake).

The `README.md` file in each Starter Project describes where the customization code can be found. Customizations are returned by the root ["GET /"](api/requests/info.md) command of the [Battlesnake API](api/index.md).

![Customizing the Battlesnake colour to 'red' #ff0000 for the Python Starter Snake](/img/python_customization.png)

:::tip
While color is a great place to start, you can also customize your Battlesnake with different combinations of heads and tails. Customization options are described in detail in the [Customization Guide](guides/customizations.md).
:::

## 3. Run Your Battlesnake Server

To start your Battlesnake using Replit click the **Run ** button at the top of the screen.

![Run button located at the top of the screen on the Replit website.](/img/replit_run.png)

The first time you start your Battlesnake server you may see packages and dependencies being installed in the Replit console window. This may take a few moments, but will only happen on the first run.

Once installation is complete, your Battlesnake server will start. You should see the live output from your Battlesnake server and its Replit URL at the top of the screen. You will need this URL to register your Battlesnake in the next step.

![Sample Python Starter Project running, with URL and output](/img/replit_server_running_highlight.png)

The text shown below should also match any customization changes you made in the previous step. For example, if you changed your Battlesnake to be red with the hex color value `#ff0000` then your output should look like this:

```json
{"apiversion": "1", "author": "", "color": "#ff0000", "head": "default", "tail": "default"}
```

This means that your Battlesnake is running correctly and is ready to play games!

:::tip
Keeping Replit open in a second window or tab while games are running is helpful for watching server activity and debugging any problems with your Battlesnake.
:::

## 4. Register Your Battlesnake

Once your Battlesnake has a working URL you can register it on the Battlesnake website and start playing games. You only need to register a Battlesnake's URL once - after that you can edit code and restart the server without re-entering its URL.

[Click here to create a new Battlesnake in your account.](https://play.battlesnake.com/account/battlesnakes/create)

Copying your server URL from Replit (see previous step) into the 'URL' field for your new Battlesnake. Next, give it a great name, sassy description, and click save.

![Form for registering a Battesnake](/img/create_battlesnake.png)

:::caution
If you get an SSL error when loading your Replit Battlesnake server URL, try changing the `https://` to `http://`.
:::

If everything is set up correctly your Battlesnake will show as operational and have the color, head, and tail you set in your code. Some additional information will also be displayed, such as the latency between the game engine and your Battlesnake server.

![Battlesnake created screen, with color customization.](/img/battlesnake_created.png)

:::caution
If there is a problem or error with your Battlesnake, you can make changes to your code or configuration and then click **Ping** to test it again.
:::

![Ping button on the Battlesnakes page](/img/refresh_snake_page.png)

## 5: Play Your First Game

You are now ready to test your Battlesnake in live games!

So far, your Battlesnake has a sharp new look but is only smart enough to move in a random direction. This means at this point your Battlesnake is most likely going to collide with a wall or itself pretty quick -- that's ok! We all have to start somewhere.

Create a custom game by going to [play.battlesnake.com/account/games/create](https://play.battlesnake.com/account/games/create).

![Form for creating a new Battlesnake game](/img/play_game_start.png)

You should see your new Battlesnake in the list. Click 'Add To Game' next to your Battlesnake to add it to the game. Then click 'Start Game' to get rolling!

![Ready to 'Start Game' with one Battlesnake on an 11x11 board in Standard mode](/img/play_game_selected.png)

You will be rewarded with a view of the game board that includes your Battlesnake and any other Battlesnakes you added to the game.

Click the ▶ button to start the game and watch your Battlesnake in action. You can also use the pause, forward, and back buttons to to step through the game turn by turn. This can be very helpful when reviewing your server logs for each turn!

![A fresh Battlesnake game with your first Battlesnake ready to go](/img/game_board_fresh.png)

Once the game is complete, you can optionally create a new game with the same configuration by clicking the **Create Rematch** button. There are also other options to share your game with someone else, download it as a GIF, and save the game as one of your favorites.

![Game details and controls to rematch, share, or favourite a game.](/img/game_board_controls.png)

🎊 **Congratulations! You've deployed your first Battlesnake!** 🎊

## 6. Make It Smart


Now you're ready for the fun part -- making your Battlesnake smarter. Typical Battlesnake development looks like this:

1. Decide how you want your Battlesnake to behave differently
2. Program this behaviour into your server's move response
3. Restart your server with the new changes
4. Create a new game and test the new behavior
5. Repeat until unstoppable

For example, you may want to not move out of bounds when your Battlesnake is close to the edge of the board. You can use your Battlesnake's body position and information about the game to detect this case and prevent it from making those moves.

Here are some common initial goals to help you develop and improve your Battlesnake early on. Completing these will help you become ready to join a competitive Leaderboard or play multiplayer against your friends.

* ✅ Avoid moving out of bounds
* ✅ Avoid colliding with yourself
* ✅ Avoid colliding with other Battlesnakes
* ✅ Try to move towards food

For details on how the move request and other requests work, we recommend reading through the [Battlesnake API Reference](api/index.md).

## Additional resources

This guide has helped you build and deploy your first Battlesnake using [Replit](https://replit.com) and an [Official Starter Project](starter-projects.md), and has reviewed the steps necessary to get it registered in your Battlesnake account and running your very first games.

But this only scratches the surface!

Check out the [Battlesnake Game Rules](guides/playing/rules.md) and [Tips & Tricks](guides/tips/general.md) guide to making sure you understand how to program your Battlesnake to win the most games possible. You may have also noticed there are different [Game Modes](guides/playing/modes.md) to explore that provide different challenges for your Battlesnake.

You can also check out the [Battlesnake Awesome List](https://github.com/xtagon/awesome-battlesnake), built by [Xtagon](https://play.battlesnake.com/profile/xtagon) and maintained by the community for more great Battlesnake resources. Anyone may [contribute](https://github.com/xtagon/awesome-battlesnake/blob/master/CONTRIBUTING.md), so if you know of any interesting resources or wish to share your own creations, [open a pull request](https://github.com/xtagon/awesome-battlesnake/pulls).

**Good luck, and happy programming!**
