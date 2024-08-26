$(function () {
    //첫번째
    var galleryThumbs = new Swiper(".gallery-thumbs01", {
      centeredSlides: false,
      centeredSlidesBounds: true, 
      direction: "horizontal",
      spaceBetween: 10,
      slidesPerView: 3,
     // freeMode: false,
     // watchSlidesVisibility: true,
      //watchSlidesProgress: true,
     // watchOverflow: true,
      breakpoints: {
        540: {
         // direction: "vertical",
          slidesPerView: 6,
          spaceBetween: 10,
        }
      }
    });
    var galleryTop = new Swiper(".gallery-top01", {
      direction: "horizontal",
      spaceBetween: 50,
      navigation: {
        nextEl: ".btn01.swiper-button-next",
        prevEl: ".btn01.swiper-button-prev"
      },
      a11y: {
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      },
      keyboard: {
        enabled: true,
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    //두번째
    var galleryThumbs = new Swiper(".gallery-thumbs02", {
        centeredSlides: false,
        centeredSlidesBounds: true, 
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
       // freeMode: false,
       // watchSlidesVisibility: true,
        //watchSlidesProgress: true,
       // watchOverflow: true,
        breakpoints: {
          540: {
           // direction: "vertical",
            slidesPerView: 6,
            spaceBetween: 10,
          }
        }
      });
      var galleryTop = new Swiper(".gallery-top02", {
        direction: "horizontal",
        spaceBetween: 50,
        navigation: {
          nextEl: ".btn02.swiper-button-next",
          prevEl: ".btn02.swiper-button-prev"
        },
        a11y: {
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        },
        keyboard: {
          enabled: true,
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
    //세번째
      var galleryThumbs = new Swiper(".gallery-thumbs03", {
        centeredSlides: false,
        centeredSlidesBounds: true, 
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
       // freeMode: false,
       // watchSlidesVisibility: true,
        //watchSlidesProgress: true,
       // watchOverflow: true,
        breakpoints: {
          540: {
           // direction: "vertical",
            slidesPerView: 6,
            spaceBetween: 10,
          }
        }
      });
      var galleryTop = new Swiper(".gallery-top03", {
        direction: "horizontal",
        spaceBetween: 50,
        navigation: {
          nextEl: ".btn03.swiper-button-next",
          prevEl: ".btn03.swiper-button-prev"
        },
        a11y: {
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        },
        keyboard: {
          enabled: true,
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
    galleryTop.on("slideChangeTransitionStart", function () {
      galleryThumbs.slideTo(galleryTop.activeIndex);
    });
    galleryThumbs.on("transitionStart", function () {
      galleryTop.slideTo(galleryThumbs.activeIndex);
    });


  });

$(document).ready(function() {
    $('.datail_show').click(function(e) {
        e.preventDefault();

        const content = $(this).closest('.detail_area').find('.drop');

        $('.drop').not(content).slideUp();

        content.slideToggle(400, function() {
            $('html, body').animate({
                scrollTop: $(this).closest('.detail_area').offset().top
            }, 400);
        });
    });
});