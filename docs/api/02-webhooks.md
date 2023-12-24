---
title: Webhooks
---

# Webhooks

This page documents the technical details of the webhooks sent from the game engine to your Battlesnake server. They all originate from the Battlesnake Server URL that you provide when creating your Battlesnake in the dashboard.


## Battlesnake Details

HTTP Request: `GET /`

An empty GET request made to the root URL of your Battlesnake, used to load customization, check latency, and verifying successful communications between the game engine and your Battlesnake.

#### Request Data

None, the game engine will send an empty request body.

#### Response Properties

| **Property**  | **Type**            | **Description**                                                                                                                                           |
| -------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **apiversion** | string _(required)_ | Version of the Battlesnake API implemented by this Battlesnake. Currently only API version 1 is valid. <em>Example: "1"</em>                              |
| **author**     | string _(optional)_ | Username of the author of this Battlesnake. If provided, this will be used to verify ownership. <em>Example: "BattlesnakeOfficial"</em>                   |
| **color**      | string _(optional)_ | Hex color code used to display this Battlesnake. Must start with "#", followed by 6 hexadecimal characters. <em>Example: "#888888"</em>                                |
| **head**       | string _(optional)_ | Head customization. <em>Example: "default"</em>                |
| **tail**       | string _(optional)_ | Tail customization. <em>Example: "default"</em>                |
| **version**    | string _(optional)_ | An optional version string for your Battlesnake. This value is not used in gameplay, but can be useful for tracking deployments on your end.                                                                                                               |

See [Customization Guide](/guides/customizations) for more info about changing your Battlesnake's color, head, and tail.

#### Example Response

```json title="200 OK"
{
  "apiversion": "1",
  "author": "MyUsername",
  "color": "#888888",
  "head": "default",
  "tail": "default",
  "version": "0.0.1-beta"
}
```

## Game Started

HTTP Request: `POST /start`

Your Battlesnake will receive this request when it has been entered into a new game that is about to begin. Every game has a unique ID that can be used to allocated resources or data you may need. Your response to this request will be ignored.

#### Request Data

| **Parameter**                      | **Type** | **Description**                                                               |
| ---------------------------------- | -------- | ----------------------------------------------------------------------------- |
| **game**                           | object   | [Game Object](objects/game) describing the game being played.                 |
| **turn**                           | integer  | Turn number (always 0 for new games).                                         |
| **board**                          | object   | [Board Object](objects/board) describing the initial state of the game board. |
| **you**                            | object   | [Battlesnake Object](objects/battlesnake) describing your Battlesnake.        |

#### Response Properties

Responses to this request are ignored by the game engine.


## Move

HTP Request: `POST /move`

This request will be sent for every turn of every game that your Battlesnake plays. Use the information provided to determine how your Battlesnake will move on that turn, either up, down, left, or right.

#### Request Parameters

| **Parameter**                      | **Type** | **Description**                                                               |
| ---------------------------------- | -------- | ----------------------------------------------------------------------------- |
| **game**                           | object   | [Game Object](objects/game) describing the game being played.                 |
| **turn**                           | integer  | Turn number for this move.                                                    |
| **board**                          | object   | [Board Object](objects/board) describing the initial state of the game board. |
| **you**                            | object   | [Battlesnake Object](objects/battlesnake) describing your Battlesnake.        |


#### Response Properties

| **Property**  | **Type**            | **Description**                                                                                      |
| ------------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| **move**      | string              | Your Battlesnake's move for this turn. Valid moves are "up", "down", "left", or "right".             |
| **shout**     | string _(optional)_ | An optional message sent to all other Battlesnakes on the next turn. Must be 256 characters or less. |


#### Example Response

```json title="200 OK"
{
  "move": "up",
  "shout": "Moving up!"
}
```

## Game Over

HTTP Request: `POST /end``

Your Battlesnake will receive this request whenever a game it was playing has ended. Use it to learn how your Battlesnake won or lost and deallocate any server-side resources. Your response to this request will be ignored.

#### Request Data

| **Parameter**                      | **Type** | **Description**                                                               |
| ---------------------------------- | -------- | ----------------------------------------------------------------------------- |
| **game**                           | object   | [Game Object](objects/game) describing the game being played.                 |
| **turn**                           | integer  | Final turn number.                                                            |
| **board**                          | object   | [Board Object](objects/board) describing the initial state of the game board. |
| **you**                            | object   | [Battlesnake Object](objects/battlesnake) describing your Battlesnake.        |

#### Response Properties

Responses to this request are ignored by the game engine.
