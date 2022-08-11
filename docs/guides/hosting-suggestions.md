---
sidebar_position: 7
description: Tips and common patterns for hosting your Battlesnake
---

# Hosting Suggestions

Battlesnakes must be deployed to a publicly accessible web server so they can interact with the Battlesnake Game Engine.&#x20;

![The Game Engine makes API calls to each Battlesnake, rendering the results on the Game Board](/img/wip/simple_server_diagram.png)

Most of the [Starter Projects](https://docs.battlesnake.com/starter-snakes) have instructions for using [Heroku](https://heroku.com) or [Replit](https://replit.com/), which are great options if you are new to web development or uncomfortable deploying code to a live server on your own.

Successfully deploying your Battlesnake should provide you with a unique URL. Opening that URL in a browser should show your Battlesnake in action!

```json title="https://your-battlesnake-server.com"
{"apiversion": "1", "author": "BattlesnakeOfficial", "head": "default", "tail": "default", "color": "#888888"}
```

There are a number of online hosting solutions that can be used with your Battlesnake. Many of these services provide a free tier for new accounts. Some popular ones in the Battlesnake community include:

## Easy to Get Started

We recommend the following hosting options if you're just getting started, aren't familiar with managing your own servers, or just want to get your Battlesnake live as quickly as possible!

### Replit

**Website**: [Replit](https://replit.com/)

**Instructions:** [**Deploy your Battlesnake with Replit**](quickstart)

* **Advantages**
  * Handles both IDE and hosting - see the [Quickstart Coding Guide](quickstart) for detailed instructions.
  * Everything is in your web browser - no need to install software or run anything locally.
  * Free tier is good for getting started.
* **Gotchas**
  * Might not have the most up-to-date version of your preferred programming language.
  * Your Replit might be slow to start up! You likely have to ping it periodically, or check to make sure that is running, especially before a tournament.
  * For speed and by default, your Replit instance will be run close to where you are, geographically. This is an advantage when using your IDE (quick when you are writing code) but may result in [high-latency](api/overview#request-timeouts), and in the worst case, timeouts, for your Battlesnake if you and your server are located in a country far-away from where the [Battlesnake servers](faq#what-cloud-provider-and-region-should-i-use) are.
  * 
* **You should probably use Replit if...**
  * You are just getting started and want to test out Battlesnake without too much commitment or setup.
  * You don't want to have to manage your own hosting yet.

### DigitalOcean App Platform

App Platform is a Platform-as-a-Service (PaaS) that allows you to deploy your Battlesnake server without needing to handle the underlying infrastructure yourself.

**Website:** [App Platform Docs](https://docs.digitalocean.com/products/app-platform/)

**Instructions**: [How to create apps](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)

**Quickstart Guide**: [Getting Started with DigitalOcean and Battlesnake](https://blog.battlesnake.com/p/373ee072-815e-4138-b216-80908655309d/)

* **Advantages**
  * Handles the hosting for you - no need to set up or maintain servers.
  * There are [dedicated guides for different languages and tech stacks](https://docs.digitalocean.com/products/app-platform/languages-frameworks/).
  * Can pull your code directly from source control on Github / GitLab and auto-deploy from a branch without needing to setup any special deploy tools.
* **Gotchas**
  * The free plan only covers static sites - you'll need at least a Basic plan to host a Battlesnake.
* **You should probably use App Platform if...**
  * You want full control over your IDE and local development environment.
  * You don't want to have to manage your own hosting yet.

### **Fly.io**

Fly.io is a Platform-as-a-Service (PaaS)**,** running code in [Firecracker](https://firecracker-microvm.github.io/) microVMs around the world.

**Website:** [Fly.io](https://fly.io/)

**Instructions:** [Hands-on with Fly](https://fly.io/docs/hands-on/start/)

**App Configuation:** [fly.io/docs/reference/configuration/](https://fly.io/docs/reference/configuration/)

* **Advantages**
  * Handles hosting for you, just bring a Dockerfile.&#x20;
  * Generous free plan (enough to run 3 snakes) and more regions than Heroku.
  * The support forums are great and the staff is very responsive/helpful even to free users.
  * If you run multiple instances and configure the health checks correctly then you can do zero-downtime deploys mid-game without missing a move.
* **Gotchas**
  * Newer platform with less learning resources exist than the alternatives.
  * The GUI/web interface is pretty bad, you have to use the CLI for most things.
  * They require a credit card even if you're on a free plan (this is an anti-fraud measure).
  * Takes more planning to control your latency due to how their backup regions work.
* **You should probably use Fly.io if...**
  * You want full control over your IDE and local development environment.
  * You don't want to have to manage your own hosting yet.

### Heroku

**Website**: [Heroku](https://www.heroku.com/)

**Instructions:** [Deploy your Battlesnake with Heroku](guides/wip/heroku)

* **Advantages**
  * Handles the hosting for you.
  * Great learning opportunity - chance to start experimenting with hosting without having to do everything by yourself.
  * Free tier provides up to 1,000 dyno hours/month.
* **Gotchas**
  * Free tier is _not quite enough_ hours to run for an entire [League Event](guides/playing-battlesnake/leagues), and your Battlesnake may stop if you run out of hours.
* **You should probably use Heroku if...**
  * You want full control over your IDE and local development environment.
  * You don't want to have to manage your own hosting yet.

## League Ready - Most Competitive Options

&#x20;The following options are for more advanced users that want to get more performance out of their snake, or are looking for a more cost-effective hosting when scaling up resources.

### DigitalOcean Droplets

Droplets are Linux-based virtual machines that give you full access to a server which you can configure however you prefer.

**Website**: [Droplets Docs](https://docs.digitalocean.com/products/droplets/)

* **Advantages**
  * Totally customize the software and network setup on your own Linux-based virtual machine.
  * Shell access to the VM running your code for debugging or performance monitoring
  * Lower cost for the same resources than App Platform, Heroku and other PaaS services.
* **Gotchas**
  * Paid options only.
  * You're responsible for the configuration and security of your own server.
* **You should probably use Droplets if....**
  * You want full control over the hosting and deployment of your app.
  * You are already experienced or want to become more experienced with configuring your own Linux servers.

### DigitalOcean Kubernetes

DigitalOcean Kubernetes is a managed service that allows you to run a Kubernetes cluster in the cloud without having to configure or manage the cluster itself.

Website: [Kubernetes on DigitalOcean Docs](https://docs.digitalocean.com/products/kubernetes/)

* **Advantages**
  * Compatible with Kubernetes tools, allowing you to deploy more complex applications in a standardized way.
  * Integrates with DigitalOcean load balancers and block storage automatically through standard Kubernetes configuration
* **You should probably use DigitalOcean Kubernetes if....**
  * You are already experienced or want to become more experienced with Kubernetes.

### AWS

**Website**: [Amazon Web Services](https://aws.amazon.com/)&#x20;

* **Advantages**
  * Handles hosting, a more advanced choice.
  * Great learning opportunity to learn a variety of professional Ops/Devops skills and practices.
  * If you have never had an AWS account before, there is a program to get [1 year free T2 instance](https://aws.amazon.com/ec2/instance-types/t2/).
* **Gotchas**
  * Besides the free T2 promotion, paid option only.
  * If you use the free T2 promotion, it is important to remember to turn it off at the end of your year unless you want to be billed!
* **You should probably use AWS if...**
  * You want full control over the hosting and deployment of your app.
  * It is important to you to host your server very close to the [Battlesnake servers](faq#what-cloud-provider-and-region-should-i-use).
  * You are already experienced or want to become more experienced with using AWS.

### Local

You can run your Battlesnake on your own hardware, as long as you have a way to expose a public URL on the Internet.

* **Advantages**
  * Run your Battlesnake locally on your own computer for no extra cost!
* **Gotchas**
  * Where you and your computer live can have a big impact on your server latency. The closer to the Pacific Northwest you are, the better.
  * You need to use a port forwarding tool like [ngrok](https://ngrok.com/) to be able to create games on [play.battlesnake.com](https://play.battlesnake.com)
*   **You should probably use local if...**

    * You want full control over the hosting and deployment of your app.
    * You want to experiment with using alternative hardware, like a microcontroller.
