$(function(){

	$('.slider__inner, .news__slider-inner').slick(
	{
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  // (из slick документации) класс slick-btn добавили сами
    infinite: false
    // убирает бесконечную прокрутку слайдов, и теперь у кнопок 
    //появлятся класс slick-disabled 

	}
	);




$('select').styler(); //применяется тольк к эл-ту селект

$('.header__btn-menu').on('click',function(){

  $('.menu ul').slideToggle();

});

});