$(document).ready(function() {


    // sliders

    $('.main-screen__slider').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });

    $('.product__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="prev"><i class="fas fa-caret-left"></i></button>',
                    nextArrow: '<button class="next"><i class="fas fa-caret-right"></i></button>'
                }
            },
        ]
    });

    $('.recipes__slider').slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        prevArrow: '<button class="prev"><i class="fas fa-caret-left"></i></button>',
        nextArrow: '<button class="next"><i class="fas fa-caret-right"></i></button>'
    });

    $('.find__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });





    // menu-link

    $(".menu-link").click(function () {
        $('.menu-link').toggleClass("active");
        $('.main-menu').toggleClass("active");
    });

});
