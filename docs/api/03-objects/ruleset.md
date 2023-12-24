---
sidebar_position: 2
---

# Ruleset

```json
"ruleset": {
    "name": "standard",
    "version": "v1.2.3",
    "settings": { ... }
  }
```

| **Property** | **Type** | **Description**                                                                                                                                                                                                                                       |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **name**     | string   | Name of the ruleset being used to run this game. <em>Example: "standard"</em>     |
| **version**  | string   | The release version of the [Rules](https://github.com/BattlesnakeOfficial/rules) module used in this game. <em>Example: "version": "v1.2.3"</em>                                                                                                      |
| **settings** | object   | A collection of [specific settings](ruleset-settings) being used by the current game that control how the rules are applied.                                                                                                                       |
