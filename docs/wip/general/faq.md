---
sidebar_position: 2
---

# FAQ

## What can I do with my Battlesnake**?**

**SOLO CHALLENGES**: Challenges are the “single-player campaign” of Battlesnake. It’s just you and the puzzle you need to solve. They're a great way to test and build up your skills in prep for Battlegrounds & Leagues. [See guide](../guide/quick-start-challenges-guide.md).

**THE BATTLEGROUNDS:** A monthly cycling competition. Test your skills against other developers by putting your Battlesnakes into ladders, each with unique modes. Matches run between a set time each day, allowing you to make tweaks and changes to your code in-between matches. [See guide.](../guide/battlegrounds-guide.md)

**COMPETE IN LEAGUES:** Leagues are limited-time competitions where the best of the best compete for title, prizes, and prestige! They’re only held 4 times a year and the finals are streamed live on Twitch. Has your Battlesnake got what it takes? [See guide.](../guide/quick-start-league-guide.md)

## Do I need to know how to program to play Battlesnake?

Battlesnake is best for those with beginner-level programming skills and above. You'll have to know the basics of at least one popular programming language to get started.

If you're brand new to programming and want to start learning - awesome, we're happy you're here! We're constantly working on ways to help you get started. In the meantime, you might want to get started with some online programming courses and tutorials to get the basics down.

## Is Battlesnake only for Machine Learning and Artificial Intelligence?

Nope, you can use any technology, tools, and algorithms you want to power your Battlesnake! It doesn't have to be machine learning or artificial intelligence - in fact, many developers have great success writing simple programs and decision trees that employ specific and creative strategies.

We suggest you start with the technologies you're comfortable with and expand to include new things you want to learn.

## What cloud provider and region should I use?

You can be successful with almost any cloud provider, hosted anywhere around the world. Your cloud provider choice has no impact on your ability to play the game and we encourage you to explore and learn new things.

If you are competing at the highest level and are worried about optimizing location and round-trip latency, the game engine is currently hosted in **AWS US-WEST-2**. It's possible but unlikely this will change in the future.

## How does food appear on the board?

The algorithm used to generate food is very simple. On each turn, the game engine decides how much food to create and where to place it according to the following pseudocode.

```python title="food-algorithm.pseudo"
chance_of_food_appearing = 15%
if no food on game board:
    chance_of_food_appearing = 100%

if random(chance_of_food_appearing):
    # create one food on random empty square    
```

[This algorithm is open source](https://github.com/BattlesnakeOfficial/rules), and we encourage you to view the code directly.

## How are Battlesnakes ranked in Arenas and Leagues?

Battlesnake Arenas and Leagues use a nearly vanilla implementation of [Microsoft TrueSkill](https://www.microsoft.com/en-us/research/project/trueskill-ranking-system/) for ranking and matchmaking. The only customizations we've made are to implement a lower bound on sigma values, to allow top-tier snakes with lots of games to still be dethroned.

## How do I organize a Battlesnake Competition?

Email us directly or fill out our [Partner Contact Form](https://play.battlesnake.com/partner/contact/). We'll be in touch!
