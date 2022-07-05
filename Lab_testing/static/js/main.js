
(function($) {
    "use strict";
    var winwidth1 = jQuery(window).width();
    if (winwidth1 > 300) {
        jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop() > 50) {
                jQuery('header').addClass('site-navbar-bg');
            } else {
                jQuery('header').removeClass('site-navbar-bg');
            }
        });
    }
	
	
	  //  dropdown menu hover show
  
  $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
           },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
  
	
	
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><Span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		//$('.navigation li.dropdown > a').on('click', function(e) {
			//e. preventDefault();
		//});
	}
	
    
	
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });

	
	
	
	
	$("#partners-logo").owlCarousel({
      center:true,
    items:1,
	transitionStyle : "fade",
	autoPlay :true,
	loop:true,
    margin:0,
	slideSpeed :1000,
	pagination : false,
	nav:false,
    navigation : false,
	dots:false,
	itemsCustom : [
[320, 1]
 ],
	
      });

 
	
})(jQuery);


$(document).ready(function() {
 "use strict";
  $(".js-example-basic-single").select2();
  $(".servicesel").select2({
    placeholder: "Select Services",
    allowClear: true
  });
  $("select.serviceselect").select2({
    placeholder: "Select Services",
    allowClear: true
  });
  $('select.js-example-basic-multiple').select2({
    placeholder: "Choose Product",
    allowClear: true
  });
	
	
	$('.testimonial-inner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
	
	
	
});

	

/* ------------------------------------------------------------------
                		PARALLAX REFRESH COMMAND
------------------------------------------------------------------ */



if ($(window).width() < 767) {
	$(".wow").removeClass("wow");
 }