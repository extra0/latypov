$(function(){

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	// меню на мобильных
	$('.has-dropdown').on('click', function(){
		if (isMobile.any() && !$(this).hasClass('active')) {
			$('.has-dropdown').removeClass('active');
			$(this).addClass('active');
			return false;
		}
	});

	// вызов фенсибокса
	$('.js-fancybox').fancybox();

	// показываем поиск в хедер
	$('.js-search-trigger').on('click', function(){
		$(this).toggleClass('active');
		$('.header__menu, .header__search-form').toggleClass('active');
	});

	$(document).mouseup(function(e) {
		if ($('#order').has(e.target).length === 0 && $('.js-order-trigger')) {
			if ($('#order').hasClass('active')) {
				$('#order').removeClass('active');	
			}
		}
	});

	// работа с якорями
	$('.js-anchor').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

	// обработка плейсхолдеров
	$('.form-control').keyup(function() {
		if ($(this).val().length >= 1) {
			$(this).next().addClass('active');
		} else {
			$(this).next().removeClass('active');
		}
	});

	// маска на телефон
	$('input[type="tel"]').mask('+7 (999) 999-99-99');


	// чередуем замену заголовков вопросов
	var k = 1;
	kblock = $('.index-preview__title-value, .news__sidebar-animate-version-img'),
		knum = kblock.length;
	setInterval(function() {
		if (k < knum) {
			kblock.eq(k - 1).removeClass('active');
			kblock.eq(k).toggleClass('active');
			k++;
		} else {
			k = 1;
			kblock.eq(0).addClass('active');
			kblock.eq(-1).removeClass('active');
		}
	}, 2500);

	// проверяем отмечен ли чекбокс соглашения
	$('.js-politicks-checkbox').on('change', function(){
		if ($(this).is(":checked")) {
			$(this).parents('form').find('[type="submit"]').prop('disabled', false);
		} else {
			$(this).parents('form').find('[type="submit"]').prop('disabled', true);
		}
	});

	// показываем попап заявки
	$('.js-order-trigger').on('click', function(){
		$('#order').toggleClass('active');
	});

	// показываем работы при доскроле до них
	$(window).on("scroll load resize", function(){
		$('.flex-section__block').each(function(){

		    var w_top = $(window).scrollTop(),    // Количество пикселей на которое была прокручена страница
		    	e_top = $(this).offset().top,     // Расстояние от блока со счетчиками до верха всего документа
		    	w_height = $(window).height(),    // Высота окна браузера
		    	d_height = $(document).height(),  // Высота всего документа
		    	e_height = $(this).outerHeight(); // Полная высота блока со счетчиками
	
		    if(w_top + ($(window).height() - $(window).height() * 0.1) >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
				$(this).addClass('active');
		    }
	    });

		// анимируем ракету
	    if ($('.news__sidebar-animate').length == 1) {

	    	var w_top = $(window).scrollTop(),   
	    		e_top = $('.news__sidebar-animate').offset().top,    
	    		w_height = $(window).height(),   
	    		d_height = $(document).height(), 
	    		e_height = $('.news__sidebar-animate').outerHeight();

    	    if(w_top + ($(window).height() - $(window).height() * 0.1) >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
    			$('.news__sidebar-animate').addClass('active');
    	    }
	    }
	});

	// показываем форму в портфолио
	$('.js-form-trigger').on('click', function(){
		$('.form-section__block-hidden').slideToggle(200);
	});


	// запуск пересчета цифр
	$("[spincrement]").spincrement({
		from: 0,
	    duration: 5000,
	    thousandSeparator: ''
	});

	// активируем второстепенное меню
	$('.js-trigger').on('click', function(){
		$(''+ $(this).attr('data-target') +'').slideToggle(500);
		$(this).toggleClass('active');
	});

	// активируем главное меню на мобле
	$('.header__menu-btn').on('click', function(){
		$('.main-wrapper, .fixed-content').addClass('active');
		$('.footer').addClass('hide');
	});


	// деактивируем главное меню на мобле
	$('.fixed-content__close').on('click', function(){
		$('.main-wrapper, .fixed-content').removeClass('active');
		$('.footer').removeClass('hide');
	});

	// fixcontent seacrh trigger
	$('.fixed-content__search-trigger').on('click', function() {
		$(this).toggleClass('active');
		$('.fixed-content__search-form').toggleClass('active');
	})

	// collapse 
	$('[data-collapse]').on('click', function(){
		$(''+ $(this).attr('data-collapse')+'').toggleClass('active');
	});

});