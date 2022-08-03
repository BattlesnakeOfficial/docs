---
sidebar_position: 5
---

# Board

The game board is represented by a standard 2D grid, oriented with (0,0) in the bottom left. The Y-Axis is positive in the up direction, and X-Axis is positive to the right. Coordinates begin at zero, such that a board that is 11x11 will have coordinates ranging from \[0, 10].

![Battlesnake Coordinate System](/img/coordinate_system.png)

```json
{
  "height": 11,
  "width": 11,
  "food": [
    {"x": 5, "y": 5}, 
    {"x": 9, "y": 0}, 
    {"x": 2, "y": 6}
  ],
  "hazards": [
    {"x": 0, "y": 0}, 
    {"x": 0, "y": 1}, 
    {"x": 0, "y": 2}
  ],
  "snakes": [
    {"id": "snake-one", ... },
    {"id": "snake-two", ... },
    {"id": "snake-three", ... }
  ]
}
```

| **Property** | **Type** | **Description**                                                                                                                                                                                                      |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **height**   | integer  | The number of rows in the y-axis of the game board.<em>Example: 11</em>                                                                                                                                              |
| **width**    | integer  | The number of columns in the x-axis of the game board.<em>Example: 11</em>                                                                                                                                           |
| **food**     | array    | Array of coordinates representing food locations on the game board.<em>Example: [{"x": 5, "y": 5}, ..., {"x": 2, "y": 6}]</em>                                                                                       |
| **hazards**  | array    | Array of coordinates representing hazardous locations on the game board. These will only appear in some [game modes](../../wip/references/game-modes.md).<em>Example: [{"x": 0, "y": 0}, ..., {"x": 0, "y": 1}]</em> |
| **snakes**   | array    | Array of [Battlesnake Objects](battlesnake.md) representing all Battlesnakes remaining on the game board (including yourself if you haven't been eliminated).<em>Example: [{"id": "snake-one", ...}, ...]</em>       |
