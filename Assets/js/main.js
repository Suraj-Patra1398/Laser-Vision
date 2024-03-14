
// Logo slider 
$(document).ready(function(){
    $('.slider_logo').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });


 $(document).ready(function(){

  // hamburger menu for mobile devices 
$('.hamburger_menu').click(function(){
  $('body').toggleClass('show_menu')
});

// mobile icons for mobile devices
$(window).scroll(function(){
  if($(this).scrollTop() > 250) {
    $('.mobile_icons').fadeIn();
  } else {
    $('.mobile_icons').fadeOut();

  }
});

// active class link for pages in navbar
$('.menu li a').click(function(){
  $('.menu li a').removeClass('active_link');
  $(this).addClass('active_link');
    
});

// top_to_scroll button



});


$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 500) {
      $('.top_to_scroll').fadeIn();
    } else {
      $('.top_to_scroll').fadeOut();
  
    }
    // $('.top_to_scroll').click(function(){
    //   $('html ,body').animate({scrollTop: 0} , 1000);
    // });

  //   $(window).scroll(function(){
  //     if($(this).scrollTop() > 350) {
  //       $('header').addClass('show_header');
  //     } else {
  //       $('header').removeClass('show_header');
    
  //     }
  // });
});
});


