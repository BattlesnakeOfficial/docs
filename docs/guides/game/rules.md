---
title: Rules
sidebar_position: 0
---

# Game Rules

**Winning a game of Battlesnake is deceptively simple**; be the last Battlesnake standing. To accomplish this your Battlesnake will need **health to survive** and **space to move** - if it runs out of either, it will be eliminated!

## Health & Food

Each Battlesnake begins every game with full health (100 points). Every time your Battlesnake moves it will drain one point of health, and your Battlesnake must move on every turn.

Battlesnakes that reach zero health will be eliminated, and this presents the first challenge - to stay alive as long as possible, you must find ways to replenish your health.

#### Consuming Food

The most common way to restore health is consuming the traditional food of Battlesnakes; brightly colored nutrition discs. These delicious discs will appear on the game board throughout the game. Battlesnakes that enter the same square as food will immediately consume it, filling their health to maximum (100 points).

However, ravenous consumption comes at a cost. Each time a Battlesnake consumes food it will grow longer, making it more challenging for itself (and others!) to survive. 

![Snakes consuming food](/img/consuming-food.gif)

:::info
Consuming food costs no health, meaning a Battlesnake with a single health point can safely eat and be rejuventated in time to keep moving.
:::

#### Food Spawn

Food spawn timing and location will depend on which [game map](guides/game/maps.md) you're playing on. 

In most cases, some amount of food will be placed around the board at the start. On subsequent turns additional food may be added (according to our Super Secret Proprietary Algorithm\*). It's also possible for multiple pieces of food to appear on any single turn.

\* _Super Secret Proprietary Algorithm is neither secret or proprietary, [but it is open source, and arguably super](https://github.com/BattlesnakeOfficial/rules)._

## Space & Movement

Battlesnakes need more than food to survive; they need space to roam free and be their best possible selves. However, space on the game board is limited. 

As the game progresses and all Battlesnakes consume food to stay healthy, finding the best path forward becomes increasingly challenging. Eventually all Battlesnakes will run out of room. 

:::tip
Your goal is to have your opponents run out of room before you do.
:::

#### Game Board and Boundaries

Battlesnake is played on a rectangular game board with potentially dozens of Battlesnakes competing at the same time, each of variable length and health.

You'll want to be aware of the boundaries of the game board at all times.Depending on what map you're playing on, moving outside these boundaries could result in elimination.

#### Battlesnake Collisions

There are three types of collisions that your Battlesnake should be aware of.

* **Self Collisions.** If your Battlesnake collides with its own body, it will be immediately eliminated. This is the easiest type of collision to avoid, and is a good starting goal for new Battlesnake developers.

* **Body Collisions.** Battlesnake is a game of wits and honor. If your Battlesnake attempts to consume another Battlesnake by moving into it, it will be eliminated from the game for unsports-snake-like conduct.

* **Head-to-Head Collisions.** An exception case to Body Collisions is when two Battlesnakes meet head-to-head. In this scenario, the outcome is a little more complex: the larger Battlesnake will survive and the shorter will be eliminated. If both are the same size, then both are eliminated.

:::tip
Competitive Battlesnake players use head-to-head collisions to gain advantages over their opponents and force eliminations.
:::

#### Starting State and Length

At the beginning of a game your Battlesnake may be coiled up on a single square. This is naturally very uncomfortable for them, and as they make their first few moves they will stretch out to their full length.

## Game Cycle & Turn Resolution

Battlesnake is more than a game of moving and eating, it's also about creative thinking and competitive strategy. Understanding how the game is run and turns are resolved can be useful to getting the upper hand over your opponents.

Each turn in every game is divided into three steps.

**1. Identical requests are sent to every Battlesnake.** The Battlesnake game engine will do this in parallel, and each request includes detailed information about the game board and the health and location of all Battlesnakes. Details are available in the [Battlesnake API Reference](api/index.md).

**2. Battlesnakes respond with their next move.** After receiving the request, each Battlesnake has a limited time window to respond with a move of _'up'_, _'down'_, _'left'_, or _'right'_. If a Battlesnake's cybernetic brain fails to provide a valid response (or respond in time) momentum takes over and they will continue moving in the same direction as the previous turn - even if that means certain doom.

**3. Moves are resolved by the game engine.** After all moves have been received by the game engine, it will update the game board accordingly. This happens in a very specific order:

   * Each Battlesnake will have its chosen move applied:
      * A new body part is added to the board in the direction they moved.
      * Their last body part (tail) is removed from the board.
      * Health is reduced by 1.

   * Any Battlesnake that has found food will consume it:
      * Health is reset to maximum.
      * An additional body part is placed on top of their current tail (this will extend their visible length by one on the next turn).
      * The food is removed from the board.

   * Any new food will be placed in empty squares on the board.

   * Any Battlesnake that has been eliminated is removed from the game board:
      * Health less than or equal to 0
      * Moved out of bounds
      * Collided with themselves
      * Collided with another Battlesnake
      * Collided head-to-head (and lost)
   
   * Repeat above steps until one Battlesnake remains.

## Open Source Game Logic

The code responsible for implementing these game rules (and more) is completely open source. We encourage all Battlesnake developers to review the rules code base to better understand the game mechanics and make any suggestions for new game modes.

[https://github.com/BattlesnakeOfficial/rules](https://github.com/BattlesnakeOfficial/rules)
