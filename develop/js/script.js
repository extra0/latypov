$(function(){

	// вызов фенсибокса
	$('.js-fancybox').fancybox();

	// показываем поиск в хедер
	$('.js-search-trigger').on('click', function(){
		$(this).toggleClass('active');
		$('.header__menu, .header__search-form').toggleClass('active');
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
	kblock = $('.index-preview__title-value'),
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
	});

});