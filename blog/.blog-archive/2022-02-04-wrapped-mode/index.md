---
title: Wrapped Mode!
authors:
- Chris
description: In preparation for the 2022 Competitive Season, we are introducing a new "wrapped" game mode! Wrapped mode dramatically expands the game board by allowing Battlesnakes to wrap from one side to side and top to bottom (and vice-versa) in a seemingly infinite loop.
---

In preparation for the 2022 Competitive Season, we are introducing a new "wrapped" game mode! Wrapped mode dramatically expands the game board by allowing Battlesnakes to wrap from one side to side and top to bottom (and vice-versa) in a seemingly infinite loop. During a wrapped game, it will be impossible for a Battlesnake to collide with the wall.

Out of the box, any existing Battlesnake will be able to play in a wrapped game, but to take full advantage of wrapped, Battlesnakes will need revised algorithms for evaluating board state including detecting safe moves, food, and enemies! 
![](./img/Wrapped-Mode-1.gif)
Battlesnake Developers can identify the new "wrapped" ruleset by inspecting the ruleset object sent in every [Battlesnake API](https://docs.battlesnake.com/references/api) request.

      "ruleset": {
          "name": "wrapped",
          "version": "v1.0.25"
        },
    

We think wrapped will open up a whole new dimension of strategies for Battlesnakes. Already we can see the opportunities for sinister traps, daring escapes, and new tactics for controlling the board. 

### Creating Wrapped Games

The wrapped game mode is live on [play.battlesnake.com](https://play.battlesnake.com) and you can create games using it right now. Click on the *[Play Game](https://play.battlesnake.com/account/games/wrapped/create/)* button and then select the *Wrapped Game* tab to access the game creation form. Currently, wrapped mode does not support solo gameplay.
![](./img/Wrapped-Mode-Custom-Game.png)Wrapped Custom Game Mode Form
Wrapped mode is also supported in the [Rules CLI](https://github.com/BattlesnakeOfficial/rules/blob/main/cli/README.md):

    battlesnake play -W 11 -H 11 --name <SNAKE_NAME> --url <SNAKE_URL> -g wrapped -v

Example command to start a wrapped mode game via the CLI
### Q. What about food, hazards, and collisions?

Food, hazards, and Battlesnake collision rules will all apply normally as per standard rules of the game. If a Battlesnake moves to the other side of the board but that square is occupied by a snake, the collision will resolve normally.

### Q. Does it cost additional health to wrap around the board?

No, however, your Battlesnake is still moving when it transitions to the other side of the board and as with all moves its health will be reduced by 1.

### Q. Does my Battlesnake occupy space outside of the board

No.  The edges of the board are linked together with no intermediate space. When your Battlesnake moves left from (0,5) on an 11x11 board the Battlesnake head will occupy position (10,5) on the next turn. 

    {
      "id": "totally-unique-snake-id",
      "name": "Sneky McSnek Face",
      "health": 99,
      "body": [
        {"x": 10, "y": 5}, 
        {"x": 0, "y": 5}, 
        {"x": 1, "y": 5}
      ],
      "latency": "123",
      "head": {"x": 10, "y": 5},
      "length": 3,
    }

Battlesnake JSON Data object after wrapping the board left to right
### Q. How are side-by-side head collisions handled?

The wrapped game mode introduces a curious quirk to the game. Battlesnakes can potentially get into a position that will skip over a direct head-to-head collision and result in two Battlesnakes eliminating each other. After some good discussion with the community we have decided to leave this feature in the game mode as it potentially provides a new problem space to explore.
![Two Battlesnakes skipping head-to-head collision during wrapped mode.](./img/Wrapped-Head-Collisions.gif)Example of two Battlesnakes skipping head-to-head collision during wrapped mode.
Head to the [Battlesnake Feedback Discussion](https://github.com/BattlesnakeOfficial/feedback/discussions/162) board to view the whole conversation. 

---

*If you are curious about how wrapped mode is implemented, you can view the code directly in the [Battlesnake Rules project on GitHub.](https://github.com/BattlesnakeOfficial/rules)*

*Thanks to [Maximtap](https://play.battlesnake.com/u/maximtap/) who came up with the original idea and to user [joram](https://play.battlesnake.com/u/joram/) who created the initial implementation of the rule set for us!*
