---
title: Introduction
---

# Introduction

Battlesnake is played by responding to simple webhooks sent to your server by the game engine. Developers build a web server that receives and responds to HTTP requests, and how your server responds to these requests controls how your Battlesnake behaves.


## Requests

All requests made from the game engine to your Battlesnake server will have the following properties.

### Content-Type

Requests will contain [JSON-encoded](https://www.json.org/) request bodies. Your server is responsible for receiving and parsing this data correctly (although most modern web frameworks come with easy ways to handle this type of request).


## Responses

All responses from your Battlesnake server must abide by these rules when responding to game engine requests. If your server fails to send a valid response in any way, the game engine will consider it an error and act accordingly.

### Content-Type

Valid responses must be JSON-encoded strings with the Content-Type header set to \`_application/json\`_.

### Status Codes

Valid responses must return an _HTTP 200 OK_ status code. If any other status code is returned, the game engine will consider it an invalid response.

### Latency & Timeouts

Your Battlesnake server must respond to requests made by the game engine within the given timeout value. This value is provided in the request body as a [property on the game object](api/objects/game).

In most games this will be 500ms, however, this value can technically vary from game to game. If your response does not reach the game engine within the specified timeout, the game engine will consider it an invalid response.

:::tip
Note that these time limits must include round-trip latency between the game engine and your server - be sure to take that into consideration when deciding how long to spend computing your response.
:::


## Response Error Handling

Any invalid responses will be treated as errors by the game engine, and your Battlesnake's next move will be chosen for you - even if that means certain elimination.

**An error on the first move of a game** will move your Battlesnake `up` by default. This value is hardcoded into the game engine with no particular meaning behind it.

**Errors on subsequent turns** will repeat your previous move. For example, if your Battlesnake successfully moves `right` on turn N, a timeout on turn N+1 will result in your Battlesnake moving `right` again. This applies even if the game engine chose your move for you on the previous turn due to an error.
