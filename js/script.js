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
        items: 4,
       
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })

    $('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }


    });
});

