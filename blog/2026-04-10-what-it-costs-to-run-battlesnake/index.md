---
title: What It Costs to Run Battlesnake
description: A transparent look at the real infrastructure costs behind keeping Battlesnake running, and how you can help.
authors:
  - Corey
---

I think open source projects should be honest about money, so here's what it actually costs to run Battlesnake right now.

All the infrastructure runs through my personal LLC. GitHub Sponsors donations come in, infrastructure bills go out, and I cover the difference out of pocket. All of my time is volunteer.

<!--truncate-->

## Monthly Costs

Here's what March 2026 looked like — the most recent full month:

All costs are in USD.

| Service | What it does | Cost |
|---|---|---|
| Google Cloud | Runs the game engine, web platform, and backend services | $442.10 |
| Mailgun | Handles email notifications | $94.00 |
| Google Workspace | Email and domain for battlesnake.com | $34.62 |
| Sentry | Error monitoring and alerting | $29.00 |
| GitHub | Organization plan and CI/CD | $20.00 |
| **Total** | | **$619.72** |

April's Google Cloud bill just came in at $485.86, so the current run rate is somewhere around **$620–660 USD/month**.

## Sponsorship

Battlesnake currently has 18 GitHub Sponsors, bringing in roughly **$120/month**. That leaves about **$500/month** coming out of pocket.

I'm happy to cover it — I took this on because I care about the community and want to keep it going. But I also think you should know the real numbers.

We're actively [rewriting the platform in Rust](https://coreyja.com/posts/battlesnake-in-2026/) with cost efficiency as a major goal, so these numbers should come down over time. I talked more about the rewrite and how I ended up running Battlesnake on [my podcast](https://coreyja.com/podcast/taking-over-battlesnake).

If you want to help keep things running:

[Sponsor Battlesnake on GitHub](https://github.com/sponsors/BattlesnakeOfficial)
