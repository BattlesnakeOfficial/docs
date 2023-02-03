---
title: Announcing Playback Settings
authors:
- Sherri
description: We're so excited to introduce our new Playback Settings which lets you configure and persist common playback settings for all your games.
---

We're so excited to introduce our new Playback Settings which lets you configure and persist common playback settings for all your games! Settings are saved to your browser's local storage, and if local storage is not available, settings will be disabled. You can also override a setting on a per game basis without affecting your saved values.
![](./img/battlesnake-playback-settings-view.png)Screenshot of the Battlesnake playback settings form where you can configure speed, theme and autoplay.
### What's Changed?

The theme button has been moved out of the playback controls and into the settings view.

### What's New?

**Settings View**

While viewing or playing a game you can navigate to the settings view by clicking the settings (cog icon) in the playback controls beneath the game board.

You can also use the shortcut key: **,** (*comma*) 
![](./img/playback-settings.gif)Animated gif demonstrating where to find the settings button to navigate to the playback settings view
**Playback Speed**

Control the playback speed for all your games now. You can choose slow, medium & fast. Under the hood they map to approximate framerate values:

- Slow = ~6 fps (frames per second)
- Medium = ~10 fps
- Fast = ~20 fps

The default is medium.

**Autoplay**

Enabling this setting will auto play all your games as soon as the page loads.

**Theme**

While you could change the theme between light & projector modes before the change, now it will save your preference for all games. 

We've got some exciting theme related changes coming in the near future so stay tuned.

**URL Overrides**

Do you want to set a preference for just a single game? You can override some saved settings by adding a param to the url.

- Playback speed: **&frameRate=20** (numeric values between 1-20)
- Autoplay: **&autoplay=true** (true or false)

![](./img/battlesnake-url-overrides.gif)Animated gif demonstrating how to use url overrides for autoplay and frameRate playback settings.
### Feedback is Welcome

If you run into any issues while using the settings, or have suggestions to make it better please open a feature request in our [Feedback Repo](https://github.com/BattlesnakeOfficial/feedback/discussions/new?category=bug-report) or [Discord](https://play.battlesnake.com/discord/).

I also want to give a huge shout out to [bcambl](https://github.com/bcambl) and [BoldBigflank ](https://github.com/BoldBigflank)who provided [valuable feedback and suggestions to help improve this new feature](https://github.com/BattlesnakeOfficial/feedback/discussions/134). Thanks so much!
