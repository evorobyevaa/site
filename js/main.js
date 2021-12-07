$(function(){
  $('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-l.svg" alt="arrow">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-r.svg" alt="arrow">'
  });

  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('active');
  })
});