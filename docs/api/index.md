---
title: Battlesnake Webhook API
sidebar_position: 0
---

# Battlesnake Webhook API

The Battlesnake API is an HTTP Webhook API, meaning developers build a web server that implements this API and the game engine will act as an API client during each game. How your server responds to these requests controls how your Battlesnake behaves.

There are four webhooks every Battlesnake needs to implment:
* [GET /](api/requests/info.md)
* [POST /start](api/requests/start.md)
* [POST /move](api/requests/move.md)
* [POST /end](api/requests/end.md)

## API Requests

### Content-Type

Requests sent to your Battlesnake that contain game data will contain [JSON-encoded](https://www.json.org/) request bodies. Your server is resonsible for receiving and deserializing this data (although most modern web frameworks will do this for you).

## Battlesnake Responses

### Content-Type

All responses must be JSON-encoded strings sent as \`_application/json\`_. If the game engine receives an invalid response from your Battlesnake it will consider it an error and act accordingly.

### Status Codes

All Battlesnake API requests must return a valid _HTTP \`200 OK\`_. If any other status code is returned, the game engine will consider it an error and act accordingly.

### Timeouts

Every request made to your Battlesnake server must be responded to within the given timeout value. In most standard games this will be 500ms, however, this value can vary from game to game. Use the [game information provided](api/objects/game.md) in the request to determine how long your Battlesnake should spend computing its next move.

Note that these values include round-trip latency, so communication between the game engine and your Battlesnake server should be taken into consideration.

In the event of a request timeout, the Battlesnake engine will repeat the last move received from your Battlesnake. For example, if your Battlesnake's previous move was 'right', and the next request times out, the Battlesnake Engine will continue to move your Battlesnake to the 'right'.
