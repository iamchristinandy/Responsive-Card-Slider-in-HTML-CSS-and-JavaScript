const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
        // when window width is >= 768px but <1024px
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is <= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});
