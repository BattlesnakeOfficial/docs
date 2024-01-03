---
sidebar_position: 4
---

# Battlesnake

```json
{
  "id": "totally-unique-snake-id",
  "name": "Sneky McSnek Face",
  "health": 54,
  "body": [
    {"x": 0, "y": 0},
    {"x": 1, "y": 0},
    {"x": 2, "y": 0}
  ],
  "latency": "123",
  "head": {"x": 0, "y": 0},
  "length": 3,
  "shout": "why are we shouting??",
  "squad": "1",
  "customizations":{
    "color":"#26CF04",
    "head":"smile",
    "tail":"bolt"
  }
}
```

| **Property**       | **Type** | **Description**                                                                                                                                                                                                                         |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**             | string   | Unique identifier for this Battlesnake in the context of the current Game.<em>Example: "totally-unique-snake-id"</em>                                                                                                                   |
| **name**           | string   | Name given to this Battlesnake by its author.<em>Example: "Sneky McSnek Face"</em>                                                                                                                                                      |
| **health**         | integer  | Health value of this Battlesnake, between 0 and 100 inclusively.<em>Example: 54</em>                                                                                                                                                    |
| **body**           | array    | Array of coordinates representing this Battlesnake's location on the game board. This array is ordered from head to tail.<em>Example: [{"x": 0, "y": 0}, ..., {"x": 2, "y": 0}]</em>                                                    |
| **latency**        | string   | The previous response time of this Battlesnake, in milliseconds. If the Battlesnake timed out and failed to respond, the game timeout will be returned (<code>game.timeout</code>)<em>Example: "500"</em>                               |
| **head**           | object   | Coordinates for this Battlesnake's head. Equivalent to the first element of the body array.<em>Example: {"x": 0, "y": 0}</em>                                                                                                           |
| **length**         | integer  | Length of this Battlesnake from head to tail. Equivalent to the length of the body array.<em>Example: 3</em>                                                                                                                            |
| **shout**          | string   | Message shouted by this Battlesnake on the previous turn.<em>Example: "why are we shouting??"</em>                                                                                                                                      |
| **squad**          | string   | The squad that the Battlesnake belongs to. Used to identify squad members in Squad Mode games.<em>Example: "1"</em>                                                                                                                     |
| **customizations** | object _(optional)_ | The collection of customizations that control how this Battlesnake is displayed. _Example: {"color":"#888888", "head":"default", "tail":"default" }_ |
