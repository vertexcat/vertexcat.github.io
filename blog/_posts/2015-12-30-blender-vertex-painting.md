---
layout: 6-blog-post
title: Vertex painting tip in Blender
published: true
permalink: vertex-painting-tip
---
![Buffet Cats WIP](http://40.media.tumblr.com/21f305def77e742a918e509bc3fe2464/tumblr_o016ap1bZz1v2jl8fo1_1280.png)

I've recently started am working on a project called Buffet Cats! It's a simple game I'm building from the ground up in order to learn Unity and C#. I decided to vertex paint almost every model for a few reasons: it saves time up front, since you don't need to unwrap the mesh before painting, and then with the right shader in Unity all of your colors get imported and applied just like that. Easy!

[See this Unity forum post for the vertex color shader I've been using.](http://forum.unity3d.com/threads/standard-shader-with-vertex-colors.316529/)

But there was a catch: in Blender's vertex painting (and also weight painting) modes you don't get a fill tool. With weight painting this is fine since you're probably only painting a small amount of vertices, but with vertex painting you will often want to flood fill the entire object or make several faces the same color. 

Turns out you *can* fill in these modes without a fill tool if you turn on "face selection masking". This option is available in texture, weight, and vertex modes--it lets you select some/all of the faces and masks everything else so that you're only painting on the faces you want. Once you select the faces the shortcut `Shift + K` will fill them with the current brush color. And that's it! You can also use face selection masking in texture painting mode. 

Thanks to this thread in [/r/blenderhelp](https://www.reddit.com/r/blenderhelp/comments/38qkox/how_can_i_floodfill_paint_entire_faces_a_solid/) for the great tip.
