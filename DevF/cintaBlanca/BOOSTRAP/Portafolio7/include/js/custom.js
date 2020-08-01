jQuery(document).ready(function($){

/*==========================*/	
/*Preloader */	
/*==========================*/
$('.preloader').delay(350).fadeOut('slow');
/*==========================*/	
/*  Menu */	
/*==========================*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

	 $(".navbar-nav li a").click(function (event) {
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  
/*==========================*/	
/* Testimonial Slider */	
/*==========================*/
$('.testimonial-list').slick({
  dots: true,
  infinite: true,
  arrows:false,
  adaptiveHeight: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		adaptiveHeight: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 
 
/*==========================*/	
/* Parallax effect */	
/*==========================*/
$('.parallax').sparallax(); 


/*==========================*/	
/* feature box same height */	
/*==========================*/	
	var maxHeight = 0;
	$(function(){


$(".service-box").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$(".service-box").height(maxHeight);
});
 
 


/*==========================*/	
/* Animated Bar  */	
/*==========================*/	
$('.bar-fill').waypoint({
	handler: function() {
      $(this).not('.animated').each(function() {
	  $(this).animate({
		  width: $(this).attr('data-percent')
      }, 500);
	 $(this).addClass('animated');
            });
        },
        offset: '95%'
});
	


/*==========================*/	
/* Animated Number  */	
/*==========================*/	 
 
  $('.timer').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
 
      // start all the timers
      $('.timer').each(count);
 
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
	  
	  
	 
 /*==========================*/	
/* Skills Animated Number  */	
/*==========================*/	 
$(window).scroll(function() {	
if ($('.stats-list li').length) {
       $('.stats-list li').not('.animates').each(function(){
  if( $(window).scrollTop() >= $(this).offset().top-$(window).height() ) {
	   $(this).addClass('animates').find('.timer').countTo({
  from: 0,
    });
  }
 });
}
});


/*==========================*/	
/* Lighbox */	
/*==========================*/	
$('.work-list').magnificPopup({
  delegate: '.work-zoom', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled: true,
  preload: [0,2], 
  removalDelay: 300,
  navigateByImgClick: true,
  titleSrc: 'title', 
  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
});
	

 /*==========================*/	
/* Search Box Toggle  */	
/*==========================*/
$('.search-icon a').click(function(){
	$('body').addClass('show-search');
	return false;
});

$('.close-search').click(function(){
	$('body').removeClass('show-search');
	return false;
});


 /*==========================*/	
/* Go to Top  */	
/*==========================*/
if ($('.go-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700, 'easeInOutExpo');
    });
}


/*==========================*/	
/* Google Map */	
/*==========================*/
	if($('#map-canvas').length != 0){
		var map;
		function initialize() {
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
			 	center: new google.maps.LatLng(25.932884, 83.569633),
			 	styles: [
							{"stylers": [{ hue: "#ce9f51" },
							{ saturation: -100 },
							{ lightness: 0 }]},
    					{
					      "featureType": "road",
					      "elementType": "labels",
					      "stylers": [{"visibility": "off"}]
					    },
					    {
					      "featureType": "road",
					      "elementType": "geometry",
					      "stylers": [{"lightness": 100},
					            {"visibility": "simplified"}]
					    }
			 	]
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			var image = 'include/images/map-marker.png';
			var myLatLng = new google.maps.LatLng(25.932884, 83.569633);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image
			 });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}



/*==========================*/	
/* Header fix */	
/*==========================*/
var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
	
});	

	
 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});


 
