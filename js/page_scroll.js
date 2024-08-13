$(document).ready(function() {

  $('.header__nav__link').on('click', function() {

   var scrollAnchor = $(this).attr('data-scroll'),
       scrollPoint = $('.section[data-anchor="' + scrollAnchor + '"]').offset().top - 102;
       $(this).addClass('header__nav__link--current');

   $('body,html').animate({
       scrollTop: scrollPoint
   }, 1000);

   return false;

});

$(window).scroll(function() {
   var windscroll = $(window).scrollTop();
   if (windscroll >= 0) {
       $('.section').each(function(i) {
           if ($(this).position().top <= windscroll + 103) {
               $('.header__nav__link').removeClass('header__nav__link--current');
               $('.header__nav__link').eq(i).addClass('header__nav__link--current');
           }
       });
   } else {
       $('.header__nav__link').removeClass('header__nav__link--current');
       $('.header__nav__link:first').addClass('header__nav__link--current');
   }

}).scroll();


$('.side__nav__link').on('click', function() {

 var scrollAnchor = $(this).attr('data-scroll'),
     scrollPoint = $('.section[data-anchor="' + scrollAnchor + '"]').offset().top - 102;
     $(this).addClass('side__nav__link--active');

 $('body,html').animate({
     scrollTop: scrollPoint
 }, 1000);

 return false;

});

$(window).scroll(function() {
 var windscroll = $(window).scrollTop();
 if (windscroll >= 0) {
     $('.section').each(function(i) {
         if ($(this).position().top <= windscroll + 103) {
             $('.side__nav__link').removeClass('side__nav__link--active');
             $('.side__nav__link').eq(i).addClass('side__nav__link--active');
             $('.side__nav__name').removeClass('side__nav__name--active');
             $('.side__nav__name').eq(i).addClass('side__nav__name--active');
         }
     });
 } else {
     $('.side__nav__link').removeClass('header__nav__link--current');
     $('.side__nav__link:first').addClass('header__nav__link--current');
     $('.side__nav__name').removeClass('side__nav__name--active');
     $('.side__nav__name:first').addClass('side__nav__name--active');
 }

}).scroll();
});
