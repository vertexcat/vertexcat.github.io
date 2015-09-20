---
layout: blog-post
title: Yellow Truck Modeling
published: true
tags: [blender, modeling, 3d, personal, project, process]
permalink: yellow-truck-part-two-modeling
---
Here is a quick breakdown of the whole process:

<iframe src="https://player.vimeo.com/video/138696883" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
 

## Modeling

This followed the standard procedure for many models: I added a few cubes and placed them using proportions from reference images. Then came the `mirror` and `subsurf modifiers`. 

To create hard(ish) edges I make additional `loop cuts` most of the time, `edge crease` sometimes, and rarely use the `edge split modifier`. All three methods are briefly covered in [this StackExchange question](http://blender.stackexchange.com/questions/6425/keep-sharp-edges-when-using-subdivision-surface). Edge split seems hard to control - I don't think I used it at all with this truck. Edge crease is good unless you're creasing a mesh that looks smooth under subsurf but actually isn't:

![Edge crease vs edge loops in Blender / 3D modeling](/images/blog/blog-edge-types.png)

I only recently learned about the `skin modifier`, and it is a good alternative to solidify when you want to control how thick your modifier mesh is. The seal around the windshield and the arms for the sideview mirrors are some examples. 

Part three will be about texturing!
