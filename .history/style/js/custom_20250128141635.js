
$(document).ready(function() {
$('.slider').slick({
// dots: true,             // Enable navigation dots
infinite: true,         // Infinite loop
speed: 500,             // Transition speed
slidesToShow: 6,        // Number of slides to show
slidesToScroll: 1,      // Number of slides to scroll
autoplay: true,         // Enable autoplay
autoplaySpeed: 1000,    // Autoplay speed
arrows: false            // Enable navigation arrows
centerMode: true,
centerPadding: '60px',
});
});


$(document).ready(function() {
    $('.testimonial').slick({
    dots: true,             // Enable navigation dots
    infinite: true,         // Infinite loop
    speed: 500,             // Transition speed
    slidesToShow: 1,        // Number of slides to show
    slidesToScroll: 1,      // Number of slides to scroll
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000,    // Autoplay speed
    arrows: true  ,         // Enable navigation arrows
   
    });
    });