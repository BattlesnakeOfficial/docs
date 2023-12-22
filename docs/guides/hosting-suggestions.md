---
title: Hosting Suggestions
description: Tips and common patterns for hosting your Battlesnake
sidebar_position: 0
---

# Hosting Suggestions

Battlesnakes must be deployed to a publicly accessible web server so they can interact with the Battlesnake Game Engine.

![The Game Engine makes API calls to each Battlesnake, rendering the results on the Game Board](/img/simple_server_diagram.png)

Every developer needs to decide how and where to host their server. If you are new to web development, consider options like [Heroku](https://heroku.com) or [Replit](https://replit.com/), which are fast and easy to get started but come with additional performance considerations.

There are a number of online hosting solutions that can be used with your Battlesnake. Many of these services provide a free tier for new accounts. Some popular ones in the Battlesnake community include...

## Managed Hosting Platforms


### [DigitalOcean - App Platform](https://docs.digitalocean.com/products/app-platform/)

App Platform is a platform-as-a-service that allows you to deploy your Battlesnake server without you managing any underlying infrastructure.

[Getting Started with DigitalOcean and Battlesnake](https://blog.battlesnake.com/p/373ee072-815e-4138-b216-80908655309d/)

* **Advantages**
  * Handles the hosting for you - no need to set up or maintain servers.
  * There are [dedicated guides for different languages and tech stacks](https://docs.digitalocean.com/products/app-platform/languages-frameworks/).
  * Can deploy your code automatically from GitHub.
* **Considerations**
  * You'll need a paid plan to host a Battlesnake.
* **You should probably use App Platform if...**
  * You want full control over your IDE and local development environment.
  * You want to be competitive, but not have to manage your own hosting.
  * You don't mind spending a few dollars monthly.

### [Fly.io](https://fly.io/)

Fly.io is a platform-as-a-service (PaaS) that runs your code on its edge computing network for minimal latency.

* **Advantages**
  * Handles containerized hosting for you if you already have a Dockerfile.
  * Generous free plan and more regions than Heroku.
  * The support forums are great and the staff is very responsive/helpful even to free users.
  * Zero-downtime deploys by default, so you never miss a move.
* **Considerations**
  * Newer platform with less learning resources exist than the alternatives.
  * You'll have to use the CLI for most things.
  * They require a credit card even if you're on a free plan (this is an anti-fraud measure).
* **You should probably use Fly.io if...**
  * You don't want to have to manage your own hosting yet.
  * You're comfortable building apps that run in Docker containers.
  * You're looking for a free option but still have access to a credit card


### [Railway](https://railway.app/)

Railway is a platform-as-a-service (PaaS) for deploying web applications directly from GitHub.

* **Advantages**
  * Handles the hosting for you.
  * Efficient horizontal scaling, allowing your snake to use more resources if it ever needs.
  * Deploy code directly from GitHub without needing to setup any special deploy tools.
* **Considerations**
  * No free tier, requires a credit card and monthly payment.
  * Only located in US-West for now, perfect for Battlesnake but may affect local development.
* **You should probably use Railway if...**
  * You want full control over your local development environment.
  * You're willing to pay for a basic tier of service.

### [Replit](https://replit.com/)

* **Advantages**
  * Browser-based IDE for both development and hosting - no need to install software or run anything locally.
  * Free tier is good for getting started.
* **Considerations**
  * Might not have the most up-to-date version of your preferred programming language.
  * Your Replit might be slow to start up! You likely have to ping it periodically, or check to make sure that is running when you need it.
  * Replit will run your code close to where you are geographically. This is an advantage when using your IDE (quick when you are writing code) but may result in [high-latency](api/index.md#request-timeouts), and in the worst case, timeouts.
* **You should probably use Replit if...**
  * You are just getting started and want to test out Battlesnake without too much commitment or setup.
  * You don't want to manage your own hosting just yet.


## Cloud Platforms

These options are for players wanting to get maximum more performance out of their server, or are looking for cost-effective hosting at a larger scale.

### [AWS](https:://aws.amazon.com)

* **Advantages**
  * Fine-tune application performance and resources.
  * Great learning opportunity to learn a variety of professional infrastructure skills and practices.
  * There are many programs available to give you free resources.
* **Considerations**
  * Besides promotions, all options are paid.
* **You should probably use AWS if...**
  * You want full control over the hosting and deployment of your app.
  * You are already experienced or want to become more experienced with using AWS.


### [DigitalOcean - Droplets](https://docs.digitalocean.com/products/droplets/)

Droplets are Linux-based virtual machines that give you full access to a server which you can configure however you prefer.

* **Advantages**
  * Totally customize the software and network setup on your own Linux-based virtual machine.
  * Shell access to the VM running your code for debugging or performance monitoring
  * Lower cost for the same resources than App Platform, Heroku and other PaaS services.
* **Considerations**
  * Paid options only.
  * You're responsible for the configuration and security of your own server.
* **You should probably use Droplets if....**
  * You want full control over the hosting and deployment of your app.
  * You are already experienced or want to become more experienced with configuring your own servers.


### [Google Cloud Platform](https://cloud.google.com/)

* **Advantages**
  * [Free credits for new users](https://cloud.google.com/free)
  * Wide variety of ML/AI services
  * Reasonable UI and good documentation
* **Considerations**
  * While there is a free tier, once it runs out GCP can be more expensive than some options above
* **You should probably use GCP if...**
  * You plan to use Google's AI/ML tools to build your Battlesnake
  * It is important to you to host your server very close to the [Battlesnake servers](engine-regions).


### Local Hosting

You can always run your Battlesnake on your own hardware at home, and many players do! You'll just need a way to expose a public URL on the internet.

* **Advantages**
  * Run your Battlesnake locally on your own computer for no extra cost!
* **Consdierations**
  * Where you and your computer live can have a big impact on your server latency.
  * You'll need to know your IP Address and router configuration, or use a port forwarding tool like [ngrok](https://ngrok.com/) to be able to create games on [play.battlesnake.com](https://play.battlesnake.com).
*   **You should probably use local if...**
    * You want full control over the hosting and deployment of your app.
    * You want to experiment with using alternative hardware, like a microcontroller.
    * You don't want to pay for powerful hosting solutions.
