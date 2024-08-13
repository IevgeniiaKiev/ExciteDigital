$(document).ready(function(){

  $('.home-section').on('init', function(event, slick){
     $('.slick-active .content__heading').addClass('fadeInLeft content__heading--visible');
     $('.slick-active .content__heading--bottom').addClass('fadeInRight content__heading--visible');
     $('.slick-active .home-content__info').addClass('fadeInLeft home-content__info--visible');
     $('.slick-active .content__button').addClass('fadeInUp content__button--visible');
  });

  $('.home-section').slick({ //Home section slider
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.home-section').on('afterChange', function(event, slick, currentSlide){
     $('.slick-active .content__heading').addClass('fadeInLeft content__heading--visible');
     $('.slick-active .content__heading--bottom').addClass('fadeInRight content__heading--visible');
     $('.slick-active .home-content__info').addClass('fadeInLeft home-content__info--visible');
     $('.slick-active .home-content__text').addClass('fadeInLeft home-content__text--visible');
     $('.slick-active .content__button').addClass('fadeInUp content__button--visible');
});

  $('.home-section').on('beforeChange', function(event, slick, currentSlide){
     $('.slick-active .content__heading').removeClass('fadeInLeft content__heading--visible');
     $('.slick-active .content__heading--bottom').removeClass('fadeInRight content__heading--visible');
     $('.slick-active .home-content__info').removeClass('fadeInLeft home-content__info--visible');
     $('.slick-active .home-content__text').removeClass('fadeInLeft home-content__text--visible');
     $('.slick-active .content__button').removeClass('fadeInUp content__button--visible');
  });
  

  $('.about-slider').slick({ //About section slider
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    cssEase: 'ease-in'
  });

  $('.testimonials-slider').slick({ //Testimonials slider
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});
