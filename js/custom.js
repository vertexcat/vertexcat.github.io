/**********************
    Masonry
**********************/

$(function() {

  var $item = $('.item');
  var $container = $('.grid');
  $item.hide();

  $container.imagesLoaded( function() {
    $item.fadeIn(800);
    $container.masonry({
      itemSelector: '.item',
    });
    
  });
});

