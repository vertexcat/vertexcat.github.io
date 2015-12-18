---
layout: 6-blog-post
title: Virginia City postcard illustration 
published: true
tags: [3d, blender, illustration, process, tips, lessons-learned, project, completed]
permalink: virginia-city-postcard
---
![Virginia City Postcard](/images/three/virginia-city.jpg)

This is a wedding invitation postcard that I recently finished for an awesome couple getting married in Virginia City, Nevada next year. 

### Design decisions

Because Virginia City is, and I quote, "one of [their] favorite census-designated places," I wanted this card to be location-specific. I landed on featuring the venue itself - St. Mary's Art and Retreat Center. The wedding is '50s themed, which influenced the silhouettes and lettering. 

### Process
The building itself was modeled in Blender from reference photos. The brick and grass uses hand-painted studies I did of TF2 textures. Since these two parts of the process are so time consuming I took a few shortcuts to set up the rest of the scene, which was rendered with Cycles and then  composited in Photoshop. The lettering was last, which I drew in Photoshop based on Filmotype's Honey and Horizon fonts.

### Useful Blender and scene building shortcuts
* Silhouettes: stock images! Practically speaking this is why the scene is set at night, but the "fun night out with friends" mood also suits both the bride- and groom-to-be's personalities. The rim lights are copies of the relevant silhouette mesh but with an emission node. Yet another time saver is the `Import Images as Planes` function in Blender, because the import dialog lets you tell Blender to create an alpha mask node setup. 
* Varied window lighting: `Object Info > Random` node plugged into emission strength with a gradient image texture. 
* Plants decorating the balcony: ivy generator, which Blender ships with. The white flower models are a few planes placed in a rose-ish clump.
* Curtains: cloth simulation! It's way faster than pushing vertices or sculpting, if you're not too particular about the exact look of the finished cloth. I probably link to Blender Guru in at least half my posts, but his tutorials really are useful: this [How to Make Towels in Blender](https://www.youtube.com/watch?v=PEpsN1-W-Qw) video was what helped me make sense of cloth sims when I first started using them as a shortcut.
* Glowy curtains and flowers: my first successful application of the add shader :grin: :sparkles: No emission needed. As a side note, the plants and curtains decoration worked out so well that the couple is thinking about using something similar in real life!
* Imperfections: adding a few standalone bricks on the corners of the building, horizontal planes on the gable rotated at different angles, and partly closing some of the windows. In Photoshop using the ripple filter `Filter > Distort > Filter` also helps make the image look less "clean."

This was a really fun project for two very fun people, and I'm definitely looking forward to seeing these in print! 