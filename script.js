const swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor:true,
    spaceBetween: 30,
  
    // If we need pagination
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
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 1024px
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});
