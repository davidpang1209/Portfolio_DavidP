$(window).on('load', function() {
    $('.loader .inner').fadeOut(1000, function () {
        $('.loader').fadeOut(800);
    });
    
    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

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

    $('#navigation li a').click(function (e) {
        e.preventDefault();

        const targetElement = $(this).attr('href');
        const targetPosition = $(targetElement).offset().top;
        $('html, body').animate({ scrollTop : targetPosition - 50}, 'slow');
    });

    const nav = $ ('#navigation');
    const navTop = nav.offset().top;
    $(window).on('scroll', stickyNavigation);
    function stickyNavigation () {
        const body = $('body');
        if ($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px')
            body.addClass('fixedNav');
        }
        else {
            body.css('padding-top', 0)

            body.removeClass('fixedNav');
        }
    }
 
});
 
