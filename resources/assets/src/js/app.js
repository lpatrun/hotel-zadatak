$(document).ready(function(){
  $('.reviews__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<img class="next-arrow" src="images/arrow_next.png"/>',
    prevArrow: '<img class="back-arrow" src="images/arrow_back.png"/>',
    dots: true
  });
});

$(document).ready(function(){
  $('.news__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<img class="news-next-arrow" src="images/arrow_next.png"/>',
    prevArrow: '<img class="news-back-arrow" src="images/arrow_back.png"/>',
  });
});

$(document).ready(function(){
  $('.banner__carusel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<img class="main-arrow" src="images/arrow_back_white.png"/>',
    nextArrow: ''
  });
});