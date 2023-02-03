---
title: Battlesnake Developer Update - October 2021
slug: battlesnake-developer-update-october-2021
date_published: 2021-10-29T22:00:00.000Z
date_updated: 2021-10-29T22:00:00.000Z
authors: 
- Aurora
---

[Fall League](https://play.battlesnake.com/league/fall-league-2021/) continues to take centre stage at Battlesnake, and with all the thrills, spills, and streams happening in relation to that, we've squeaked in some fun new details and quality of life improvements.

## New [battlesnake.tv](battlesnake.tv) url

Nothing has changed under the hood, and our Twitch channel [BattlesnakeOfficial](https://www.twitch.tv/battlesnakeofficial) is the same great place to catch a show like Snake Pit Live, Coding Badly, Deep Learning, or Community Corner, but now you can get to the Twitch channel with the oh-so-convenient new url [battlesnake.tv](battlesnake.tv). We really like it, and it has the added bonus of being super easy to remember when you're telling a friend to checkout the next Battlesnake stream.

If you want to know when the next stream is coming up, (so you can use the fancy new url of course!), check out the [calendar](https://play.battlesnake.com/schedule/).

## Hazards in new and exciting places!

Speaking of Snake Pit Live, there have been some modifications taking place that have allowed us to do some interesting things around where and how hazards appear on the game board, as well as how Battlesnakes spawn at the start of a game.
![](./img/Screen-Shot-2021-10-28-at-11.42.40-AM.png)A Battlesnake game board with hazards in the middle - a new phenomenon!
I can neither confirm nor deny exactly what our intentions are with this new power, but what I can say is you can see and participate in some new board experiments taking place during episodes of Snake Pit Live. It's never too early to start preparing for hazard sauce in strange places.
[

Snake Pit Live - Oct 16 - Fall League Caster’s Crown - Part 2 - battlesnakeofficial on Twitch

battlesnakeofficial went live on Twitch. Catch up on their Software and Game Development VOD now.

![](https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png)Twitch

![](https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/8e94debaa2d169a4158c_battlesnakeofficial_90620539011_6681285383/thumb/thumb1185205253-640x360.jpg)
](https://www.twitch.tv/videos/1185205253)
## Tech Tag Improvements

In October we've really seen how important tech tags are to the community when it comes to accurately labeling Battlesnakes. In addition to adding a stack of new tags at the request of the [Discord](https://play.battlesnake.com/discord/) community (*RaspberryPi*, *Arduino, Bash, Nim, Oracle-Cloud, Self-Hosted* among them) we also had to deal with some rendering issues where Battlesnakes simply had more tech-tags than we could handle.
![](./img/e68394e7-3c49-4399-8c9f-6c22f60e66bc.png)Nerdy Caterpillar's desire to be expressive breaks the CSS on the Leaderboard
I am happy to report that the rendering issue seen above has been resolved, and that we also changed the highlighting colour, for better contrast, when viewing the leaderboard page.

If you notice a bug, or want to request some new tech tags with which to decorate your Battlesnake, please post something in the [Feedback Repo](https://play.battlesnake.com/feedback/) to let us know!

## Game Source now included in API Requests

The API has been expanded to include a new piece of information, [the source of the Battlesnake game](https://docs.battlesnake.com/references/api#game). Now if a game was created as a result of a Challenge, or a League game, or even a Custom game via the 'Play Game' button, this source will now be tracked and returned in the API call along with the rest of the game data.
![](./img/Screen-Shot-2021-10-29-at-9.28.18-AM.png)New 'source' data identifies the context of how a game was created.
## Added Error Details on Game Board

In the past, anytime a Battlesnake has experienced an error during a game, a red *0ms* was displayed, regardless of the error.

Now if you click on the name of an erroring Battlesnake on the game board, you can get a more detailed message outlining any errors happening during each turn in a game.
![](./img/Screen-Shot-2021-10-29-at-9.35.11-AM.png)A Battlesnake timing out displays a more detailed error message on the game board.
This should be helpful when watching back games and debugging.

---

That's all for now. If you have any questions, reach out to us on the [Battlesnake Discord](https://discord.battlesnake.com/) server.
