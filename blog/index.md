---
layout: 4-static
title: Blog
---

<div class='tumblrInjection'>
    <div class='tumblrInjectionLine'><a id='tumblrInjection1' href=''><img id='tumblrInjectionPhoto1' border='0' style='margin:3px' src='' alt='' /></a><p id='tumblrInjectionText1'></p><hr><br></div>
    <div class='tumblrInjectionLine'><a id='tumblrInjection2' href=''><img id='tumblrInjectionPhoto2' border='0' style='margin:3px' src='' alt='' /></a><p id='tumblrInjectionText2'></p><hr><br></div>
    <div class='tumblrInjectionLine'><a id='tumblrInjection3' href=''><img id='tumblrInjectionPhoto3' border='0' style='margin:3px' src='' alt='' /></a><p id='tumblrInjectionText3'></p><hr><br></div>
    <div class='tumblrInjectionLine'><a id='tumblrInjection4' href=''><img id='tumblrInjectionPhoto4' border='0' style='margin:3px' src='' alt='' /></a><p id='tumblrInjectionText4'></p><hr><br></div>
    <div class='tumblrInjectionLine'><a id='tumblrInjection5' href=''><img id='tumblrInjectionPhoto5' border='0' style='margin:3px' src='' alt='' /></a><p id='tumblrInjectionText5'></p></div>
</div>

<script type='text/javascript' src='http://hicrista.tumblr.com/api/read/json'></script>

<script type='text/javascript'>

    document.getElementById('tumblrInjectionPhoto1').setAttribute('src', tumblr_api_read.posts[0]['photo-url-500']);
    document.getElementById('tumblrInjection1').setAttribute('href', tumblr_api_read.posts[0]['url-with-slug']);
    document.getElementById('tumblrInjectionText1').innerHTML = tumblr_api_read.posts[0]['photo-caption'];

    document.getElementById('tumblrInjectionPhoto2').setAttribute('src', tumblr_api_read.posts[1]['photo-url-500']);
    document.getElementById('tumblrInjection2').setAttribute('href', tumblr_api_read.posts[1]['url-with-slug']);
    document.getElementById('tumblrInjectionText2').innerHTML = tumblr_api_read.posts[1]['photo-caption'];

    document.getElementById('tumblrInjectionPhoto3').setAttribute('src', tumblr_api_read.posts[2]['photo-url-500']);
    document.getElementById('tumblrInjection3').setAttribute('href', tumblr_api_read.posts[2]['url-with-slug']);
    document.getElementById('tumblrInjectionText3').innerHTML = tumblr_api_read.posts[2]['photo-caption'];

    document.getElementById('tumblrInjectionPhoto4').setAttribute('src', tumblr_api_read.posts[3]['photo-url-500']);
    document.getElementById('tumblrInjection4').setAttribute('href', tumblr_api_read.posts[3]['url-with-slug']);
    document.getElementById('tumblrInjectionText4').innerHTML = tumblr_api_read.posts[3]['photo-caption'];

    document.getElementById('tumblrInjectionPhoto5').setAttribute('src', tumblr_api_read.posts[4]['photo-url-500']);
    document.getElementById('tumblrInjection5').setAttribute('href', tumblr_api_read.posts[4]['url-with-slug']);
    document.getElementById('tumblrInjectionText5').innerHTML = tumblr_api_read.posts[4]['photo-caption'];

        document.getElementById('tumblrInjectionPhoto6').setAttribute('src', tumblr_api_read.posts[4]['photo-url-500']);
    document.getElementById('tumblrInjection6').setAttribute('href', tumblr_api_read.posts[4]['url-with-slug']);
    document.getElementById('tumblrInjectionText6').innerHTML = tumblr_api_read.posts[4]['photo-caption'];
</script>