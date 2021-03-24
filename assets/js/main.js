$(document).ready(function () {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
          },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            575:{
                slidesPerView: 2,
                spaceBetween: 16,
            },
            767: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
        }
        
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
});