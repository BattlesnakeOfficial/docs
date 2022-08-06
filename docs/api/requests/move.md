---
sidebar_position: 3
---

# Move

`https://your.battlesnake.com`**`/move`**

This request will be sent for every turn of the game. Use the information provided to determine how your Battlesnake will move on that turn, either up, down, left, or right.

#### Parameters

| Body                               | Type    | Description                                                                  |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------- |
| [`game`](../objects/game.md)       | object  | [Game Object](../objects/game.md) describing the game being played.          |
| `turn`                             | integer | Turn number for this move.                                                   |
| [`board`](../objects/board.md)     | object  | [Board Object](../objects/board.md) describing the game board on this turn.  |
| [`you`](../objects/battlesnake.md) | object  | [Battlesnake Object](../objects/battlesnake.md) describing your Battlesnake. |

| Responses | Type             |
| --------- | ---------------- |
| 🟢 200     | application/json |

```json
{
  "move": "up",
  "shout": "Moving up!"
}
```

**Response Properties**

| **Parameter** | **Type**            | **Description**                                                                                                                          |
| ------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **move**      | string              | Your Battlesnake's move for this turn. Valid moves are up, down, left, or right.<em>Example: "up"</em>                                   |
| **shout**     | string _(optional)_ | An optional message sent to all other Battlesnakes on the next turn. Must be 256 characters or less.<em>Example: "I am moving up!"</em>< |
