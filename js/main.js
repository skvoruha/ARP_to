$(document).ready(function () {

  var navbarLink = $(".header") // присваиваем элемент
  var home = $(".home__after") // белый для меню при наведении
  navbarLink.on("mouseover", function () {
    home.addClass('home__after--fone');

  });
  //НАВЕДЕНИИ  МЫШИ ДЛЯ БЕЛГОО ФОНА
  navbarLink.on("mouseout", function () {
    home.removeClass('home__after--fone');
  });
  // ниже код длявыпадающего меню
    $('.navbar__link').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(300);
    }, this), 10));
  });
  //  скролл вниз
  	$('.design__arrow').click(function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
		return false;
	});



  var priceBtn = $('.price__btn'); // записываем в переменую кнопку расссчитать
  priceBtn.on("click", function () {
    var service = $('#service option:selected').html() // записываем в переменуую выбор услуги
    var style = $('#style option:selected').html() // записываем в переменуую выбор стиля
    var level = $('#level option:selected').html() // записываем в переменуую выбор уровень проработки

    var valService = 1; // переменная для услуг (коффициент)
    var valStyle = 1; // переменная для стилей (коффициент)
    var valLevel = 1; // переменная для уровня проработки (коффициент)

    var area = 0 // Переменая площади объекта
    switch(service){
      case('Макет'):
        valService = 10;
        break;
      case('Дизайн'):
        valService = 5;
         break;
    }


    switch(style){
      case('Авангард'):
        valStyle = 1;
        break;
      case('Английский стиль'):
        valStyle = 2;
         break;
      case('Античный стиль'):
        valStyle = 3;
         break;
      case('Арабский стиль'):
        valStyle = 4;
         break;
      case('Арт-нуво'):
        valStyle = 5;
         break;
      case('Арт-деко'):
        valStyle = 6;
         break;
      case('Барокко'):
        valStyle = 7;
         break;
    }


    switch(level){
      case('профессиональный'):
        valLevel = 10;
        break;
      case('любительский'):
        valLevel = 5;
         break;
      case('новичок'):
        valLevel = 2;
         break;
    }
    area = $('#area').val()

    sumPrice = valService * valStyle * valLevel *area;
    sumPriceDollar = sumPrice/80;
    $(".price__modal--ten").text(sumPrice); // записываем переменну в модальное окно
    $(".price__modal--dol").text(sumPriceDollar);

  });

  var modal = $('.btn__modal'); //сюда всавим класс к элементам где есть модалное окно
  var modalClose = $('.modal__close') // присваимвае элемент закрытии модального онка

  modal.on("click", function () {
    $('body').addClass('modal__open');
    $('.modal').addClass('modal__public');
  });
  modalClose.on("click", function () {
    $('body').removeClass('modal__open');
    $('.modal').removeClass('modal__public');
  });

  // иницилизвция слайдера

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.partners__arrow--right',
    prevEl: '.partners__arrow--left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
});

