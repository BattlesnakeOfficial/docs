---
title: 'Royale'
---

# Map: Royale

The Battlesnake Royale map was the first to introduce a new danger, called [Hazards](/rules#hazards).

Hazards slowly encroach from the edges of the game board every 25 turns, creating an ever-shrinking 'safe zone'. Entering a grid location marked as a Hazard will cost 14 health, _in addition_ to the loss of 1 health per turn.

Hazard locations are available in the [Board Object](/api/objects/board) of the [Battlesnake API](/api), listed under `hazards`.

Food can spawn inside and outside of the Hazard area. If a Battlesnake consumes food inside a Hazard location, it will receive the full benefits of the food and not be penalized for entering the Hazard.

Hazards that spawn in a location that a Battlesnake has just moved into will have no effect &mdash; Hazard damage is only applied on subsequent turns after their initial spawn, and your Battlesnake will have an opportunity to leave the location before taking damage.

<img
  src={require('@site/static/img/royale_game.png').default}
  alt="Example Royale Game with Hazard Sauce on three sides"
  className="game-mode-example"
/>
