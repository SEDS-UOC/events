$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 0,
            nav: true
        },
        600: {
            items: 0,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})