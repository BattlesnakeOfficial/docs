---
title: Getting started with Mojave for Development & Debugging
authors:
- Andrew
---

## What is Mojave?

Mojave is a desktop game board and development / debugging tool for [Battlesnake](https://play.battlesnake.com/). It aims to bring an immersive "arcade" style experience to the game, with crisp neon visuals, an electrifying soundtrack, and a high amount of customizability.

## Where can I get Mojave?

You can download Mojave from the GitHub releases page here: [https://github.com/smallsco/mojave/releases](https://github.com/smallsco/mojave/releases)

Be sure to download the correct version for your operating system. There are versions available for Mac OS, Windows, and Linux.
![](./img/image-41.png)
### Mac Setup

Mojave requires Mac OS 10.14 or greater to run.

Upon downloading and unzipping the Mojave zip, you will be presented with the Mojave application. Drag it into your applications folder to install.
![](./img/image-42.png)
Double-click the Mojave application to launch it. The first time you do this, Mac OS will prevent the application from opening. Click **Cancel** to dismiss this dialog.
![](./img/image-43.png)
Now, **right-click** the Mojave application and select **Open** from the context menu:

You will again be presented with a warning dialog, however this time there will be an option to **Open**. Click it, and Mojave will launch.
![](./img/image-45.png)
Subsequent launches will not present any dialogs. However, you may need to repeat this process if you update Mojave to a later version in the future.

### Windows Setup

Mojave requires a 64-bit copy of Windows Vista or greater to run. You will also need to download and install the Visual C++ 2017 Redistributable package from Microsoft if you don't already have it installed on your computer. Get it from here: [https://go.microsoft.com/fwlink/?LinkId=746572](https://go.microsoft.com/fwlink/?LinkId=746572)

Upon downloading and unzipping the Mojave zip, you will be presented with a Mojave folder. You can place this folder anywhere on your computer. To run Mojave, double-click the Mojave folder and run the Mojave.exe application.
![](./img/image-47.png)
### Linux Setup

Any recent distribution of Linux should be sufficient to run Mojave. I have tested it using Ubuntu, Debian, Fedora, and CentOS.

You will need to install the libcurl development package for your distribution:
For Ubuntu/Debian: `sudo apt-get install libcurl4-openssl-dev`
For Fedora/CentOS: `sudo yum install libcurl-devel`

There is no standalone build of Mojave for Linux. You will need to separately download and install the LÖVE game engine from here: [https://love2d.org/](https://love2d.org/)

Once you have downloaded and installed libcurl and LÖVE, you can download and unzip Mojave. You will be presented with a **Mojave.love** file. You will need to run LÖVE from your Terminal, passing the **Mojave.love** file as an argument like this:

`/love-11.3-x86_64.AppImage Mojave-3.1.6.love`

The first time you do this you will see one or more messages in your terminal about missing shared libraries being extracted. These messages are safe to ignore.
![](./img/image-48.png)
## First Run

When you first launch Mojave, after a brief splash screen you'll be presented with the **manage snakes** screen, which you can see below. This screen has a list of all snakes that Mojave knows about, with a form at the top that you can use to add new snakes.
![](./img/image-49.png)
## Adding some Snakes

Let's start by adding a couple of snakes. We are going to recreate a classic Battlesnake matchup from the Coding Badly show - the Badly Coded Snake vs. Untimely Neglected Wearable. I selected these snakes because they are both open source, and can run in a local Python environment without much complexity.

This guide assumes that you know how to set up Python on your machine, so I won't go into too much detail on how to install the snakes. But here's a quick, bullet-point version:

- Download the snakes:
- Badly Coded Snake: `git clone git@github.com:BattlesnakeOfficial/coding-badly.git`
- Untimely Neglected Wearable: `git clone git@github.com:altersaddle/untimely-neglected-wearable.git`
- Create an environment to run the snakes in: `mkvirtualenv battlesnake`
- Install requirements (do this for each snake): `pip install -r requirements.txt`
- Run Badly Coded Snake: `PORT=5000 python src/battlesnake.py`
- Run Untimely Neglected Wearable: `PORT=8081 python server.py`

Once the snakes are running, you can add them to Mojave. Let's start by adding the Badly Coded Snake. Enter its' name into the first textbox, and its' URL (including http and the port number) into the second textbox. Make sure the **Battlesnake API** radio button is selected:
![](./img/image-50.png)
Press the **Add Snake** button and you should see the Badly Coded Snake show up in the list below. If instead you got an error, double-check that the snake is running and that you have the correct URL and port. Also make sure you put the name in the first textbox and the URL in the second textbox, instead of the other way around!
![](./img/image-51.png)
Once you have Badly Coded Snake added, do the same thing for Untimely Neglected Wearable - your screen should now look like this:
![](./img/image-52.png)
## Starting a Game

Let's start a game! Begin by clicking the "Create Game" button in the menu, which will bring us to the game creation screen:
![](./img/image-55.png)
For now, let's stick with the **Standard** game mode. We can also change the size of the board here, using one of the standard Battlesnake board sizes. Note that Mojave defaults to a non-standard board size of 17x12, in order to provide square tiles while maintaining space to display snake stats.

In order to start a game, we need to select which of our snakes are going to be competing in this game. Using the "Select Snakes for Game" drop-down menu, let's select both Badly Coded Snake and Untimely Neglected Wearable, pressing the **Add** button after selecting each snake. Once both snakes are added, the screen will look like this:
![](./img/image-56.png)
Press the **Start Game** button to begin the game!
![](./img/game_in_progress.gif)
To the right of the game board, you can see the Snake Stats. This shows you the playback controls, the current turn, and the health, length, and kills of each snake in the game:
![](./img/image-58.png)
The first five playback controls should be self-explanatory: you can play/pause the game in progress, jump back/forward a turn, or jump back/forward all the way to the start or end of the game. The sixth button will create a rematch using the current game's snakes and settings, and the seventh button will exit from the current game back to the menu, allowing you to change snakes or game settings.

By pressing the **Debug** button located above a snake's preview image, this will copy to your clipboard the previous turn's JSON for that snake, along with how your snake responded.

## Robosnake: a built-in opponent

Mojave includes a built-in snake, the Robosnake, that you can add to games without having to start up a separate server. Robosnake was a former competitor as a Bounty Snake in the 2017 and 2018 Battlesnake season, and every copy of Mojave includes it, giving you a tough opponent to practice against.

You can add as many Robosnakes as you want per game, each with their own head, tail, and color settings. However, Robosnake is only able to play in the Standard game mode.

To add a Robosnake, first press the **Manage Snakes** button to return to the snake management screen. Then, in the form for adding new snakes, select the **Robosnake** radio button.

You'll notice that the URL field has been removed, and has been replaced with selectors for head, tail, and color. Use the **head** and **tail** selectors to pick a head and tail for the Robosnake:
![](./img/image-59.png)
To set Robosnake's color, you can click and drag on the R, G, and B fields to set the red/green/blue values. A preview of the color will show in a square to the right. Or if you want more refined control, click on the color square which will pop up a dialog giving you finer selection over the color:
![](./img/image-60.png)
When you're happy with the customizations, click **Add Snake** to add a Robosnake!
![](./img/image-61.png)
## Playing as a Human

Have you ever wanted to try your hand against a Battlesnake? Mojave makes it possible, by allowing you to add a human-controlled snake to a game!

To register a human-controlled snake, select the **Human** radio button from the snake type options, then select a head, tail, and color just like you did for the Robosnake:
![](./img/image-62.png)
Note that only a single human-controlled snake can participate in a game, however, human-controlled snakes can play in all game modes.

To control your snake, just use the arrow keys on the keyboard. In the Mojave options you can customize how long the game will wait for you to press a key - the default is half a second, so be quick!

## A more complex game

Alright, let's start one more game with all the snakes we just registered. If you've forgotten how to start the game, go up and re-read the "Starting a Game" section!
![](./img/image-63.png)
To the victor go the spoils! Congratulations, *Untimely Neglected Wearable!*
![](./img/image-64.png)
## Final Thoughts

That's it for this quick start quide! If you have questions, or need support, check out the #mojave-questions channel on the [Battlesnake Discord](https://play.battlesnake.com/discord/) server.

Also be sure to check the [Mojave GitHub](https://github.com/smallsco/mojave) periodically - new releases are published from time to time to support new heads/tails, rule changes, fix bugs, and add new features.
