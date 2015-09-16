---
layout: blog-post
title: Lighting a Blender scene through a voronoi dome
published: false
tags: [blender, cycles, process, lighting, tips]
permalink: voronoi-dome-lighting
---
This is a variation on creating realistic shadows with an alpha map, which I first learned about in the Blender Guru [Make a Grass Meadow Scene](http://www.blenderguru.com/tutorials/make-grassy-meadow-scene/) tutorial. Partway through the video, Andrew price talks about importing a treeline image as a plane in Blender, then lighting your scene through that to add more realism in the form of tree-shaped shadows. 

It's a great idea, and here's a slightly quicker version for when you want that sort of mottled, sun shining through clouds or trees look. Here's a before/after gif of the effect:

![Blender voronoi dome lighting](/images/blog/sun-comparison.gif)

So rather than finding or making a treeline transparent PNG, we're going to use a procedural texture to act as the filter that partially blocks light from hitting the scene. Voronoi textures are handy for things that need to look clumpy or grouped



