---
layout: 6-blog-post
title: Dish promo image process 
published: true
permalink: dish-promo-process
---
This is the process post for the Dish promo image for issue 2 seen [here](/dish-issue-2-call) and [here](dish-issue-2-promo). 

In [Dish Issue 1](/dish/), all of the textures were diffuse and hand-painted. It's a look I like a lot, but painting plus UV unwrapping every single mesh takes a long time. So with issue 2 I'm broadening the shader spectrum to see what I can achieve quickly while maintaining style consistency. 

For time and sanity's sake these were my criteria:

* No lamps, just environment lighting (white background, strength 1) 
* Background to be composited post-render for more flexibility 
* No UV unwrapping! Procedural textures only. Vertex painting allowed. 

With these in place, some of the tips I mentioned in the [Virginia City postcard post](/virginia-city-postcard) worked here too: 

* The noodles are a `soft body simulation` with the chopsticks and small dish as `collision` objects. Thanks to this [noodle/rope physics video](//www.youtube.com/watch?v=Lg7jxAMs60Q) I realized that I've been messing with way too many settings in the past and that curves work really well for this purpose. So my noodles are a bunch of nurbs curves set to `3D` and `full` - you don't even have to convert the curves to mesh for the simulation. Like the curtains in my earlier [Virginia City](/virginia-city-postcard/) scene I use the sim to get the mesh into the general shape I want, apply it (you do this through the modifiers settings, not the physics ones!), and then tweak. It's often easier to move the "static" objects around it after you've applied the simulation, but if you do that you should definitely check your work so that you don't end up [stringing noodles *through* chopsticks.](https://www.instagram.com/p/_aqyr2Pm91) 
* The gumdrops/jellies have an `Object Info > Random` node that randomly selects one of 4 colors I picked in a color ramp and assigns it to every gumdrop I duplicate. 

One thing I tried for the first time was `Texture Coordinate > Reflection` to make fake shadows and reflections. The effect is clearest on the carrot, but you can also see it in the little dish below the noodles (the pink glow around the bottom of the dish). There's more info and applications of this texture coordinate option [here](http://www.blenderguru.com/articles/cycles-input-encyclopedia/) and [here](http://blender.stackexchange.com/questions/2030/fake-reflections-in-cycles). I still can't figure out the toon shader but this is starting to look like a nice substitute for my purposes.

Here's the node setup for the carrot material: 

![Blender cycles node setup for carrot](/images/blog/carrot-nodes.png). 

In the screenshot above there's also `Geometry > Pointiness` which for me accomplishes what I can never get `dirty vertex colors` to do (mainly dirt maps). I also used it pretty extensively on [the yellow truck render](/yellow-truck/) I did a while back. There are some really great examples of pointiness over at [Durk n Fred](http://durknfred.blogspot.com/2015/02/new-cycles-pointiness-attribute.html). 

Remember that for both of these (or really most things you plug into `Fac`) you can try adding a color ramp or gradient texture to get interesting effects and better control. 

And that's it! I'm not 100% sure that all the illos in Dish 2 will be like this, but it was really nice to finish a piece in 1/2 to 1/3 the time compared to hand painting. 






