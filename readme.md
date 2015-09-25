##hicrista.github.io

Source for my illustration portfolio at http://www.crista-alejandre.com. 
It is currently hosted through Github Pages and powered by Jekyll. 

The current layout is based on the [Design Samsung grid loading tutorial](http://tympanus.net/codrops/2014/05/15/recreating-the-design-samsung-grid-loading-effect/) over at Codrops. Still editing the look and feel of the site and still trying to cram in as many [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icons in as possible because I like them so much. 

This is an ongoing learning experience! Currently learning Javascript, and trying out efficiency tools like Grunt.

###Notes about Quirks
As [Joshua Lande describes here](http://joshualande.com/short-urls-jekyll/), in order to get clean URLs (especially to make a Jekyll site look more like a portfolio and less like a blog) each post requires a permalink entry in the YAML front matter. 

The illustration and comics galleries are identical except for part of the image path and the `<ul>` ID called by the GridScrollFx function. Eventually the Liquid tags should be more dynamic and the two galleries merged into one layout.

Looking for a way to set up the ability to enter `srcset` image options within a portfolio or blog entry, maybe something that will automatically append a different end-of-filename for every single image (see illustration/comics-etc layouts). 