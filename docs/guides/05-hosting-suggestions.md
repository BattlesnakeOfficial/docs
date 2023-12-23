---
title: Hosting Suggestions
description: Tips and common patterns for hosting your Battlesnake
---

# Hosting Suggestions

Every Battlesnake developer needs to decide how and where to host their Battlesnake server. There are many hosting and cloud providers to choose from, with most of them providing a free tier for new accounts.

If you're just starting out, we suggest choosing a free option that's managed for you.

### Considerations when choosing a cloud provider
* Are the servers managed for me or am I responsible for keeping them running?
* Are multiple tech stacks supported?
* Is there a free usage tier? When will I be required to pay?
* Can my code be deployed from GitHub or do I need to deploy myself?
* Does it have an integrated IDE or do I need a local dev environment?
* What options are available for customer support?
* Can I scale the number and size of my servers easily?


### Managed Platforms (PaaS)

These services are managed for you, and provide minimal controls for configuring, tweaking, and scaling your server resources. They're typically more expensive than infrastruture services, but can offer quicker developement cycles and often have generous free tiers.

* [DigitalOcean, App Platform](https://docs.digitalocean.com/products/app-platform/)
* [Fly.io](https://fly.io/)
* [Railway](https://railway.app/)
* [Replit](https://replit.com/)


### Serverless Providers

Serverless provders offer the highest level of hands-off management. They take your code and connect it directly to a URL for you, running it on demand as requests are made Most charge by the number of requests being proceesed monthly, and some have generous free tiers. They can be limited, in terms of compute power and memory available, and serverless performance can often be challenging to debug.

* [Cloudflare Workers](https://developers.cloudflare.com/workers/)
* [Netlify Functions](https://www.netlify.com/platform/core/functions/)
* [Vercel Serverless Functions](https://vercel.com/docs/functions/serverless-functions)

### Cloud Platforms

These options are for players wanting to get maximum more performance out of their server, or are looking for cost-effective hosting at a larger scale. They aften require more hands-on setup and management than other options, but can also be cheaper and more performant.

* [AWS](https:://aws.amazon.com)
* [DigitalOcean](https://docs.digitalocean.com/products/droplets/)
* [Google Cloud Platform](https://cloud.google.com/)
* [IBM Cloud](https://www.ibm.com/cloud)
* [Microsoft Azure](https://azure.microsoft.com/en-ca)
* [Oracle Cloud](https://www.oracle.com/ca-en/cloud/)

### Local Hosting

You can always run your Battlesnake on your own hardware at home, and many players do! You'll just need a way to expose a public URL on the internet. This is a great option is you want to run powerful hardware at zero cost, or if you want to experiment with alternative computing environments (like a raspberry pi or microcontroller).

You can also use port forwarding services like [ngrok](https://ngrok.com/) to expose your local computer to the game engine.

Note though, that using a locally hosted server can dramatically impact your roundtrip latency with the game engine, depending on where your Battlesnake server is physically located. For similar reasons, you probably don't want to run a competitive Battlesnake server over wifi.
