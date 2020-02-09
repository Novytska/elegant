
$(document).ready(function(){

// $('.customers-slider').slick({
//   centerMode: true,
//   infinite: true,
//   centerPadding: '20px',
//   slidesToShow: 3,
//   speed: 500,
//   variableWidth: false,
//   arrows: true,
//   prevArrow: $('.prev'),
//   nextArrow: $('.next'),
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 540,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
        


// Navigation

  $(".hamburger").on("click", function(e) {
    $(this).toggleClass("is-active");
    $('.header-navigation').toggleClass('active');
    $('body').toggleClass('overflow-hidden');  
    // Do something else, like open/close menu
  });

//   var button = $('.header-content__scroll');		 
// $button.on('click', function(){
// $('body, html').animate({
// scrollTop:$(document).height()}, 800;
// });


  // Footer-accordion

  $('.js-accordion-title').on('click', function() {
    var parentItem = $(this).closest('.js-accordion-parent'),
        parentWrap = $(this).closest('.js-accordion');
    if($(this).is('.js-active-title')) {
      parentWrap.find('.js-accordion-title').removeClass('js-active-title');
      parentItem.find('.js-accordion-container').slideUp();
      $(this).removeClass('js-active-title');
    } else {
      parentWrap.find('.js-accordion-title').removeClass('js-active-title');
      parentWrap.find('.js-accordion-container').slideUp();
      parentItem.find('.js-accordion-container').slideDown();
      $(this).addClass('js-active-title');
    }
  })
});


