$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		
	};
	$('body').removeClass('loaded'); 
	$('body').addClass('load-finished'); 
	setTimeout(function() {
		$('body').removeClass('load-finished'); 
		$('body').addClass('load-animate'); 
	}, 1000);
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/
	
	/* mobile nav */
	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.opened-block-nav').slideToggle(); 
		return false;
	});
	/* mobile nav */
	
	/* main slider */		
	if($('.js-slider').length){
		var $numberMain = $('.number-main-slide');
		var $slickMain = $('.js-slider');

		/*$slickMain.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {			
			var i = (currentSlide ? currentSlide : 0) + 1;
			$numberMain.text(i + '/' + slick.slideCount);
		});*/
	
		$slickMain.slick({
			infinite: true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 50000,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			pauseOnHover:false,
			responsive: [
			{
			  breakpoint: 501,
			  settings: {
				dots: true,
				arrows: false			
			  }
			}	
		  ]
		});
		
	};
	/* main slider */	
	
	/* news slider */	
	if($('.js-news').length){
		var $numberNews = $('.numbers-news');
		var $slickNews = $('.js-news');

		var viewport_wid = viewport().width;
			
		if (viewport_wid > 1200) {
			$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 2;
				$numberNews.text(i + ' / ' + slick.slideCount);
			});
		} else{
			$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				$numberNews.text(i + ' / ' + slick.slideCount);
			});
		}
		
			
		
		var handlerNewsSlider = function(){
	
			var viewport_wid = viewport().width;
			
			if (viewport_wid > 1200) {
				$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 2;
					$numberNews.text(i + ' / ' + slick.slideCount);
				});
			} else{
				$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 1;
					$numberNews.text(i + ' / ' + slick.slideCount);
				});
			}
			
			

		}
		$(window).bind('load', handlerNewsSlider);
		$(window).bind('resize', handlerNewsSlider);
		
		$slickNews.slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  responsive: [
			{
			  breakpoint: 1201,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,			
			  }
			}	
		  ]
		});
	};
	
	/* news slider */
	
	/* scroll to screen */
	$('.anchor').click(function() {		
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
		return false;
	});
	/* scroll to screen */
	
	/* icon-service-1 */
	$(".js-servise-1").hover(
		function() {
			$(".anim-block__img_1", this).addClass("bounceInLeft");
			$(".anim-block__img_2", this).addClass("bounceInLeft");
			$(".anim-block__img_3", this).addClass("bounceInRight");
			$(".circle_1", this).addClass("animrotate");
			$(".circle_2", this).addClass("animrotate");			
		},
		function() {
			$(".anim-block__img_1", this).removeClass("bounceInLeft");
			$(".anim-block__img_2", this).removeClass("bounceInLeft");
			$(".anim-block__img_3", this).removeClass("bounceInRight");		
			$(".circle_1", this).removeClass("animrotate");
			$(".circle_2", this).removeClass("animrotate");			
		}
	);
	/* icon-service-1 */
	/* icon-service-2 */
	$(".js-servise-2").hover(
		function() {
			$(".anim-block__img_1", this).addClass("bounceInLeft");
			$(".anim-block__img_2", this).addClass("bounceInLeft");
			$(".anim-block__img_3", this).addClass("flipInY");
			$(".circle_1", this).addClass("animrotate");				
		},
		function() {
			$(".anim-block__img_1", this).removeClass("bounceInLeft");
			$(".anim-block__img_2", this).removeClass("bounceInLeft");
			$(".anim-block__img_3", this).removeClass("flipInY");		
			$(".circle_1", this).removeClass("animrotate");					
		}
	);
	/* icon-service-2 */
	/* icon-service-3 */
	$(".js-servise-3").hover(
		function() {
			$(".anim-block__img_1", this).addClass("bounceInLeft");
			$(".anim-block__img_2", this).addClass("bounceInLeft");
			$(".anim-block__img_3", this).addClass("bounceInRight");
			$(".circle_1", this).addClass("animrotate");
			$(".circle_2", this).addClass("animrotate");			
		},
		function() {
			$(".anim-block__img_1", this).removeClass("bounceInLeft");
			$(".anim-block__img_2", this).removeClass("bounceInLeft");
			$(".anim-block__img_3", this).removeClass("bounceInRight");		
			$(".circle_1", this).removeClass("animrotate");
			$(".circle_2", this).removeClass("animrotate");			
		}
	);
	/* icon-service-3 */
	/* icon-service-4 */
	$(".js-servise-4").hover(
		function() {
			$(".anim-block__img_1", this).addClass("bounceInLeft");
			$(".anim-block__img_2", this).addClass("heightDown");
			$(".anim-block__img_3", this).addClass("fadeIn");
			$(".anim-block__img_4", this).addClass("bounceInRight");
		},
		function() {
			$(".anim-block__img_1", this).removeClass("bounceInLeft");
			$(".anim-block__img_2", this).removeClass("heightDown");
			$(".anim-block__img_3", this).removeClass("fadeIn");	
			$(".anim-block__img_4", this).removeClass("bounceInRight");		
		}
	);
	/* icon-service-4 */
	/* icon-service-5 */
	$(".js-servise-5").hover(
		function() {
			$(".anim-block__img_1", this).addClass("bounceInLeft");
			$(".anim-block__img_2", this).addClass("bounceInRight");
			$(".anim-block__img_3", this).addClass("flipInY");
			$(".anim-block__img_4", this).addClass("heightDown");
			$(".circle_1", this).addClass("animrotate");
			$(".circle_2", this).addClass("animrotate");
			$(".circle_3", this).addClass("animrotate");
		},
		function() {
			$(".anim-block__img_1", this).removeClass("bounceInLeft");
			$(".anim-block__img_2", this).removeClass("bounceInRight");
			$(".anim-block__img_3", this).removeClass("flipInY");
			$(".anim-block__img_4", this).removeClass("heightDown");
			$(".circle_1", this).removeClass("animrotate");
			$(".circle_2", this).removeClass("animrotate");
			$(".circle_3", this).removeClass("animrotate");
		}
	);
	/* icon-service-5 */
	/* icon-service-6 */
	$(".js-servise-6").hover(
		function() {
			$(".anim-block__img_1", this).addClass("fadeInLeft");
			$(".anim-block__img_2", this).addClass("fadeInRight");
			$(".anim-block__img_3", this).addClass("fadeInDown");			
		},
		function() {
			$(".anim-block__img_1", this).removeClass("fadeInLeft");
			$(".anim-block__img_2", this).removeClass("fadeInRight");
			$(".anim-block__img_3", this).removeClass("fadeInDown");		
		}
	);
	/* icon-service-6 */
	
	
	/* fancybox */
	if($('.fancybox').length){
		$('.fancybox').fancybox({
			margin:10,
			padding:0,
			openEffect  : 'elastic',
			closeEffect  : 'elastic'
		});
	};
	if($('.fancybox-media').length){
		$('.fancybox-media')
		.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});
	};
	/* fancybox */
	
	/* box search */
	$('.js-search').click(function() {		
		$(".search-form").toggleClass("opened-search");
		$(this).toggleClass("active");
		return false;
	});
	$(document).click(function(e){
		if ($(e.target).parents().filter('.search-form:visible').length != 1) {
			$('.search-form').removeClass("opened-search");
			$('.js-search').removeClass("active");
		}
	});
	/* box search */

	/*aside*/
	$('.js-item').on('click', function(e){
	 var subList = $(this).find('.js-sub-list');
	 if(subList.length) {
	  $('.js-sub-list').slideUp();
	  $(this).find('.aside__arrow').toggleClass('aside__arrow_up');
	  if(!subList.is(":visible")) {
	   e.preventDefault();
	   $(this).find('.js-sub-list').slideToggle();
	  }
	 }
	});
	/*aside*/

	/* product slider */	
	if($('.js-product').length){
		$('.js-product').slick({
		  dots: false,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 1,
		  slidesToScroll: 1

		});
	};
	/* product slider */

	/* advantages slider */		
	if($('.js-adv-slider').length){
		var $numberMain = $('.number-main-slide');
		var $slickMain = $('.js-adv-slider');

		/*$slickMain.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {			
			var i = (currentSlide ? currentSlide : 0) + 1;
			$numberMain.text(i + '/' + slick.slideCount);
		});*/
	
		$slickMain.slick({
			infinite: true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			pauseOnHover:false,
			
		});
		
	};
	/* advantages slider */

	/*tabs*/
	$('.tabs li a').click(function(){
    	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
    	$(this).parent().siblings().removeClass('active');
    	var id = $(this).attr('href');
    	$(id).removeClass('hide-tab');
    	$(this).parent().addClass('active');
	   return false;
	});
	/*tabs*/

	/* forms */
	$('.form-control').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);
			return false;
		});
	});
	
	$('.form-control').focus(function(){
		$(this).parents('.box-field').addClass('focused-field');
	});
	
	$('.form-control').focusout(function(){
		var val_field = $(this).val().length;		 
			
		if (val_field > 1) {
			$(this).parents('.box-field').addClass('focused-field');
		} else{
			$(this).parents('.box-field').removeClass('focused-field');
		};
	});
	/* forms */

	/*back*/
	$('.js-back').on('hover', function(){
		if($(this).is('.back__arrow_left')){
			$(this).parent().find('.back-right').removeClass('active');
			$(this).parent().find('.back-left').toggleClass('active');
		}else{
			$(this).parent().find('.back-left').removeClass('active');
			$(this).parent().find('.back-right').toggleClass('active');
		}
		return false;
	});
	/*back*/

	/*fancybox*/
	if($('.js-image').length){
		$(".js-image").fancybox();
	};
	/*fancybox*/

	/*datepicker*/
	if($('.datepicker').length){
	    $( ".datepicker" ).datepicker({
		  dateFormat: "dd.mm.yy"
		});
		$('.js-calendar').on('click', function(){
			$(this).parent().find('.datepicker').datepicker( "show" );
		});
	};
	/*datepicker*/

	/*mask*/
	if($('#tel').length){
	   $("#tel").mask("+9(999)999-99-99",{placeholder:"+_(___)___-__-__"});
	};
	/*mask*/
	
	/*up-button*/
	$('.js-up').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top}, 1000);
		e.preventDefault();
	});
	/*up-button*/

	/*error*/
	$('.js-error').on('click', function(){
		$(this).hide().parent().find('input').focus();
	});
	/*error*/

	/*menu*/
	$('.js-menu_link').mouseenter(function(){
    	$(this).parents('header').find('.menu__tab-cont').addClass('hide-tab');
    	$(this).parent().siblings().removeClass('active');
    	var id = $(this).attr('href');
    	$(id).removeClass('hide-tab');
    	$(this).parent().addClass('active');
	   return false;
	});
	$('.js-menu_link').mouseleave(function(){
		$(this).parent('.main-nav-list__item').removeClass('active');
	});
	  $(document).click(function(event) {
	    if ($(event.target).closest(".menu__tab-cont").length) return;
	    $(".menu__tab-cont").addClass('hide-tab');
	    event.stopPropagation();
	  });
	/*menu*/

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer, 'padding-top':height_header+20});
	
	var height_col = $('.col-inf_2').height();

	var viewport_wid = viewport().width;
	if (viewport_wid > 1200) {
		$('.col-inf_1, .col-inf_3').height(height_col);
	} else if (viewport_wid <= 1200 && viewport_wid > 640 ){
		$('.col-inf_1').height(height_col);
	}
	
	var widthNav = $('.main-nav-list').width();
	$('.search-form').width(widthNav-38);
	
	
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



