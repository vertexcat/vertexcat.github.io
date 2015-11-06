---
layout: 6-blog-post
title: Quick Website Tip
published: false
tags: [web-dev]
permalink: quick-website-tip
---
Part of my day job involves managing and monitoring [the company website](//allisonrossinc.com), and a lot of what I do there spills over into managing my own illustration work and marketing as a freelancer. I'm not sure if I'll blog regularly about this type of thing, but I know that lessons learned from from understanding who visits a site, how do they get there, and what do they do once they're there probably apply to almost every single working creative professional out there.

So. You've got people visiting your website, and you want to keep them around. The number one technical rule for this is **fix all of your broken links**. (Broken links are links on your site that, because of a typo or renamed file or something, lead to a "page not found" or "404 error" message.) You want the person looking at your site to see as much of your work as possible, not the same error page over and over again. 

I for one am definitely guilty of creating and not fixing all kinds of broken links on this site. So if you're like me, or if you just want to see if there are any broken links at all on your site, there is a free service called [Google Search Console](https://www.google.com/webmasters/tools/home?hl=en) (aka Google Webmaster Tools) that helps you do just that. Here are the basic steps.

**Set up search console**

If you don't consider yourself a technical person and/or you have someone else helping you deal with website design and troubleshooting, I would still suggest that you ask that person about broken link monitoring and Google Search Console. They can help you add your site to search console, which is the hardest part of this entire process. After that you can monitor broken links yourself. 

To handle setup yourself, you should be comfortable with tasks like editing HTML or uploading files directly to your web server. If you are, you can sign up for Search Console [here](https://www.google.com/webmasters/) and follow the steps to add your own website. 

* If your site runs from a blogging platform like Tumblr or Wordpress there's often a "custom HTML" part of the template that you can edit without messing with the rest of the site. In that case, you can choose the HTML tag method of adding your site and follow the steps. 
* If that's not an option, but you bought your domain name yourself and know how to navigate your account, choose the DNS verification method. 
* If you know how to upload files to your web server, you probably don't need to be reading this! 

**Wait**

Once you're all set up, go do something else. For a few days. Since you're creating a new account Search Console will need time to start gathering data. Unfortunately, there's no way to get any information from before your Search Console setup date. 

**Look at the results**

Come back to Search Console when you're ready. Once you're logged in there are all kinds of statistics and options to deal with, but what you want right now is "Crawl" in the left menu, then "Crawl Errors". If you are really, really good, you might have 0 errors. Keep up the good work! For the error-prone like myself, you might have 28 errors just from the past few weeks. Yikes. 

What does this information mean? The URL is the broken link itself. Somehow, either by clicking on a link or mistyping a web address or finding an outdated search result, somebody got an error message by visiting this URL. 404 means page not found - if you have errors other than 404s on a regular basis you should talk to your website troubleshooter or your hosting company, because that might mean something is up on the web host/server end. And then the date detected. I like dealing with the newest problems first because sometimes I will have already fixed an older one or changed the page entirely. 



