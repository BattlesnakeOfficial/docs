---
sidebar_position: 1
---

# API Overview

## Introduction

The Battlesnake API is an HTTP Webhook API, meaning developers build a web server that implements this API and the game engine will act as an API client during each game. How your server responds to these requests controls how your Battlesnake behaves.

Requests sent to your Battlesnake will be [JSON-encoded](https://www.json.org/), using standard HTTP request methods and content types.

### HTTP Response Codes

All Battlesnake API requests must return a valid _HTTP \`200 OK\`_. If any other status code is returned, the game engine will consider it an error and act accordingly.

### Response Content-Type

All responses must be JSON-encoded strings sent as \`_application/json\`_. If the game engine receives an invalid response from your Battlesnake it will consider it an error and act accordingly.

### Request Timeouts

Every request made to your Battlesnake server must be responded to within the given timeout value. In most standard games this will be 500ms, however, this value can vary from game to game. Use the [game information provided](objects/game.md) in the request to determine how long your Battlesnake should spend computing its next move.

Note that these values include round-trip latency, so communication between the game engine and your Battlesnake server should be taken into consideration.

In the event of a request timeout, the Battlesnake engine will repeat the last move received from your Battlesnake. For example, if your Battlesnake's previous move was 'right', and the next request times out, the Battlesnake Engine will continue to move your Battlesnake to the 'right'.

## The Battlesnake API

The Battlesnake API consists of four commands. Your Battlesnake server must implement all four HTTP calls to play the game. These commands are called at different times during each game and your response to these command controls how your Battlesnake appears and behaves on the game board.

[**Command: Get Battlesnake**](requests/info.md) This command is called periodically by the game engine and the Battlesnake platform. It should return information about your Battlesnake, including who created it and what it looks like.

[**Command: Start Game**](requests/start.md) This command is called once at the beginning of every game to let your Battlesnake know that a new game is about to start.

[**Command: Move**](requests/move.md) This command is called once per turn of each game, providing information about the game board to your Battlesnake and asking for its next move. Your response to this command determines how your Battlesnake behaves and will be the primary focus of your game logic programming.

[**Command: End Game**](requests/end.md) This command is called once after each game has been completed to let your Battlesnake know that the game is over.