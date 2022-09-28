---
sidebar_position: 1
---

# Game

```json
{
  "id": "totally-unique-game-id",
  "ruleset": {
    "name": "standard",
    "version": "v1.2.3"
  },
  "map": "standard",
  "timeout": 500,
  "source": "league"
}
```


| **Property** | **Type**                 | **Description**                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**       | string                   | A unique identifier for this Game.<em>Example: "totally-unique-game-id"</em>                                                                                                                                                                                                           |
| **ruleset**  | object                   | Information about the ruleset being used to run this game.<em>Example: {"name": "standard", "version": "v1.2.3"}</em>                                                                                                                                                                  |
| **map**      | string                   | The name of the map used to populate the game board with snakes, food, and hazards. <em>Example: "standard"</em> See [Game Maps](game-maps.md)                                                                                                                                         |
| **timeout**  | integer _(milliseconds)_ | How much time your snake has to respond to requests for this Game.<em>Example: 500</em>                                                                                                                                                                                                |
| **source**   | string                   | The source of this game. One of:<ul><li>tournament</li><li>league <em>(for League Arenas)</em></li><li>arena <em>(for all other Arenas)</em></li><li>challenge</li><li>custom <em>(for all other games sources)</em></li></ul>The values for this field may change in the near future. |
