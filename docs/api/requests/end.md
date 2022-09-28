---
sidebar_position: 4
---

# POST /end

Example: `POST https://your.battlesnake.com/end`

Your Battlesnake will receive this request whenever a game it was playing has ended. Use it to learn how your Battlesnake won or lost and deallocate any server-side resources. Your response to this request will be ignored.

#### Parameters

| Body                               | Type    | Description                                                                       |
| ---------------------------------- | ------- | --------------------------------------------------------------------------------- |
| [`game`](../objects/game.md)       | object  | [Game Object](../objects/game.md) describing the game being played.               |
| `turn`                             | integer | Turn number for the last turn of the game.                                        |
| [`board`](../objects/board.md)     | object  | [Board Object](../objects/board.md) describing the final state of the game board. |
| [`you`](../objects/battlesnake.md) | object  | [Battlesnake Object](../objects/battlesnake.md) describing your Battlesnake.      |

| Responses | Type                                                      |
| --------- | --------------------------------------------------------- |
| 🟢 200     | Responses to this command are ignored by the game engine. |

**Response Properties**

Responses to this request are ignored by the game engine.
