---
title: Controlling a Battlesnake with a Webcam, Replit, and Your Face
authors:
- Andrew
---

*Facesnake was originally [coded live on Twitch](https://www.twitch.tv/videos/967694891) by [Brad](https://twitter.com/bvanvugt) & [Joe](https://twitter.com/jna_sh).*

This past spring on Coding Badly, Joe and I, for whatever reason, challenged ourselves to build a camera-controlled Battlesnake. The result was **"Facesnake"** – a Battlesnake controlled in real-time using your face and webcam. This post outlines how we built it using [Replit](https://replit.com/) and [tracking.js](https://trackingjs.com/) :-)

View the complete source code on [GitHub](https://github.com/BattlesnakeOfficial/facesnake), run it on [Replit](https://replit.com/@Battlesnake/facesnake), or [watch what a high-stakes game of Facesnake looks like](https://youtu.be/S5yP48oNMm4?t=2996s) 😃🐍 .
Snake Pit Live - Facesnake Snakeoff!
---

### Step 1 - Creating a Simple Battlesnake

Every Battlesnake needs a functioning HTTP webserver that implements the [Battlesnake API](https://docs.battlesnake.com/references/api). We used Express, Node, and Replit to get going...

    const express = require('express')
    
    const PORT = process.env.PORT || 3000;
    
    const httpServer = express()
    httpServer.get('/', httpIndex)
    httpServer.post('/start', httpStart)
    httpServer.post('/move', httpMove)
    httpServer.post('/end', httpEnd)
    
    function httpIndex(request, response) {
      var battlesnakeInfo = {
        apiversion: '1',
        author: '',
        color: '#888888',
        head: 'default',
        tail: 'default'
      }
      response.status(200).json(battlesnakeInfo)
    }
    
    function httpStart(request, response) {
      response.status(200).send('ok')
    }
    
    function httpEnd(request, response) {
      response.status(200).send('ok')
    }
    
    function httpMove(request, response) {
      // Always move up
      response.status(200).send({
        move: 'up'
      })
    }
    
    httpServer.listen(PORT, function() {
      console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`)
    })
    

index.js
*(Note we're using an `http` prefix - we'll be adding a WebSocket server later on so this differentiation is important)*

**At this point, we have a functional Battlesnake that always moves up.**

Next, we added a global variable to control the Battlesnake's current move. *(Note this won't work if multiple games are being played at once - that's okay for now)*

    let NEXT_MOVE = 'down'
    
    function httpMove(request, response) {
      response.status(200).send({
        move: NEXT_MOVE
      })
    }
    

index.js
Finally, we want to give our Battlesnake the most time possible to receive and process webcam input, so let's add some code to delay our response using the game data sent to us on each turn.

    const bodyParser = require('body-parser')
    
    httpServer.use(bodyParser.json())
    
    function httpMove(request, response) {
      // Give ourselves 1000ms to respond to the game engine
      var responseDelay = request.body.game.timeout - 1000
    
      setTimeout(function(resp) {
          response.status(200).send({
          move: NEXT_MOVE
        })
      }, responseDelay, response)
    }
    

index.js
Now we have a Battlesnake that waits 1,000ms, then moves `down` on every turn.
![](./img/Screen-Shot-2021-07-01-at-9.52.51-AM.png)Facesnake goes down!
---

### Step 2 - Displaying Camera and Detecting Faces in Browser

Next, we wanted a simple web page that displays your local webcam. We started with some static HTML that loads your local camera in a `<video>` tag.

    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
    
        <h1>Facesnake Controller</h1>
        <div>
          <video id="camera" width="640" height="480" autoplay="true"></video>
        </div>
    
        <script>
          var video = document.querySelector("#camera")
          if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
              video.srcObject = stream
            })
            .catch(function(err) {
              console.log("Something went wrong!")
            })
          }
        </script>
      </body>
    </html>

controller.html
And then added a route to serve the static page at `/controller`.

    const path = require('path')
    
    httpServer.get('/controller', function(request, response) {
      response.sendFile(path.join(__dirname, '/controller.html'))
    })

index.js
Navigating to `/controller` in a browser now displayed our static page and camera.
![](./img/Screen-Shot-2021-07-01-at-8.00.48-PM.png)
Awesome! That was surprisingly easy. Next, we had to detect faces in the webcam video. Joe found [tracking.js](https://trackingjs.com/) which comes with a [face-tracking plugin](https://trackingjs.com/examples/face_camera.html), so we wired it into our static controller page.

    <script>
      var tracker = new tracking.ObjectTracker('face');
      tracker.setInitialScale(4)
      tracker.setStepSize(2)
      tracker.setEdgesDensity(0.1)
          
      tracker.on('track', function(event) {
        if (event.data.length == 1) {
          console.log(event.data[0])
        }
      })
          
      tracking.track(video, tracker, { camera: true })
    </script>

controller.html
Reloading the controller page, we get the following console logs:

    {total: 3, width: 169, height: 169, x: 228, y: 171}
    {total: 2, width: 156, height: 156, x: 232, y: 176}
    {total: 2, width: 156, height: 156, x: 232, y: 176}
    {total: 2, width: 156, height: 156, x: 232, y: 176}
    ...

Browser Console
Okay! The library was detecting our face and providing a bounding box within the webcam image. We then used this information to highlight faces on the webcam. To do this we'll add an HTML canvas and use it to draw over the `<video>` element.

    <style>
      #wrapper {
        position: relative;
      }
      canvas#overlay {
        top: 0;
        left: 0;
        position: absolute;
      }
    </style>
    
    <div id="wrapper">
      <video id="camera" width="640" height="480" autoplay="true"></video>
      <canvas id="overlay" width="640" height="480"></canvas>
    </div>
    
    <script>
      var canvas = document.getElementById('overlay')
      var context = canvas.getContext('2d')
      
      tracker.on('track', function(event) {
        if (event.data.length == 1) {
          var rect = event.data[0]
    
          // Find center of face
          var faceX = rect.x + (rect.width / 2)
          var faceY = rect.y + (rect.height / 2)
    
          // Clear entire canvas  
          context.clearRect(0, 0, canvas.width, canvas.height)
    
          // Draw square at center of face
          context.lineWidth = 5
    
          // Draw face bounding box & center point
          context.strokeStyle = '#0000ff'
          context.strokeRect(faceX - 10, faceY - 10, 20, 20)
        }
      })
    </script>

controller.html![](./img/Screen-Shot-2021-07-01-at-8.00.16-PM.png)
Success! The blue square should follow your face as you move it around your camera. We've got live face detection!
[

BattlesnakeOfficial - Joe its working: Facesnake

Watch BattlesnakeOfficial’s clip titled “Joe its working: Facesnake”

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://clips-media-assets2.twitch.tv/AT-cm|1236104798-social-preview.jpg)
](https://clips.twitch.tv/ResilientElegantKiwiDerp-TK21SCgniRF8Ok-x?parent&#x3D;battlesnake.ghost.io&amp;parent&#x3D;blog.battlesnake.com)
---

### Step 3 - Translate Face Position to a Battlesnake Move

At this point we had all the pieces we needed to start controlling the Battlesnake with our webcam - we just had to translate face movement into Battlesnake moves.

To keep things simple, Joe and I came up with the following strategy:

- Divide the camera into an equal 3x3 grid.
- Treat the central cell as a "neutral" position – when a face is detected in this boundary, the Battlesnake move will not change.
- Moving your face outside of the central cell will cause the Battlesnake to move in a corresponding direction (ie: moving up --> "up", moving right --> "right")

Is this a good way to do this? We weren't sure! But we had a plan so we committed. First, we added boundary lines to the overlay to show the grid.

    // (inside track event handler)
    
    // Clear entire canvas  
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw grid lines so we can see control points
    var leftBound = canvas.width / 3
    var rightBound = leftBound * 2
    var upBound = canvas.height / 3
    var downBound = upBound * 2
    
    var drawLine = function(ctx, x1, y1, x2, y2) {
      context.beginPath()
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
    }
    
    context.strokeStyle = '#ff0000';
    drawLine(context, leftBound, 0, leftBound, canvas.height);
    drawLine(context, rightBound, 0, rightBound, canvas.height);
    drawLine(context, 0, upBound, canvas.width, upBound);
    drawLine(context, 0, downBound, canvas.width, downBound);          

controller.html![](./img/Screen-Shot-2021-07-01-at-7.59.32-PM.png)
Next, we used the center point of the detected face to determine if the blue square had moved beyond any of the boundaries.

    // (inside track event handler)
    
    var sendMove(move) {
      console.log(move)
    }
    
    // Has face crossed a boundary?
    if (faceX < leftBound) {
        sendMove('left')
    } else if (faceX > rightBound) {
        sendMove('right')
    }
    if (faceY < upBound) {
        sendMove('up')
    } else if (faceY > downBound) {
        sendMove('down')
    }

![](./img/Screen-Shot-2021-07-01-at-7.54.42-PM.png)![](./img/Screen-Shot-2021-07-01-at-7.56.44-PM.png)
Okay! Now we're using face detection to determine which direction we'd like our Battlesnake to move! The final step will be connecting the browser face detection to the backend Battlesnake server...

---

### Step 4 - Send Battlesnake Moves to Backend Server

We had one last step before Facesnake was fully functional: when we detect a new move in the browser, we need to send it to the backend and assign `NEXT_MOVE` so that our Battlesnake will actually move in that direction.

To do this, we're going to use a WebSocket library called [socket.io](https://socket.io/). (This can be done without WebSockets, but we thought this was more fun!)

First, we set up a WebSocket server in our Node app. This required a minor change to how our Express server is initialized as well to allow them both to operate simultaneously.

    const http = require('http')
    const io = require('socket.io')
    
    const httpServer = express()
    const host = http.createServer(httpServer)
    
    // ... express routes and handlers on httpServer...
    
    // Websocket Server
    const wsServer = io(host)
    
    wsServer.on('connection', function(socket) {
      console.log('Client connected... ')
      socket.on('move', function(msg) {
        console.log('BROWSER: ' + msg)
        NEXT_MOVE = msg
      })
    })
    
    // Start server
    host.listen(PORT, function() {
        console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`)
    })

index.js
Now we were able to receive WebSocket connections from the browser and store `move` events as `NEXT_MOVE` for subsequent Battlesnake moves.

Finally, we have the browser open a WebSocket connection to the server and emit `move` events when face movement is detected inside our camera grid.

    <script src="https://cdn.socket.io/3.1.1/socket.io.min.js" integrity="sha384-gDaozqUvc4HTgo8iZjwth73C6dDDeOJsAgpxBcMpZYztUfjHXpzrpdrHRdVp8ySO" crossorigin="anonymous"></script>
    
    <script>
      var socket = io(window.location.protocol + "//" + window.location.host)
      
      var sendMove = function(move) {
        socket.emit('move', move)
      }
      
      // ... camera and move detection code ...
    </script>

controller.html
And finally, we test! If everything was working, moving our face to the right side of the camera should move our Battlesnake right, and moving our face down should move the Battlesnake down.
![](./img/Screen-Shot-2021-07-01-at-10.19.11-PM.png)![](./img/Screen-Shot-2021-07-01-at-10.22.55-PM.png)
And it worked! We were very surprised.
[

BattlesnakeOfficial - Disconnect from physical space: Facesnake

Watch BattlesnakeOfficial’s clip titled “Disconnect from physical space: Facesnake”

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://clips-media-assets2.twitch.tv/vod-950781370-offset-6234-social-preview.jpg)
](https://clips.twitch.tv/OddMagnificentOtterKeepo-uaOGKMYfJdQSWANk)
Naturally, the next step was to immediately play against each other...
[

BattlesnakeOfficial - Face 2 Face: Facesnake

Watch BattlesnakeOfficial’s clip titled “Face 2 Face: Facesnake”

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://clips-media-assets2.twitch.tv/vod-950781370-offset-8478-social-preview.jpg)
](https://clips.twitch.tv/ObliqueTenuousKittenCclamChamp-UlMbMZprtXF2kqe7)
---

### Step 5 - Further Enhancements

While this basic functionality was... functional, Joe and I added a few more things to make our Facesnake even easier to control. Those include:

- Display detected move in browser
- Mirror the camera so that physical left/right matches Battlesnake left/right
- Begin games by circling until the first webcam command is received
- Basic intelligence to ignore moves that would obviously eliminate Facesnake 
- Embed a game board in the controller to view games in real-time

You can view the complete source code on [GitHub](https://github.com/BattlesnakeOfficial/facesnake) or fork it directly on [Replit](https://replit.com/@Battlesnake/facesnake).

---

**Of course, it wouldn't be live coding if there weren't some bloopers along the way 😅**
[

BattlesnakeOfficial - First Battlesnake injury: Facesnake

Watch BattlesnakeOfficial’s clip titled “First Battlesnake injury: Facesnake”

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://clips-media-assets2.twitch.tv/AT-cm|1236108354-social-preview.jpg)
](https://clips.twitch.tv/FrailBlitheSnakeWoofer-Lixs3IEn0qQGxEq5)[

BattlesnakeOfficial - Wrong way: Facesnake

Watch BattlesnakeOfficial’s clip titled “Wrong way: Facesnake”

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://clips-media-assets2.twitch.tv/vod-950781370-offset-5598-social-preview.jpg)
](https://clips.twitch.tv/BeautifulWimpySaladPeanutButterJellyTime-KMx4Y1V_HeGUsq9K)[

BattlesnakeOfficial - A realisation pt 2: Facesnake

Watch BattlesnakeOfficial’s clip titled “A realisation pt 2: Facesnake”

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://clips-media-assets2.twitch.tv/vod-950781370-offset-8192-social-preview.jpg)
](https://clips.twitch.tv/SpicyLitigiousPidgeonOhMyDog-XmMXGW0q2ZkXi1Qr)
If you enjoyed this build and want to see more like it, be sure to follow [BattlesnakeOfficial on Twitch](https://www.twitch.tv/battlesnakeofficial) and catch the next episode of Coding Badly with Brad & Joe & Sometimes Guests :-)
