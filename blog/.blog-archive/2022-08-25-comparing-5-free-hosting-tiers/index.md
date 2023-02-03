---
title: Comparing 5 Free Hosting Tiers (that don't require credit cards)
authors:
- Andrew
description: Deploying code without handing over your credit card information can be a challenge.

So I decided to review the process of deploying a simple Python web application from a GitHub template on: GitPod, Heroku, Railway, Render, and Replit.
---

There's often a steep learning curve between finding useful GitHub repositories and successfully deploying code. 

With web servers, this is even more true, especially if you don't want to hand over your credit card information.

That's why I decided to review the process of deploying a simple [Python web application](https://github.com/battlesnakeofficial/starter-snake-python) in **less than 5 minutes, **directly from a [GitHub template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository), on five platforms with free tiers: **GitPod**, **Heroku**, **Railway**, **Render **and **Replit.**

📢

**Update**: Heroku announced that they are [phasing out their free tier](https://blog.heroku.com/next-chapter) on November 28, 2022. In this article, I discuss Heroku's previous offering and some great alternatives.

---

## Who am I?

As a Community Manager for the [Battlesnake developer community](https://play.battlesnake.com), hobbyist developer, and teacher, I regularly experience deployment challenges when dealing with code from GitHub. With lots of free options out there, I wanted to simply compare the deployment processes of different platforms for anyone looking to spin up a live web server quickly straight from a GitHub repository.

## Methodology and Test Metrics

I compared each based on deployment time, performance latency, and ease of use. Each test began with a clean fork of the [Battlesnake Python Starter Snake Template](https://github.com/BattlesnakeOfficial/starter-snake-python) (a simple server that implements the Battlesnake API in Python). I was logged into both my Battlesnake and GitHub accounts.

**'Time to Deploy':** was measured from new account sign-up to the successful creation of a Battlesnake. 

**'Platform Latency':** was measured as reported by the Battlesnake game engine running in AWS US-WEST-2.

'**Ease of Use': ** was based on my overall experience on the platform using a 5-star scale. 1 start meaning "Very Difficult" and 5 stars "Very Easy". While subjective, I felt it important to include a measure of user experience in this process.

**Platform Selection: ** To be considered for testing, platforms needed:
 •  A **free tier** that can host a python web server
 •  The ability to **deploy directly from GitHub**
 •  **Not** require a credit card to get started

---

## The Results

Gitpod
![](./img/image-14.png)
[Gitpod](https://www.gitpod.io/) is a frictionless development environment that spins up fresh, automated dev environments in the cloud, in seconds.

Gitpod was simple, straightforward, and shockingly fast! After signing up through GitHub SSO and authorizing Gitpod to access my repositories it took only a single click (and less than a minute) to create a new workspace, run the web server and begin editing code in Gitpod's web-based IDE. 

Gitpod serves as both your host and IDE, so no local downloads are needed. Knowledge of git or GitHub **isn't** required to customize code from the template. If you wish to sync your changes with a repository on GitHub, it's as easy as selecting the version control icon in the sidebar and following the prompts.
![](./img/image-8.png)Screenshot of the prompt to make your web server publicly available on Gitpod.
After successful deployment, you will be prompted to make your server available publicly (as seen below). This is necessary if you are looking to share your server outside of the Gitpod ecosystem or to use it on an external service (as I did).

### Gitpod Review

> **Time to Deploy**: 1 minute 15 seconds
> **Platform Latency**: 171 ms
> **Ease of Use**: ⭐⭐⭐⭐⭐

✅

**Things I liked**:
• VS code integration 
• Speed of deployment 
• Version control features

❌

**Things I disliked**:
 • Nothing! It was amazing.

---

## Heroku

📢

**Update**: Heroku announced that they are [phasing out their free tier](https://blog.heroku.com/next-chapter) on November 28, 2022, but it can still be used until then. 

![](./img/image-29.png)
[Heroku](https://heroku.com) is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

Having used Heroku for projects in the past I *thought* I knew what I was getting into for this test. However, I was caught off-guard by the slew of mandatory questions it now asks of users before they are able to begin their first project. Also, Heroku surprisingly does not support SSO options.

Once I made it through onboarding things were much smoother. Within a few steps I connected all the required services and launched a web server directly from my GitHub repo and everything was operational.

One important note with Heroku is that if you don't enable automatic deployments when creating your project, you will need to login into the dashboard and click  `Deploy Branch`  each time you make a change. 

While this isn't a deal-breaker, it could get old quickly depending on your development cycle, and combined with the 30-minute inactivity timeout, might be challenging depending on your use case.

### Heroku Review

> **Time to Deploy:** 2 minutes 20 seconds
> **Platform Latency:** 310 ms
> **Ease of Use**: ⭐⭐⭐⭐

✅

**Things I liked**:
 • Smooth Github Integration
 • Clean User Interface

❌

**Things I disliked**:
 • Long signup process
 • Higher Server Latency

---

## Railway
![](./img/newproj.jpg)
[Railway](https://railway.app) is an infrastructure platform that aims to seamlessly bridge the gap between local development and production deployments.

I had no experience with Railway prior to running these tests. After this, it may be my favorite platform for deploying web apps! Similar to Gitpod, the process of launching a web server with Railway was incredibly easy and blazingly fast. The beautiful and intuitive UI also made it a truly delightful platform to use!

With automatic deploys from GitHub set on new projects by default, the only real "gotcha" with Railway is it requires you to generate a domain to share your web server publicly.

### Railway Review

> **Time to Deploy**: 2 minutes 15 seconds
> **Platform Latency**: 149 ms
> **Ease of Use**: ⭐⭐⭐⭐⭐

✅

**Things I liked**:
 • Beautiful UI 
 • Low latency 
 • Open-source Starter Projects

❌

**Things I disliked**:
 • Nothing! It was amazing.

---

## Render
![](./img/image.png)
[Render](https://render.com) is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, and private networks.

I unexpectedly discovered Render while searching for Heroku alternatives to test. Their onboarding process was pleasantly clean and unassuming. I was surprised to be greeted with an unending series of buttons, drop-downs, and other configurations required to deploy my project. I immediately wished I had read the docs prior to exploring.

Despite all this visual complexity, once I got my bearings it was a fairly easy process to deploy my web server from GitHub with** ONE caveat**; I needed to manually specify the start command for my app. This required some additional understanding of the template repository and a bit of trial and error to get right.

Render's free tier also comes with a big hidden "gotcha". Deployments on this tier are SLOW taking two times longer than the slowest alternative I tested. Additionally, members of the Battlesnake community have reported multiple deployment failures for new projects before their servers worked successfully.

With that said, Render's impressive free features (including logging and analytics) and competitive latency may be worth the wait depending on your project. 

### Render Review

**Time to Deploy**: 5 minutes 50 seconds
**Platform Latency**: 161 ms
**Ease of Use**: ⭐⭐⭐

✅

**Things I liked**:
 • Low server latency
 • Impressive free features

❌

**Things I disliked:**
 • Speed of deployment
 • Confusing user interface

---

## Replit
![](./img/image-25.png)
[Replit](https://replit.com) is a simple yet powerful online computing environment, including a built-in code editor and advanced collaboration features.

If you are new to programming and want a tool that helps lower the barrier to entry, look no further than Replit. Account and new project creation in Replit were extremely easy, supported by GitHub SSO and an obvious button to get started with a new project.

It took me **less than two minutes to spin up a web server**, make it available to the world, and begin updating code in real-time using Replit's web-based IDE. Like Gitpod, a major benefit of Replit is that you **don't need to download or run any code locally**. Should you wish to sync your changes back to a GitHub repository, Replit makes the process dead simple.

Replit was not without its hiccups. Bringing my own code to the platform presented confusing configuration challenges with Replit's use of Nix. In fact, I was unsuccessful in launching my Python app and ended up switching to the [Go Battlesnake Template](https://github.com/BattlesnakeOfficial/starter-snake-go) instead.

At the time of testing, the SSL certificate provided by Replit was not functioning correctly. Instead, I had to use the HTTP variant, which—while not an issue in my case—is certainly not ideal for production apps.

### Replit Review

> **Time to Deploy**: 1 minute 40 seconds
> **Platform Latency**: 296 ms
> **Ease of Use**: ⭐⭐⭐⭐

✅

**Things I liked**:
 • Collaboration Features
 • Integrated IDE

❌

**Things I disliked:**
 • Nix Configuration
 • SSL Limitations

---

## Final Results & Recommendations
![](./img/graph-1.jpg)
If you're looking to get started quickly from a GitHub template, most platforms I tested provided more than enough power to get your project live in **less than 5 minutes without a credit card**.

When you think about it, modern PaaS offerings are substantial. They are incredibly powerful for developers of all experience levels. That said, there are a few options you may want to consider first depending on your requirements. 

**My Recommendation**
For me, **Railway has replaced Heroku** as my previous default for getting any application running quickly. In situations where I also need an integrated IDE, **Gitpod **takes the top spot.

PlatformFree Tier Features[GitPod](https://gitpod.io)50 hours per month 
4 workspaces 
30 minute inactivity timeout[Heroku](https://heroku.com)Up to 1,000 hours per month
Unlimited apps 
30 minute inactivity timeout[Railway](https://railway.app)$5 of usage per month
Unlimited projects. 
No inactivity timeout[Render](https://render.com)750 hours of running time per month
Unlimited web services 
15 minute inactivity timeout[Replit](https://Replit.com)No monthly time limit
Unlimited REPLs 
30 minute inactivity timeout
## Thanks for reading, good luck, and happy deployments! 👩‍💻
