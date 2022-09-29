---
title: Webhook API
sidebar_position: 0
---

# Webhook API

Battlesnake is played by responding to a simple Webhook API, meaning developers build a web server that receives and responds to HTTP requests from the game engine. How your server responds to these requests controls how your Battlesnake behaves.

There are four webhooks that every Battlesnake needs to respond to:
* [GET /](api/requests/info.md)
* [POST /start](api/requests/start.md)
* [POST /move](api/requests/move.md)
* [POST /end](api/requests/end.md)

## Game Engine Requests

### Content-Type

Requests sent to your Battlesnake will contain [JSON-encoded](https://www.json.org/) request bodies. Your server is resonsible for receiving and deserializing this data correctly (although most modern web frameworks come with easy ways to handle this type of request).

## Battlesnake Responses

### Content-Type

All responses to webhook requests must be JSON-encoded strings sent as \`_application/json\`_. If the game engine receives an invalid response from your Battlesnake it will consider it an error and act accordingly.

### Status Codes

All Battlesnakes responses must return a valid _HTTP \`200 OK\`_. If any other status code is returned, the game engine will consider it an error and act accordingly.

### Timeouts

Your Battlesnake server must respond to requests made by the game engine within the given timeout value. Most of the time will be 500 ms, however, this value can technically vary from game to game. Use the [game information provided](api/objects/game.md) in the request to determine how long your Battlesnake should spend computing its next move.

Note that these values include round-trip latency, so communication between the game engine and your Battlesnake server should be taken into consideration.

If your response does not reach the game engine within the specified timeout, the game engine will consider it an error and act accordingly.

### Errors

In all error cases the game engine will determine your Battlesnake's next move for you by repeating the move taken on the previous turn. For example, if your Battlesnake successfully moves `right` on turn N, a timeout on turn N+1 will result in your Battlesnake moving `right` again.

**On the first move of a game**, errors will cause the game engine to move your Battlesnake `up` until a successful response is received or your Battlesnake is eliminated.
