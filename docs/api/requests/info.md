---
sidebar_position: 1
---

# Info

`https://your.battlesnake.com`**`/`**

An empty GET request made to the top-level URL of your Battlesnake, used for customization, checking latency, and verifying successful communications between the Battlesnake and the Battlesnake Engine.

#### Parameters

| Responses | Type             |
| --------- | ---------------- |
| 🟢 200     | application/json |

```javascript
{
  "apiversion": "1",
  "author": "MyUsername",
  "color": "#888888",
  "head": "default",
  "tail": "default",
  "version": "0.0.1-beta"
}
```

**Response Properties**

| **Parameter**  | **Type**            | **Description**                                                                                                                                    |
| -------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **apiversion** | string _(required)_ | Version of the Battlesnake API implemented by this Battlesnake. Currently only API version 1 is valid. <em>Example: "1"</em>                       |
| **author**     | string _(optional)_ | Username of the author of this Battlesnake. If provided, this will be used to verify ownership.<em>Example: "BattlesnakeOfficial"</em>             |
| **color**      | string _(optional)_ | Hex color code used to display this Battlesnake. Must start with "#" and be 7 characters long.<em>Example: "#888888"</em>                          |
| **head**       | string _(optional)_ | Displayed head of this Battlesnake. See <a href="../personalization.md">Personalization Docs</a> for available options<em>Example: "default"</em>  |
| **tail**       | string _(optional)_ | Displayed tail of this Battlesnake. See <a href="../personalization.md">Personalization Docs</a> for available options.<em>Example: "default"</em> |
| **version**    | string _(optional)_ | A version number or tag for your snake.                                                                                                            |

See [Personalization Reference](../personalization.md) for available colors, heads, and tails.