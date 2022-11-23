AOS.init();

var $jq = jQuery.noConflict();
$jq(document).ready(function() {

  //========Cities slider index page====
  $jq('.cities-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true
  });

  //  =====menu======

  $jq(window).on('scroll', function() {
    if ($jq(document).scrollTop() > 100) {
      $jq('#masthead').addClass('back')
    } else {
      $jq('#masthead').removeClass('back')
    };
  });


  // scrollTop
  $jq(window).on('scroll', function() {
    console.log('scroll')
    if ($jq(this).scrollTop() > 600) {
      $jq('#scroll').fadeIn();
    } else {
      $jq('#scroll').fadeOut();
    }
  });
  $jq('#scroll').click(function() {
    $jq("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  //====testi-slider=====

  $jq('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    dots: true,
    asNavFor: '.your-class-two'
  });
  $jq('.your-class-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    asNavFor: '.your-class',
    focusOnSelect: true
  });

});
