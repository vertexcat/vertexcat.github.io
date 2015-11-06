---
layout: 6-blog-post
title: Yellow Truck Texturing
published: true
tags: [blender, 3d, personal, project, process, texturing]
permalink: yellow-truck-part-three-texturing
---
This is the last post of 3 ([part 1](/yellow-truck), [part 2](yellow-truck-part-two-modeling)) about the [Yellow Truck project](/yellow-truck-project). 

##Texturing 

If I had to pick the three most important takeaways from this experiment in texturing, I'd go with: 

###Thinking about materials in layers is better than trying to capture everything at once,
especially in terms of keeping nodes organized and fully understanding what exactly you are changing when you edit the material. In the truck's case, from bottom to top,

* Layer 1: diffuse, base color
* Layer 2: glossy, with imperfections like scratches applied
* Layer 3: surface imperfections like dirt or rust

It can be tempting to jump straight to the surface dirt when you're working on the diffuse color, since dirt changes the color of the car. But that leaves you open to errors like, for example, accidentally mixing a glossy over that to make the car shiny. 

###Frames. FRAMES.
Use them. Frames in building Cycles materials are really handy for a few reasons:

* You can color code them.
* You can give it a description to explain what a framed group of nodes is doing to the material. Do this even if you're the only person who will ever see the blend file, because you will really thank yourself once you come back to the project two weeks later and know what those three clumps of 10 nodes each are for.
* You can parent nodes to frames, so when you want to move those nodes around you can just select the frame instead of each individual node. Drag and drop a node inside a frame to parent, or `Ctrl + P` if you're already used to using that shortcut in modeling or animating. The frame will resize itself when you put more nodes in!
* This is a matter of preference, but if you only have a few nodes to group together a frame keeps them all visible while you have to tab into a node group. *But* node groups are necessary when you want to reuse said group over and over again, or if you want to clean up the inputs and outputs. 

If you've never used frames before, check out this [Youtube video by Jonathan Williamson/Blender Cookie](//www.youtube.com/watch?v=IuGJ_PDwOPI) (start at around the 2:30 mark). If you're familiar with frames, I recommend reading the [docs for Node Wrangler](http://gregzaal.github.io/node-wrangler/) to add even more keyboard shortcuts to your workflow! 

Speaking of Node Wrangler and keyboard shortcuts, `Ctrl + Shift + LMB` is a **must** when experimenting with nodes. It creates a temporary shadeless viewer node to let you preview the material up to the node you've clicked on. Especially handy for anything you're plugging into Fac, since that (e.g. a color ramp, image texture, layer weight, fresnel) is normally not very visible itself. This is getting a little abstract, so scroll to the bottom of this post for an explanation through screenshots (click on the image to enlarge).
:warning: As far as I know the one limitation is that the shortcut does not work inside a node group. I'm also experiencing some quirks in 2.76, but it definitely works well in 2.75. 

###Learn from others.
There are so many talented Blender professionals and enthusiasts who record or write tutorials that you can often find exactly what you're looking for. Modeling a car tire (even though you can't really see the tires) was something I hadn't done and sure enough, Andrew Price/Blender Guru has a fantastic and fast way of doing so in his [video tutorial](//www.youtube.com/watch?v=WhmRn-tYtxE). Another crucial resource is other people's finished blends. I go through Blendswap and the Blender Artists forum once in a while and look for people who share great looking images and a process video or blend file to go with it. Sometimes these will be public domain and then you can just snag it for your project! But more importantly these and other files are great for seeing how other people go about doing things common to 99% of materials like applying and distributing glossiness or adding noise and other imperfections. 

The [first post](/yellow-truck) about this project has a list of credits and resources used in creating this render. 

<center><a href="/images/blog/node-preview.jpg"><img src="/images/blog/node-preview.jpg" alt="Node preview in Cycles materials" style="max-width: 600px;"></a></center>
