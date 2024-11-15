$(document).ready(function () {
    
    $('.accordion').click(function () {
        let faqIt = $(this);
        faqIt.toggleClass('active');
        faqIt.find('+.panel').slideToggle(200);
    });
    
    $("nav a, .scroll").click(function (e) {
        e.preventDefault();
        if ($('.nav-control').hasClass('op')) {
            $('.nav-control').removeClass('op');
            $('.top-panel nav').slideUp();
        }
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 100
        }, 800);
    });
    
    $('.nav-control').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('op')) {
            $(this).addClass('op');
            $('.top-panel nav').slideDown();
        } else {
            $(this).removeClass('op');
            $('.top-panel nav').slideUp();
        }
    });


    $('#mono').click(function(e) {
        e.preventDefault();
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($('#copytext1').text()).select();
        document.execCommand("copy");
        $tmp.remove();
        alert('Номер карти скопійовано');
    })

    $('.slider_slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
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

    $('.reviews__items').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
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
                breakpoint: 574,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
      }
    ]
    });
});