---
sidebar_position: 4
---

# Game End

`https://your.battlesnake.com`**`/end`**

Your Battlesnake will receive this request whenever a game it was playing has ended. Use it to learn how your Battlesnake won or lost and deallocate any server-side resources. Your response to this request will be ignored.

#### Parameters

| Body                    | Type    | Description                                                            |
| ----------------------- | ------- | ---------------------------------------------------------------------- |
| [`game`](./#game)       | object  | [Game Object](./#game) describing the game being played.               |
| `turn`                  | integer | Turn number for the last turn of the game.                             |
| [`board`](./#board)     | object  | [Board Object](./#board) describing the final state of the game board. |
| [`you`](./#battlesnake) | object  | [Battlesnake Object](./#battlesnake) describing your Battlesnake.      |

| Responses | Type                                                      |
| --------- | --------------------------------------------------------- |
| 🟢 200     | Responses to this command are ignored by the game engine. |

**Response Properties**

Responses to this request are ignored by the game engine.
