$(function () {

    $('.fairy-tail__slider, .our-trip__slider').slick({

        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
        
    });

});

$('[data-fancybox="images"]').fancybox({
    afterLoad : function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});
$('[data-fancybox]').fancybox({
	protect: true
});