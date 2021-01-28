$(document).ready(function() {

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
        autoplay: true
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
        autoplay: true
    });

});
