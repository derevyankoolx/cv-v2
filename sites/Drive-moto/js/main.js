$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.slick-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
    });

    $(function () {
        $('.product-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow"></button>',
            nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow"></button>',
            responsive: [
                {
                    breakpoint: 1301,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 1101,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 590,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });




    (function ($) {
        $(function () {
            $('.filter-style').styler();
        });
    })(jQuery);

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });



    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-yo").rateYo({
        normalFill: "#c4c4c4",
        ratedFill: "#1c62cd",
        spacing: "7px"
    });


    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });


    $('.footer__top-drop').on('click', function (){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__top-drop--active');
    });

    $('.aside__btn').on('click', function (){
        $(this).next().slideToggle();
    });

});

