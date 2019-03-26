



jQuery(document).ready(function() {
  //  for registration form


  jQuery(window).resize(function(){
    var screenWidth = jQuery(window).width();
    if(screenWidth > 767)
    {
      jQuery(".main-menu ul").removeAttr("style");
    }
  });

  jQuery(".main-menu ul li").click(function(e){
    jQuery(this).children("ul").slideToggle(500);

    jQuery(".main-menu ul ul").not(jQuery(this).children("ul")).slideUp();
    e.stopPropagation();
  });




  jQuery("html").click(function(e){
    jQuery(".main-menu ul ul").slideUp();

  });

    jQuery(".main-menu ul ul").parent("li").children("a").append('  <i class="fas fa-angle-down"></i>')

// ----------slider part
jQuery('.owl-carousel').owlCarousel({
  autoplay:true,
  loop:true,
  items:6,
  margin:10,
  autoplayHoverPause:true

});


// particle textarea




});
