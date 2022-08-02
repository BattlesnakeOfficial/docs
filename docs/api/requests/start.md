---
sidebar_position: 2
---

# Game Start

`https://your.battlesnake.com`**`/start`**

Your Battlesnake will receive this request when it has been entered into a new game. Every game has a unique ID that can be used to allocated resources or data you may need. Your response to this request will be ignored.

#### Parameters

| Body                    | Type    | Description                                                              |
| ----------------------- | ------- | ------------------------------------------------------------------------ |
| [`game`](./#game)       | object  | [Game Object](./#game) describing the game being played.                 |
| `turn`                  | integer | Turn number of the game being played (0 for new games).                  |
| [`board`](./#board)     | object  | [Board Object](./#board) describing the initial state of the game board. |
| [`you`](./#battlesnake) | object  | [Battlesnake Object](./#battlesnake) describing your Battlesnake.        |

| Responses | Type                                                      |
| --------- | --------------------------------------------------------- |
| 🟢 200     | Responses to this command are ignored by the game engine. |

**Response Properties**

Responses to this request are ignored by the game engine.
