---
sidebar_position: 4
description: Options for customizing your Battlesnake's appearance
---

# Customizations

## Introduction

This reference outlines all the available options for personalizing your Battlesnake's appearance. We periodically release new options, often linked to specific events or competitions.

Each Battlesnake can choose a color, head, and tail to represent it on the game board. Here's an example of a full personalized Battlesnake.

```json title="customizations.json"
{
	"color": "#736CCB",
	"head": "beluga",
	"tail": "curled"
}
```

This configuration will display your Battlesnake like this:

![Sample Snake](/img/wip/samplesnake.png)

## Choosing a Color

Your Battlesnake can choose any valid six-digit hex color code to represent it on the game board. This value is provided in response to the [GET /](api/requests/info) command of the [Battlesnake API](api) and should be a 7 character string starting with "#" that looks similar to "#33CC00".

You can use an [HTML Color Picker Tool](https://www.w3schools.com/colors/colors\_picker.asp) to help you find the exact color you're looking for.

#### **Some Example Battlesnake Colors**

![#E80978](/img/wip/screenshot-2020-05-13-09.19.33.png)

![#3E338F](/img/wip/screenshot-2020-05-13-09.19.58.png)

![#4C89C8](/img/wip/screenshot-2020-05-13-09.20.29.png)

## Choosing a Head and Tail

Several customization options are available for how your Battlesnake's head and tail will display on the game board. You can mix and match them however you like.

Just like [choosing a color](#choosing-a-color), your head and tail are provided in response to the [GET /](api/requests/info) command of the [Battlesnake API](api). Each value is a string, matching one of the available options shown below.

If an invalid value is returned (or no value at all) the `default` options will be displayed.

### **Default Theme**

If your Battlesnake doesn't specify a head or tail these default options will be used.

![default head and tail](/img/wip/defaultsnake.png)

## Collecting Heads and Tails

All developers start with a base collection of head and tails to choose from.  Check out your [**Customizations Collections**](https://play.battlesnake.com/customizations) page for a complete list of the heads and tails you can use. There are over 100 customizations to collect, with new heads and tails being released regularly.

### Unlocking Customizations

New head and tail customizations are unlocked using **Battlesnake Points.**

To unlock a customization, just find one that is not in your collection and click on the unlock button. If you have enough points, the head or tail will be added to your account and is ready to use on your Battlesnake!

![Unlock a new customization with Battlesnake Points](/img/wip/Customization_Unlock.png)

### Earning Battlesnake Points

Battlesnake Points are gained by participating in various Battlesnake activities. As you explore the Battlesnake platform and complete goals, you will automatically earn points.

There are many ways to earn Battlesnake Points:

* Create a Battlesnake
* Complete challenges
* Participate in Battlegrounds
* Join a league
* Compete in tournaments
* Be active in the community
