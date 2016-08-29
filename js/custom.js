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
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	/* mobile nav */
	
	/* main slider */	
	if($('.js-slider').length){
		$('.js-slider').slick({
			infinite: true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			pauseOnHover:false
		});
	};
	/* main slider */	
	
	/* news slider */	
	if($('.js-news').length){
		$('.js-news').slick({
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
				slidesToScroll: 2,						
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}	
		  ]
		});
	};
	var slick_news=$('.js-news');
  	$('.numbers-news').html(slick_news.slick("getSlick").currentSlide +' / ' + slick_news.slick("getSlick").slideCount);	
	/* news slider */

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



