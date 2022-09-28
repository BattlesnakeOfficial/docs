---
title: Rules
sidebar_position: 0
---

# Game Rules


## Winning the Game

Winning a game of Battlesnake is deceptively simple; be the last Battlesnake left slithering on the game board. In order to accomplish this, your Battlesnake will need **health** and **space** - if it runs out of either, it will be eliminated.

## Health

At the start of every game, each Battlesnake will be placed on the game board alongside their opponents, each starting with a full health meter of 100 points.

On every turn your Battlesnake will choose to move in a direction, one of _up_, _down_, _left_, or _right_. Moving in any direction will drain your Battlesnake of one health point, and your Battlesnake must move once per turn.

### Consuming Food

In order to restore the health your Battlesnake needs to survive, it must consume the traditional food of Battlesnakes: brightly colored nutritional discs.

![Snakes consuming food](/img/consuming-food.gif)

These flavorful discs will appear throughout the game and remain on the game board until consumed. Battlesnakes that enter the same square as a piece of food will immediately consume it, filling their health to maximum. But ravenous consumption comes at a cost...

Every time a Battlesnake consumes food it will grow longer, making it more difficult for itself (and others!) to survive. Consuming food costs no health, meaning a Battlesnake can safely eat at one health point and be rejuventated in time to keep moving.

### Food Spawn

At the beginning of each game some amount of food will be placed around the board. On each subsequent turn additional food may be added (according to our Super Secret Proprietary Algorithm\*). It's also possible for multiple pieces of food to appear on any single turn.
[_**the algorithm is neither secret or proprietary, but it is arguably super**_](https://github.com/BattlesnakeOfficial/rules)

## Space

Battlesnakes need more than just food to survive, they need space to roam free and be their best possible selves. However, space on the game board is limited.

As the game progresses and all Battlesnakes consume food to stay healthy, finding the best path through the available spaces becomes increasingly challenging. Eventually all Battlesnakes will run out of room.

**Your goal is to have your opponents run out of room before you do.**

### Game Board and Boundaries

The game is played on a rectangular game board of variable size with up to eight Battlesnakes competing at the same time, each of variable length.

Most importantly the game board is surrounded by walls - any Battlesnake attempting to move outside the boundaries of these walls will be eliminated from the game.

### Collisions

There are three types of collisions that your Battlesnake should be aware of.

**Self Collisions.** If your Battlesnake collides with its own body, it will be immediately eliminated. This is the easiest type of collision to avoid, and is a good starting goal for new Battlesnake developers.

**Body Collisions.** Battlesnake is a game of wits and honor. If your Battlesnake attempts to consume another Battlesnake, it will be eliminated from the game for unsports-snake-like conduct.

**Head-to-Head Collisions.** The one exception to Body Collisions is when two Battlesnakes meet head-to-head. In this scenario, the outcome is a little more complex: the larger Battlesnake will survive and the shorter will be eliminated. If both are the same size, then both are eliminated. If a food disk is also located at the collision site, the collision will be evaluated first.

### Starting State and Length

At the beginning of each game every Battlesnake will be the same size and occupy a single square. This is naturally very uncomfortable for them, and as they make their first few moves they will stretch out to their full length.

## Turn Order and Resolution

Battlesnake is more than a game of moving and eating, it's also about people and the strategies they program into their Battlesnakes. Understanding how the game is run and turns are resolved can be useful to getting the upper hand over your opponents.

Each turn in every game is divided into three steps.

### 1. Identical requests are sent to every Battlesnake.

The game engine will send to each Battlesnake in parallel a request containing information about the current state of the game board. This request includes location of all food, as well as the health and location of all Battlesnakes (including themselves). Details are available in the [Battlesnake API Reference](api).

Every Battlesnake will have the same amount of time to respond to this request.

### 2. Each Battlesnake responds with their next move.

After receiving the request, each Battlesnake responds with a move of _up_, _down_, _left_, or _right_.

Note that moves are always with respect to the game board and not the direction of the snake's head. For example, _up_ always corresponds to moving towards the top of the board.

If a Battlesnake's cybernetic brain fails to provide a valid response or respond in time, momentum takes over and they will continue moving in the same direction and the previous turn - even if that means certain doom. If this happens on the first turn of a game, the Battlesnake will naturally move up (as all Battlesnakes are inclined to do).

### 3. Moves are resolved by the game engine.

After all moves have been received by the game engine, it will update the game board accordingly. This happens in a very specific order.

1. Each Battlesnake will have its chosen move applied:
   * A new body part is added to the board in the direction they moved.
   * Last body part (their tail) is removed from the board.
   * Health is reduced by 1.
2. Any Battlesnake that has found food will consume it:
   * Health reset set maximum.
   * Additional body part placed on top of current tail (this will extend their visible length by one on the next turn).
   * The food is removed from the board.
3. Any new food spawning will be placed in empty squares on the board.
4. Any Battlesnake that has been eliminated is removed from the game board:
   * Health less than or equal to 0
   * Moved out of bounds
   * Collided with themselves
   * Collided with another Battlesnake
   * Collided head-to-head and lost
5. If there are enough Battlesnakes still present, repeat steps 1-5 for next turn.

## Open Source Game Logic

The code responsible for implementing these game rules is completely open source. We encourage all Battlesnake developers to review the rules code base to better understand the game mechanics and make any suggestions for new game modes.

[https://github.com/BattlesnakeOfficial/rules](https://github.com/BattlesnakeOfficial/rules)
