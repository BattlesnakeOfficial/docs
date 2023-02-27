---
sidebar_position: 4
description: A collection of useful algorithms for building a competitive Battlesnake.
---

# Useful Algorithms

:::info
This page was inspired by BoldBigflank, 101donutman, and Xtagon in the [Battlesnake Discord](https://play.battlesnke.com/discord). Each algorithm listed should include a widely accessible definition ([think ELI5 style](https://www.howtogeek.com/694298/what-does-eli5-mean-and-how-do-you-use-it/)), how it could be applied to Battlesnake, and links to further resources.

[Contributions and updates are always welcome!](https://github.com/BattlesnakeOfficial/docs)
:::

## Flood Fill

Flood fill is an algorithm to determine the boundaries and size of an enclosed space. A common example is the 'fill' or 'bucket' tool in paint and graphics programs, which finds all pixels within a set boundary.

#### Using Flood Fill in Battlesnake

In Battlesnake flood fill is a simple way to detect and avoid enclosed spaces that Battlesnakes may not be able to escape from. For example, if a Battlesnake were to move into a specific square, flood fill could be used to statically determine how many adjacent squares a Battlesnake could subsequently move into before running out of space.

Often times Battlesnakes will want to consider the available space of each move prior to choosing which move to make.

#### Additional Flood Fill Resources

- [Flood Fill - Wikipedia](https://en.wikipedia.org/wiki/Flood_fill)

## A\* pathfinding

A\* is an algorithm to plot the shortest path between two points on a grid. You might be familiar with this if you've ever played a point and click adventure game and seen your character navigate around obstacles to get to where you clicked.

#### Using A\* in Battlesnake

In Battlesnake, A\* is a good way to find the way to the closest food, or attack the closest snake. It will let you write [declarative style code instead of imperative](https://www.educative.io/blog/declarative-vs-imperative-programming). This means you can write code that says "move me along the shortest path to the other snake's head" instead of declaring the "up" "down" "left" or "right move to get to where you want to go.

#### Additional A\* resources

- An intro to A\* pathfinding in the context of games - https://www.redblobgames.com/pathfinding/a-star/introduction.html
- A JavaScript library implementing A\* and some other pathfinding algorithms: https://github.com/qiao/PathFinding.js/
- A Battlesnake implementing A\* pathfinding (not compatible with API v1): https://github.com/sockbot/battlesnake-api
