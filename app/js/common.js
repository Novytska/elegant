
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

//   var button = $('.header-content__scroll');		 
// $button.on('click', function(){
// $('body, html').animate({
// scrollTop:$(document).height()}, 800;
// });


  // Footer-accordion

  $('.footer-content__item-title').on('click', function() {
    $(this).toggleClass('active-footer').next().slideToggle();
	// открываем или скрываем блок под заголовком, по которому кликнули
    $('.footer-content__item-title').not(this).removeClass('active-footer').next().slideUp();
    })

//   $('footer-content__item-title').on('click', function() {
// //скрываем все кроме того, что должны открыть
//   $('footer-content__item-info').not($(this).next()).slideUp(1000);
// // открываем или скрываем блок под заголовком, по которому кликнули
//     $(this).next().slideToggle(2000);
// })
 
});


