
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

    var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('.header-navigation').toggleClass('active');
    $('body').toggleClass('overflow-hidden');  
    // Do something else, like open/close menu
  });

 //Toggle

//   $('.plan-toogles__container').on('click', function() {
//     $('.plan-toogles__container').removeClass('active-toggles');
//     $('.plan-toogles').toggleClass('active-toggles');
//     $(this).addClass('active-toggles');
//     var currentIndex = $(this).attr('data-index');
//     $('.plan-section').removeClass('active-section');
//     $('#'+currentIndex).addClass('active-section');
//   })

//   //Footer-accordion
    
//   $('.footer-content__header').on('click', function() {
//     $(this).toggleClass('active-footer');
// // открываем или скрываем блок под заголовком, по которому кликнули
//     $(this).next().slideToggle();
//     })
  
});


