$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		
	};
	$('body').removeClass('loaded'); 	
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

		$slickMain.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			var i = (currentSlide ? currentSlide : 0) + 1;
			$numberMain.text(i + '/' + slick.slideCount);
		});
	
		$slickMain.slick({
			infinite: true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			pauseOnHover:false,
		});
		
	};
	/* main slider */	
	
	/* news slider */	
	if($('.js-news').length){
		var $numberNews = $('.numbers-news');
		var $slickNews = $('.js-news');

		var viewport_wid = viewport().width;
			
		if (viewport_wid > 1000) {
			$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 3;
				$numberNews.text(i + ' / ' + slick.slideCount);
			});
		}
		if (viewport_wid <= 1000 & viewport_wid > 650) {
			$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 2;
				$numberNews.text(i + ' / ' + slick.slideCount);
			});
		} else{
			if(viewport_wid <= 650){
				$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 1;
					$numberNews.text(i + ' / ' + slick.slideCount);
				});
			}
		};
		
		var handlerNewsSlider = function(){
	
			var viewport_wid = viewport().width;
			
			if (viewport_wid > 1000) {
				$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 3;
					$numberNews.text(i + ' / ' + slick.slideCount);
				});
			}
			if (viewport_wid <= 1000 & viewport_wid > 650) {
				$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 2;
					$numberNews.text(i + ' / ' + slick.slideCount);
				});
			} else{
				if(viewport_wid <= 650){
					$slickNews.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
						//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
						var i = (currentSlide ? currentSlide : 0) + 1;
						$numberNews.text(i + ' / ' + slick.slideCount);
					});
				}
			}

		}
		$(window).bind('load', handlerNewsSlider);
		$(window).bind('resize', handlerNewsSlider);
		
		$slickNews.slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
			{
			  breakpoint: 1000,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2				
			  }
			},
			{
			  breakpoint: 650,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1				
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
	
	/* icon-service-5 */
	$(".js-servise-5").hover(
		function() {
			$(".anim-block__img_1").addClass("bounceInLeft");
			$(".anim-block__img_2").addClass("bounceInRight");
			$(".anim-block__img_3").addClass("flipInY");
			$(".anim-block__img_4").addClass("heightDown");
			$(".circle_1").addClass("animrotate");
			$(".circle_2").addClass("animrotate");
			$(".circle_3").addClass("animrotate");
		},
		function() {
			$(".anim-block__img_1").removeClass("bounceInLeft");
			$(".anim-block__img_2").removeClass("bounceInRight");
			$(".anim-block__img_3").removeClass("flipInY");
			$(".anim-block__img_4").removeClass("heightDown");
			$(".circle_1").removeClass("animrotate");
			$(".circle_2").removeClass("animrotate");
			$(".circle_3").removeClass("animrotate");
		}
	);
	/* icon-service-5 */
	
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

	/*aside*/
	$('.js-item').on('click', function(){
		$(this).find('.js-sub-list').slideToggle();
	});
	/* product slider */	
	if($('.js-product').length){
		$('.js-product').slick({
		  /*appendArrows: $(".slick-arrow-wrap"),*/
		  prevArrow: '<div class="slick-arrow-wrap"><button type="button" class="slick-prev">Previous</button></div>',
		  dots: false,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 1,
		  slidesToScroll: 1

		});
	};

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer, 'padding-top':height_header+20});
	
	var height_col = $('.col-inf_2').height();
	$('.col-inf_1, .col-inf_3').height(height_col);
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



