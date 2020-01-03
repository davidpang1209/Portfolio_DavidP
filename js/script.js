$(document).ready(function(){ //jquery

    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typedJS = new Typed(".typedJS",  {
        strings: ['Software Engineer.', 'Web Developer.', 'Student.'],
        typeSpeed: 70,
        loop: true,
        startDelay: 900,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

});