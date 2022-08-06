---
sidebar_position: 6
description: A collection of useful algorithms for building a competitive Battlesnake.
---

# Useful Algorithms

_This page was inspired by BoldBigflank, 101donutman, and Xtagon in the_ [_Battlesnake Discord_](https://play.battlesnke.com/discord)_. Each algorithm listed should include a widely accessible definition (_[_think ELI5 style_](https://www.howtogeek.com/694298/what-does-eli5-mean-and-how-do-you-use-it/)_), how it could be applied to Battlesnake, and links to further resources._ [_Contributions and updates are always welcome!_](https://github.com/BattlesnakeOfficial/docs)__

## Flood Fill

Flood fill is an algorithm to determine the boundaries and size of an enclosed space. A common example is the 'fill' or 'bucket' tool in paint and graphics programs, which finds all pixels within a set boundary.

#### Using Flood Fill in Battlesnake

In Battlesnake flood fill is a simple way to detect and avoid enclosed spaces that Battlesnakes may not be able to escape from. For example, if a Battlesnake were to move into a specific square, flood fill could be used to statically determine how many adjacent squares a Battlesnake could subsequently move into before running out of space.

Often times Battlesnakes will want to consider the available space of each move prior to choosing which move to make.

#### Additional Flood Fill Resources

* [Flood Fill - Wikipedia](https://en.wikipedia.org/wiki/Flood\_fill)
