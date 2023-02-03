---
title: Battlesnake Developer Update — February 2020
authors:
- Chris
description: February was a busy month as we are actively preparing for upcoming events. The team has delivered several site improvements and some new…
hide_table_of_contents: true

---

![](./img/1-K8wBFejHjwXdEY7G0Y0jYQ.png)
February was a busy month as we are actively preparing for upcoming events. The team has delivered several site improvements and some new features that will power what we have in store for Battlesnake events over the next few months.

<!--truncate-->

### New Feature: Teams

The site now supports creating teams of multiple users that can participate together in events and tournaments. Each team consists of a team leader and up to 10 team members that can collaborate together as a single entity. The team leader will be able to update the team details and invite new members.

**Creating a Team**

Go to your profile page, by clicking on your portrait and clicking on the View Profile link. Once on the page you can create a new team by defining a name, a description and a team profile picture URL. Ensure that you review the rules for creating teams before clicking the submit button. You will be allowed to manage up to 3 teams.

**Inviting Users**

The team leader can to send invites to other users on the Battlesnake site. From your team’s profile page you can click on the Invite User button to search for the user you want to add. Users must accept the invite before they are added to your team.

More functionality will be coming in the next few months including registering your team for online tournaments and arena matches.

### API Update: Shouts!

The Battlesnake API has received its first update in over a year with the introduction of *Shouts*. This is a new mechanic where as part of the /move response you can send a short message along with your move. This message is then received by all snakes on the next game turn. Shout messages are purely internal to the game and will not be shown on the game board. The game engine itself is also able to shout…for reasons. Check out the [API documentation](https://docs.battlesnake.com/snake-api) for how to add shouts to your snake.

### Arena Changes

The Battlesnake Arena has been rebuilt from the ground up to address some major performance and infrastructure issues. Ranking is still done using the Microsoft Trueskill algorithm, but we now are running matches every 5 minutes and are pitting 4 snakes against each other instead of 8. We hope this change will reduce some of the match chaos that occurs in large games and better test the snakes against each other. The new arena system will completely replace the old leaderboard in early March.

### Event Listings

We have completely reworked the event listing page to be more visually appealing and functional. Events now have different categories such as workshops and community events. Keep an eye on the page as we will be adding several new Battlesnake events over the coming months. If you are interested in organizing your own official Battlesnake Community Event, [contact us](mailto:events@battlesnake.com) to get started.

### Moving to AWS

In a partnership with Amazon, we have migrated all of the Battlesnake infrastructure to Amazon Web Services (AWS) from Google Cloud Platform (GCP). Our systems now reside in the *AWS us-west-2* region, which is in the Oregon and is the same general physical location as our previous hosting location on *GCP us-west1*.

### Github Repository Migration

This migration is now complete and we have archived all remaining repositories on the old *battlesnakeio* organization. From now on all open source code for Battlesnake will live on [BattlesnakeOfficial](https://github.com/battlesnakeofficial).

---

That’s all for now. If you have any questions reach out to us on the [Battlesnake Slack](http://play.battlesnake.com/slack) workspace.
