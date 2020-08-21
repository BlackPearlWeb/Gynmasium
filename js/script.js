$(function () {
    'use strict';

    //     Slick Slider Start [banner]

    $('#bannerPart').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });

    //     Slick Slider End

    // Veno Box Start

    $('.venobox').venobox();

    // Veno Box End

    //     Slick Slider Start [banner]

    $('.testimonialSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });

    //     Slick Slider End

    //     Counter Up Start

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    //     Counter Up End

    //    Client Slider Start

    $('.clientSlide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left clientParrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right clientNarrow"></i>'
    });

    //    Client Slider End
});
