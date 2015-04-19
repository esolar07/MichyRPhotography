// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
    //Foundation Initializer
$(document).foundation();
  
    // Slick Initializer
 $(document).ready(function(){
    $('.autoplay').slick({
        centerMode: true,
        centerPadding: '60px',
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
 });