// main.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is JS file that contains principal fuctions of theme */
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Travelia - Travel Theme And Hotel Online Booking.
// Author: Iwthemes.
// Name File: main.js
// Version 1.0 - Created on 26 May 2015
// Website: http://www.iwthemes.com
// Email: support@iwthemes.com
// Copyright: (C) 2015

function result(data){  
  $('#thanks').modal('show');
  $('form.signin').hide();
  setTimeout(function(){$('#thanks').modal('hide');},4000);
}
function sendData(form){
  var form =$(form).parents("form")
  var name = form.find("input[name=name]").val();
  var mail = form.find("input[name=mail]").val();
  var question = form.find("input[name=question]").val();
  var mobile = form.find("input[name=mobile]").val();
  $.ajax({
    dataType:'jsonp',
    url:'https://script.google.com/macros/s/AKfycbzmwo5IYPyZjOcy3SAazmfwv0uxPYS-m5yMrCaMIA7GWpAuSxk3/exec',
    data:{
      name:name,
      mail:mail,
      question:question,
      mobile:mobile
    },
    jsonpCallback: "result"
  })
  return false;
}

$(document).ready(function($) {

	'use strict';

  $('#myslideshow1').smoothSlides({navigation:false});




	//=================================== Twitter Feed  ===============================//
  $("#twitter").tweet({
      modpath: 'js/twitter/index.php',
      username: "envato", // Change for Your Username
      count: 5,
      loading_text: "Loading tweets..."
  });

  //=================================== Flikr Feed  ========================================//
  /*$('#flickr').jflickrfeed({
    limit: 8, //Number of images to be displayed
    qstrings: {
      id: '36587311@N08'//Change this to any Flickr Set ID as you prefer in http://idgettr.com/
    },
    itemTemplate: '<li><a href="{{image_b}}" class="fancybox"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
  });*/

  //=================================== Instagram Feed  ========================================//
   var feed = new Instafeed({
        get: 'user',
        userId: '4262357198',
        accessToken: '4262357198.87b7c1a.77c0ebc72d0c4da08496566e7815b221',
        template:'<li><a href="{{link}}" class="fancybox"><img src="{{image}}" alt="{{caption}}" /></a></li>'
    });
    feed.run();

  //=================================== Sticky nav ===================================//

  $("#header").sticky({topSpacing:0});

  //=================================== datepicker ===================================//
  $(".date-input" ).datepicker();

  //=================================== Loader =====================================//
  jQuery(window).load(function() {
    jQuery(".status").fadeOut();
      jQuery(".preloader").delay(1000).fadeOut("slow");
  })

	//=================================== Carousel Services  ==============================//
	$("#single-carousel, #single-carousel-sidebar").owlCarousel({
		  items : 1,
		  autoPlay: 4000,
    	navigation : true,
    	autoHeight : true,
    	slideSpeed : 400,
    	singleItem: true,
    	pagination : false
	});

  //=================================== Carousel features  ==================================//
  $("#slide-features").owlCarousel({
      autoPlay: false,
      items : 1,
      navigation : true,
      autoHeight : true,
      slideSpeed : 400,
      singleItem: true,
      pagination : true
  });

  //=================================== Carousel Boxes  ==================================//
   $("#boxes-carousel").owlCarousel({
       autoPlay: 3200,
       items : 4,
       navigation: true,
       itemsDesktopSmall : [1024,3],
       itemsTablet : [768,2],
       itemsMobile : [500,1],
       pagination: false
   });

  //=================================== Carousel teams  ==================================//
   $("#team-carousel").owlCarousel({
       autoPlay: 3200,
       items : 3,
       navigation: true,
       itemsDesktopSmall : [1024,3],
       itemsTablet : [768,2],
       itemsMobile : [500,1],
       pagination: false
   });

   $("#team-carousel-02, #carousel-boxes-2").owlCarousel({
       autoPlay: 3200,
       items : 2,
       navigation: false,
       itemsDesktopSmall : [1024,3],
       itemsTablet : [768,2],
       itemsMobile : [500,1],
       pagination: false
   });

   //=================================== Carousel Sponsor  ==================================//
   $("#sponsors").owlCarousel({
       autoPlay: 3200,
       items : 5,
       navigation: false,
       itemsDesktop : [1199,4],
       itemsDesktopSmall : [1024,4],
       itemsTablet : [768,3],
       itemsMobile : [500,2],
       pagination: true
   });

   //=================================== Carousel testimonials  ===============================//
  $("#testimonials").owlCarousel({
      items : 1,
      autoPlay: 3200,
      navigation : false,
      autoHeight : true,
      slideSpeed : 400,
      singleItem: true,
      pagination : true
  });

	//=================================== Carousel Twitter  ===============================//
	$(".tweet_list").owlCarousel({
		  items : 1,
		  autoPlay: 3200,
    	navigation : false,
    	autoHeight : true,
    	slideSpeed : 400,
    	singleItem: true,
    	pagination : true
	});

	//=================================== Subtmit Form  ===================================//
	$('#form-contact').submit(function(event) {
	     event.preventDefault();
	     var url = $(this).attr('action');
	     var datos = $(this).serialize();
	     	$.get(url, datos, function(resultado) {
	     	$('#result').html(resultado);
		});
 	});

  //=================================== Form Newslleter  =================================//
  $('#newsletterForm').submit(function(event) {
       event.preventDefault();
       var url = $(this).attr('action');
       var datos = $(this).serialize();
        $.get(url, datos, function(resultado) {
        $('#result-newsletter').html(resultado);
    });
  });

  //=================================== Ligbox  ===========================================//
  $(".fancybox").fancybox({
      openEffect  : 'elastic',
      closeEffect : 'elastic',

      helpers : {
        title : {
          type : 'inside'
        }
      }
  });

	//=============================  tooltip demo ===========================================//
  $('.tooltip-hover').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
   });

  // slider-range
  $("#slider-range").slider({});

	//=================================== Totop  ============================================//
  $().UItoTop({
		scrollSpeed:500,
		easingType:'linear'
	});

  //=================================== Portfolio Filters  ==============================//
  $(window).load(function(){
      var $container = $('.portfolioContainer');
      $container.isotope({
      filter: '*',
          animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
  	}
  });
  $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
       var selector = $(this).attr('data-filter');
       $container.isotope({
        filter: selector,
              animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
            }
        });
       return false;
      });
   });
});
