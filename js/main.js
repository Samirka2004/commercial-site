$(function () {
   $('.top__slider').slick({
      dots: true,
      arrows: false,
      autoplay: true,
      fade: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               dots: false,
            }
         },
      ],
   });
   $('.reviews__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1141,
            settings: {
            slidesToShow: 3,
            }
         },
         {
            breakpoint: 846,
            settings: {
               slidesToShow:2,
            },
         },
         {
            breakpoint: 585,
            settings: {
               slidesToShow:1,
            },
         },
      ]
   })
});


$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu__list').toggleClass('active');
   });
});
