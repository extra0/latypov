$(function(){

	// вызов фенсибокса
	$('.js-fancybox').fancybox();

	// показываем поиск в хедер
	$('.header__search-trigger').on('click', function(){
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
	// var k = 1;
	// kblock = $('.index-preview__title-value'),
	// 	knum = kblock.length;
	// setInterval(function() {
	// 	if (k < knum) {
	// 		kblock.eq(k - 1).removeClass('active');
	// 		kblock.eq(k).toggleClass('active');
	// 		kblock.eq(k).css('left', 0);
	// 		kblock.eq(k - 1).css('left', (Math.random() * -200));
	// 		k++;
	// 	} else {
	// 		k = 1;
	// 		kblock.eq(0).addClass('active');
	// 		kblock.eq(-1).removeClass('active');
	// 		kblock.eq(-1).css('left', 0);
	// 		kblock.eq(0).css('left', 0);
	// 	}
	// }, 1500);

});