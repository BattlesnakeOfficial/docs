---
sidebar_position: 3
---

# Move

`https://your.battlesnake.com`**`/move`**

This request will be sent for every turn of the game. Use the information provided to determine how your Battlesnake will move on that turn, either up, down, left, or right.

#### Parameters

| Body                            | Type    | Description                                                               |
| ------------------------------- | ------- | ------------------------------------------------------------------------- |
| [`game`](../objects/game)       | object  | [Game Object](../objects/game) describing the game being played.          |
| `turn`                          | integer | Turn number for this move.                                                |
| [`board`](../objects/board)     | object  | [Board Object](../objects/board) describing the game board on this turn.  |
| [`you`](../objects/battlesnake) | object  | [Battlesnake Object](../objects/battlesnake) describing your Battlesnake. |

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

| **Parameter** | **Type**            | **Description**                                                                                                                                       |
| ------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **move**      | string              | <p>Your Battlesnake's move for this turn. Valid moves are up, down, left, or right.</p><p><em>Example: "up"</em></p>                                  |
| **shout**     | string _(optional)_ | <p>An optional message sent to all other Battlesnakes on the next turn. Must be 256 characters or less.</p><p><em>Example: "I am moving up!"</em></p> |
