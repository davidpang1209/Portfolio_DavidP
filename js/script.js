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

    var skillsOffset =$('.skillsSection').offset().top;
    // console.log(skillsOffset) 
    console.log(window.pageYOffset)
    $(window).scroll(function() {

        if (window.pageYOffset > skillsOffset -$(window).height() + 200  ) {

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
        }
    });
   
    $('[data-fancybox]').fancybox();

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $('#filters a').click(function() {
        $('#filters .current').removeClass ('current');
        $(this).addClass('current');
        
        var selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
            return false;
    })
});

