---
sidebar_position: 3
---

# RulesetSettings

```json
"settings": {
  "foodSpawnChance": 25,
  "minimumFood": 1,
  "hazardDamagePerTurn": 14,
  "royale": {
    "shrinkEveryNTurns": 5
  },
  "squad": {
    "allowBodyCollisions": true,
    "sharedElimination": true,
    "sharedHealth": true,
    "sharedLength": true
  }
}
```

:::info
All ruleset settings will always be passed, but ruleset-specific settings (e.g. under `royale`, `squad`) will only take effect when the associated ruleset is in effect. For example, in a standard game, the value for **royale.shrinkEveryNTurns** isn't used in the game rules, but your Battlesnake server can still read it.
:::

| **Property**                    | **Type** | **Description**                                                                                                                      |
| ------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **foodSpawnChance**             | integer  | Percentage chance of spawning a new food every round.                                                                                |
| **minimumFood**                 | integer  | Minimum food to keep on the board every turn.                                                                                        |
| **hazardDamagePerTurn**         | integer  | Health damage a snake will take when ending its turn in a hazard. This stacks on top of the regular 1 damage a snake takes per turn. |
| _royale_.**shrinkEveryNTurns**  | integer  | In Royale mode, the number of turns between generating new hazards (shrinking the safe board space).                                 |
| _squad_.**allowBodyCollisions** | boolean  | In Squad mode, allow members of the same squad to move over each other without dying.                                                |
| _squad_.**sharedElimination**   | boolean  | In Squad mode, all squad members are eliminated when one is eliminated.                                                              |
| _squad_.**sharedHealth**        | boolean  | In Squad mode, all squad members share health.                                                                                       |
| _squad_.**sharedLength**        | boolean  | In Squad mode, all squad members share length.                                                                                       |
