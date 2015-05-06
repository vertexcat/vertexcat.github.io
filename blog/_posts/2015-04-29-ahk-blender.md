---
layout: blog-post
title: Autohotkey - Blender Tip
published: true		
tags: [tips, blender, modeling, 'low-poly']
permalink: ahk-blender
---
Blender users: **speed up your modeling process by remapping "delete" to the left side of your keyboard!** Read on to learn more. 

Having freelance work and a day job means that I'm all about saving time. One of the great things about [#the100dayproject](/100-day-project/) is that it forces you to find, learn, and apply shortcuts so you can just get the thing done. 

One HUGE timesaver has been [Autohotkey](http://www.autohotkey.com/). [Lifehacker has a nice writeup](http://lifehacker.com/316589/turn-any-action-into-a-keyboard-shortcut) on how AHK can be useful for almost any computer user, but one really handy trick specific to Blender is to **remap the Delete key.** 

I think Blender almost forces you to learn its keyboard shortcuts, unless you have infinite patience and a very steady mouse hand (which I do not). This is all well and good (if you mouse with your right hand), because most of the common keys and key combinations you use in modeling are on the left side of the keyboard *except for delete*. 

Jumping between to and from delete with your left hand almost becomes a piano exercise, which I think is a pain in the butt. So this is where AHK comes in: you can write a short script that remaps delete to a key of your choice, and have it only run in Blender. I chose Caps Lock, and this is what my AHK script looks like:

```
#IfWinActive, Blender
{
	Capslock::Delete
	!Capslock::ExitApp
Return
}
```
Easy! The !Capslock (Alt+Caps Lock) isn't strictly necessary, but I like to put an escape button into every AHK script in case I mess things up. I put this script into my startup folder so that it launches automatically and just stays on; since the script only runs when Blender is the active window, I can still use Caps Lock normally in other applications. 

If you Google for *blender caps lock* or similar you'll see that Caps Lock is something that a lot of people complain about. Another useful remapping is to make Caps Lock an extra Shift or Control key, since that might better fit the shape and angle of your hand. 

Finally, if you want to do this but don't want to use AHK, [Lifehacker tells you how with Windows Server 2003 Resource Kit Tools](http://lifehacker.com/5715026/remap-your-capslock-key-sans-autohotkey-or-third-party-apps). 