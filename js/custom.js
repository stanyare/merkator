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
			autoplaySpeed: 5000,
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
		var $numberNews = $('.box-news .numbers-news');
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
	$('.anchor, .js-costing-button').click(function() {		
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
		return false;
	});
	/* scroll to screen */
	
	
	
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
		  slidesToScroll: 1,
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
			draggable: false,
			
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
		  dateFormat: "dd.mm.yy",
		  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		 firstDay: 1,
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

	/* partners slider */		
	if($('.js-partners-slider').length){
		$('.js-partners-slider').slick({
			infinite: false,
			dots: false,
			autoplay: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			draggable: false,
			responsive: [
			{
			  breakpoint: 641,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,		
			  }
			}]
		});
		
	};
	/* partners slider */	


	/*menu*/
		$(".js-menu_link").on('click', function(e){
			e.preventDefault();
			$(this).parent().siblings().removeClass('open-submenu');
			$(this).parent().toggleClass('open-submenu');
		});
		$(".js-menu_link1").on('click', function(e){
			e.preventDefault();
			$(this).parent().siblings().removeClass('open-submenu1');
			$(this).parent().toggleClass('open-submenu1');
		});
	/*menu*/

	/* subcategory see more*/
	$('.js-see-more').click(function(e){
		e.preventDefault();
		$('.subcategory__item_hide').toggleClass('show').slideToggle();
		if($('.subcategory__item_hide').is('.show')){
			$(this).text('свернуть');
		}else{
			$(this).text('показать ещё');
		}
	});
	/* subcategory see more*/
	/*see more text*/
	$('.js-see-more-text').click(function(e){
		e.preventDefault();
		$(this).closest('.subcategory__item').toggleClass('show').find('.text-hide').slideToggle();
		if($(this).closest('.subcategory__item').is('.show')){
			$(this).text('свернуть');
		}else{
			$(this).text('Подробнее');
		}
	});
	/*see more text*/

	/* product see more*/
	$('.js-more-prod').click(function(e){
		e.preventDefault();
		$('.tab-advantages__item_hide').toggleClass('show').slideToggle();
		if($('.tab-advantages__item_hide').is('.show')){
			$(this).text('свернуть');
		}else{
			$(this).text('Показать ещё оборудование');
		}
	});
	/* product see more*/
});

/*var viewport_wid = viewport().width;*/





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
	};
	
	var widthNav = $('.main-nav-list').width();
	$('.search-form').width(widthNav-38);
	
	/*menu*/
	if (viewport_wid >= 992) {
		$('.box-submenu').css({'width': viewport_wid});
		$('.main-nav-list__item').mouseenter(function(){
			/*$('header').find('.wrapper').addClass('opened');*/
	    	$(this).siblings().removeClass('active');
	    	$(this).addClass('active');
	    	$('.overlay').show();
		   return false;
		});
		$('.main-nav-list__item').mouseleave(function(){
			/*$('header').find('.wrapper').removeClass('opened');*/

		});
		$('.box-submenu').mouseleave(function(){
			$(this).parent().removeClass('active');
			$('.overlay').hide();
		});
	    $(document).click(function(event) {
		    if ($(event.target).closest(".box-submenu").length) return;
		    $(".box-submenu").parent().removeClass('active');
		    $('.overlay').hide();
		    event.stopPropagation();
		});
	}else{
		$('.main-nav-list__item').unbind('mouseenter');
		$(".main-nav ul li").each(function(){    
		    var offsetLeft = $(this).offset().left;     
		    $(this).find('.box-submenu').css({'left': -offsetLeft, 'width': viewport_wid});
		});
		$(".button-nav").on('click', function(){
			$('.overlay').toggle();
		});
	};
	/*menu*/

	/* tab slider */
	var $slickTab = $('.js-tab-list');
	if (viewport_wid <= 1080) {
		if($($slickTab).length){		
			$slickTab.not('.slick-initialized').slick({
				infinite: true,
				dots: false,
				autoplay: false,
				autoplaySpeed: 5000,
				speed: 400,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				pauseOnHover:false				
			});
		};
		/* tab slider */
	}else{
		/* tab slider */		
		if($($slickTab).length){
			$slickTab.slick('unslick');
		};
		/* tab slider */
	};
	
	if (viewport_wid <= 640) {

		/* advantages slider */
		if($('.js-advantages-tab').length){
			var $numberAdv = $('.advantages-num .numbers-news');
			var $slickAdv = $('.js-advantages-tab');

			$slickAdv.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				$numberAdv.text(i + ' / ' + slick.slideCount);
			});

			$slickAdv.not('.slick-initialized').slick({
				infinite: true,
				dots: false,
				autoplay: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				draggable: false
			});
		};
		/* advantages slider */

		/* category slider */
		if($('.js-category').length){
			var $numberCategory = $('.js-numbers-category');
			var $slickCategory = $('.js-category');

				$slickCategory.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
					//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
					var i = (currentSlide ? currentSlide : 0) + 1;
					$numberCategory.text(i + ' / ' + slick.slideCount);
				});
			
			$slickCategory.not('.slick-initialized').slick({
			    infinite: true,
				dots: false,
				autoplay: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				draggable: false
			});
		};
		/* category slider */

		/* subcategory slider */
		if($('.js-subcategory').length){
			var $numberSub = $('.number-slide-subcategory .numbers-news');
			var $slickSub = $('.js-subcategory');

			$slickSub.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				var i = (currentSlide ? currentSlide : 0) + 1;
				$numberSub.text(i + ' / ' + slick.slideCount);
			});

			$slickSub.not('.slick-initialized').slick({
				infinite: true,
				dots: false,
				autoplay: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				draggable: false
			});
		};
		/* subcategory slider */		
	}else{
		$('.js-advantages-tab, .js-category, .js-subcategory').slick('unslick');
	};
	

	if (viewport_wid <= 767) {
		$('.box-field__input').focus(function(){
			$(this).parent().find('.show_767').hide();
		});
		$('.box-field__input').blur(function(){
			$(this).parent().find('.show_767').show();
		});
	}
	
	
	if (viewport_wid > 450) {
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
	}
		
};
$(window).bind('load', handler);
$(window).bind('resize', handler);



