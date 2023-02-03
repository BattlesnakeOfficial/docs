---
title: Updates to Royale Mode and Battlesnake Requests
authors:
- Rob
---

Based on your feedback, we've made some changes to the way Royale Mode works, and added some new info to the requests sent to your Battlesnakes.

## Royale Mode Updates

##### Eating food in a hazard now fully restores your health.

We've made a small change to the way Royale games work, in response to a suggestion from the community. Previously, if a Battlesnake moved onto a food located in the "Hazard Sauce", their health would be restored to 100, then reduced by the penalty for moving into a hazard - currently 15, for a final health of 85. Now, moving onto any food in a Royale game will always restore your snake's health to 100.

The game shown below is an example of when this occurs, and shows the turn before "Hungry Snake" goes for the food near the bottom left.
![Hungry Snake prepares to go for a food in the hazard sauce](./img/Royale_hazard_food_before.png)
The next turn shows what happens with the updated rules. "Hungry Snake" is restored to full health instead of losing health from the hazard that turn.
![Hungry Snake is restored to 100 health on the next turn](./img/Royale_hazard_food_after.png)
Thanks to community member Hegberg for reporting this, and [coreyja](https://github.com/coreyja), [InterestingBrainPoops](https://github.com/InterestingBrainPoops), and [aubrey-y](https://github.com/aubrey-y) for providing feedback on the change.

##### Moving onto a hazard now does 15 damage total.

A related change involves the default damage taken from the sauce in Royale - it was documented as 15 health, but the 1 health lost by Battlesnakes every turn stacked on top of that for a total of 16. This was confusing for developers new to Royale mode, so we've dropped the default hazard damage to 14 and left the behavior and documentation the same. That means your Battlesnake will actually take **15 health** damage every turn spent in the sauce without eating.

## New API Request Properties

We've been asked to [provide more detail on the exact parameters of games](https://github.com/BattlesnakeOfficial/feedback/discussions/75) - such as damage done by Hazard Sauce, chance of food spawning, and other variables that your Battlesnake can use to adjust their strategies. These and other parameters are now part of the move requests, and are documented [in the API Reference](https://docs.battlesnake.com/references/api#ruleset).

Here's an example of a move request including the new parameters inside the `ruleset` object:

    {
      "game": {
        "id": "facc62a1-9326-431f-b18e-7505a714a7f7",
        "ruleset": {
          "name": "royale",
          "version": "v1.0.21",
          "settings": {
            "foodSpawnChance": 15,
            "minimumFood": 1,
            "hazardDamagePerTurn": 15,
            "royale": {
              "shrinkEveryNTurns": 25
            },
            "squad": {
              "allowBodyCollisions": false,
              "sharedElimination": false,
              "sharedHealth": false,
              "sharedLength": false
            }
          }
        },
        "timeout": 500
      },
      "turn": 11,
      "board": {
        "height": 7,
        "width": 7,
        "snakes": [
    ...

Thanks [@penelope_zone](https://twitter.com/penelope_zone) for the suggestion!

## Did we break your Battlesnake?

We waited until after the end of Summer League to roll these changes out, but we'd still like to avoid breaking Battlesnakes that were coded against older API formats. If these changes broke your Battlesnake in an interesting way, please let us know in Discord or through the [Community Feedback](https://github.com/BattlesnakeOfficial/feedback)!
