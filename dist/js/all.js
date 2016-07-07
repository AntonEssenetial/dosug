
$(document).ready(function($) {
  // Mobile menu toggle function
  $('.toggle-menu').click(function(event) {
    $('.page__filters, .search__button-wrapper').removeClass('active');
    $(this).toggleClass('active');
    $('.main-menu').toggleClass('active animated fadeIn');
  });
  $('.button__sub').click(function(event) {
    $('.button__sub').toggleClass('active')
    $('.catalog-header__tabs').toggleClass('active')
  });
  $('.pseudo-dropdown_mobile .pseudo-dropdown__top').click(function(event) {
    $('.page__filters, .search__button-wrapper').removeClass('active');
    $('.main-menu').removeClass('active animated fadeIn');
    $('.toggle-menu').removeClass('active');
  });
  // Search toggle class 
  $('.search__button-wrapper').click(function(event) {
    $('.toggle-menu, .main-menu').removeClass('active');
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.page__filters').addClass('active');
    }else {
      $('.page__filters').removeClass('active');
    }
  });
  if($('.page__filters').hasClass('active')) {
    $('.search__button-wrapper').addClass('active')
  }
  // width detect 
  function widthDetect(){
    $('.pseudo-dropdown_mobile .pseudo-dropdown__list').css( 
      'width', $(window).width()
    );
  };
  function heightDetect(){
    $('.pseudo-dropdown_mobile .pseudo-dropdown__list, .pseudo-dropdown_mobile .pseudo-dropdown-list').css( 
      'height', $(window).height()
    );
  };
  widthDetect();
  heightDetect();
  $(window).resize(function(){
    widthDetect();
    heightDetect();
  });
  // close popup 
  $('.b-popup-wrapper').mouseup(function (e) {
    var container = $(".b-popup-wrapper");
    if (container.has(e.target).length === 0){
        container.removeClass('jsActive')();
    }
  });
  $('.popup__close').click(function(event) {
    $('.b-popup-wrapper').removeClass('jsActive')
  });
  $('.header-login__item, .log__button').click(function(event) {
    $('.b-popup-wrapper').addClass('jsActive')
    return false
  });

  // acordion 
  $(".acord").navgoco({accordion: true});
  // Filter toggle
  $('.filters__global-hide-button').click(function(event) {
    $('.page__filters').toggleClass('active')
    $('.search__button-wrapper').toggleClass('active');
    return false;
  });
});