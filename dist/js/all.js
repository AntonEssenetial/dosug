$(document).ready(function($) {
  // Mobile menu toggle function
  $('.toggle-menu').click(function(event) {
    $('.filters, .search__button-wrapper').removeClass('active');
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('active animated fadeIn');
  });
  $('.pseudo-dropdown_mobile .pseudo-dropdown__top').click(function(event) {
    $('.filters, .search__button-wrapper').removeClass('active');
    $('.main-menu').removeClass('active animated fadeIn');
    $('.toggle-menu').removeClass('active');
  });
  // Search toggle class 
  $('.search__button-wrapper').click(function(event) {
    $('.toggle-menu, .main-menu')
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.filters').addClass('active');
    }else {
      $('.filters').removeClass('active');
    }
  });
  // width detect 
  function widthDetect(){
    $('.pseudo-dropdown_mobile .pseudo-dropdown__list').css( 
      'width', $(window).width()
    );
  };
  widthDetect();
  $(window).resize(function(){
    widthDetect();
  });
  // close popup 
  $('.popup__close').click(function(event) {
    $('.b-popup-wrapper').removeClass('jsActive')
  });
  $('.header-login__item, .log__button').click(function(event) {
    $('.b-popup-wrapper').addClass('jsActive')
    return false
  });
});