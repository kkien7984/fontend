$('.product_slider_wrapper .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    responsiveClass: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        }
    }
})
$('.shop_slider_wrapper .owl-carousel').owlCarousel({
    loop: false,
    margin: 7,
    dots:false,
    lazyLoad: true,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false
        }
    }
})