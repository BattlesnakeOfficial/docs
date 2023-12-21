---
title: Maps
---

:::caution
This page doesn't cover all maps

Want to help us improve our docs? [Become a contributor!](https://github.com/BattlesnakeOfficial/docs)
:::

## Snail Mode (Experimental)

> All Battlesnakes leave a trail of decaying hazards to block and hurt their foes

![Snail Mode Example](/img/SnailMode.gif)

When your tail leaves a square in its place a hazard stack is dropped! The size of the stack is equal to the length of your snake. And each turn the stack loses one of its hazards, until it finally disappears.
This means that the 'snail trail' of a snake increases in length as you get longer!

This is 'stacked hazards' where the hazards closer to the snake will be stacked more times
Each 'stack' deals 15 damage, so the start of the tail can become deadly quickly

### Implementation Notes

- Snail Mode utilizes Stacked Hazards, where more than one hazard may be on a given square. The hazard damage is based on Hazard_Damage * Hazard_Stack_Count
- Snail Mode also uses off board hazards. These are for internal book keeping, but WILL be sent to snakes. They can be safely ignored!

### Edge Cases

- If you tail chase ANY SNAKES TAIL, a hazard stack will NOT spawn on your tail position
  - This avoids an awkward view of the game when tail chasing

For More Info see the Source Code in the [`BattlesnakeOfficial/rules` repo](https://github.com/BattlesnakeOfficial/rules/blob/main/maps/snail_mode.go)
