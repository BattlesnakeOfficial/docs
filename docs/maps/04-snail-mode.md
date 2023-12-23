---
title: 'Snail Mode (Experimental)'
---

# Map: Snail Mode (Experimental)

Battlesnakes leave behind a trail of decaying hazards to block and hurt their foes

![Snail Mode Example](/img/SnailMode.gif)

Whenever your tail leaves a grid square, a stack of hazards is dropped in its place! The size of the stack is equal to the length of your snake, and on each subsequent turn the stack loses one of its hazards, until it finally disappears.

This creates a sort of 'snail trail' of a hazards that increase in length as you get longer!

Note that each 'stack' of hazard deals additional damage, so grid locations with many hazards on them can become quite deadly.

### Implementation Notes

- This map utilizes Stacked Hazards, where more than one hazard may be placed on a given square. The hazard damage is based on Hazard_Damage * Hazard_Stack_Count
- This map also spawns hazards outside of the game board boundaries &mdash; these are for internal book keeping, but WILL be sent to snakes. They can be safely detected and ignored.

### Edge Cases

- Moving directly behind a Battlesnake tail (ie: tail chasing) will cause the hazard stack to NOT spawn. This avoids an awkward view of the game when tail chasing

For more info see the source code in the [`BattlesnakeOfficial/rules` repo](https://github.com/BattlesnakeOfficial/rules/blob/main/maps/snail_mode.go)
