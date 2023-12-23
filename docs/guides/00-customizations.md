---
title: Customizations
description: Options for customizing your Battlesnake's appearance
---

# Customizing Your Battlesnake

You can customize your Battlesnake's appearance in three ways, by choosing a head, tail, and a color to represent your Battlesnake on the game board.

Your choices are determined by how your Battlesnake responds to [Battlesnake API](api) requests &mdash; specifically the root URL.


## Heads and Tails

There are _many_ head and tail options to choose from, and you can mix and match them however you like! You can [browse which options are available to you](https://play.battlesnake.com/customizations) in the Battlesnake UI.


### Default Head and Tail

If your Battlesnake does not specify a valid head or tail, the `default` options will be used.

![default head and tail](/img/defaultsnake.png)


### Unlocking Heads and Tails

New head and tail customizations are unlocked using **Battlesnake Points**, which can be earned monthly by competing in [Leaderboards](leaderboards/overview).

To unlock a new customization, find one that is not in your collection and click on the unlock button. If you have enough points, the head or tail will be added to your account and is ready to use on your Battlesnake!

![Unlock a new customization with Battlesnake Points](/img/Customization_Unlock.png)


## Choosing a Color

Your Battlesnake can choose any valid hex color code to represent it on the game board. This value should be a 7 character string starting with "#" that looks similar to "#33CC00".

You can use an [HTML Color Picker Tool](https://www.w3schools.com/colors/colors\_picker.asp) to help you find the exact color you're looking for.

#### **Some Example Battlesnake Colors**

![#E80978](/img/screenshot-2020-05-13-09.19.33.png) <span style={{position: 'relative', top: '-25px'}}>#E80978</span>

![#3E338F](/img/screenshot-2020-05-13-09.19.58.png) <span style={{position: 'relative', top: '-25px'}}>#3E338F</span>

![#4C89C8](/img/screenshot-2020-05-13-09.20.29.png) <span style={{position: 'relative', top: '-25px'}}>#4C89C8</span>


### Default Color

If your Battlesnake does not specificy a valid color, it will use a default value of `#888888`.


## Example JSON

Here's an example of a full personalized Battlesnake.

```json title="customizations.json"
{
	"color": "#736CCB",
	"head": "beluga",
	"tail": "curled"
}
```

This configuration will display your Battlesnake like this:

![Sample Snake](/img/samplesnake.png)
