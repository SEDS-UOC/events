const swiper = new Swiper('.swiper', {
    // Optional parameters
 

    effect:'cards',
    
    shadow: false,

    centeredSlides: true,
    centeredSlidesBounds: true,

    grabCursor: true,
    longSwipes:false,

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 1000,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    mousewheel: {
        invert: true,
    },
    


  });