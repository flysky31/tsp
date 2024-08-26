//메인프로덕트

    var galleryThumbs = new Swiper(".gallery-thumbs", {
      centeredSlides: false,
      centeredSlidesBounds: true, 
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 2,
     // freeMode: false,
     // watchSlidesVisibility: true,
      //watchSlidesProgress: true,
     // watchOverflow: true,
      breakpoints: {
        900: {
         // direction: "vertical",
          slidesPerView: 2.5,
          //spaceBetween: 10,
        },
        540: {
          // direction: "vertical",
           slidesPerView: 3,
           //spaceBetween: 10,
         }
      }
    });
    var galleryTop = new Swiper(".gallery-top", {
      direction: "horizontal",
      spaceBetween: 50,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: "progressbar",
      },
      /*
       pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        type: 'bullets',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
          },
    
    },*/
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


    

    $(document).ready(function () {
      $(".tab").click(function () {
          // 클릭한 탭의 데이터 속성 값 가져오기
          var tabId = $(this).data("tab");
  
          // 모든 탭과 탭 내용의 활성 클래스 제거
          $(".tab, .tab-content").removeClass("on");
  
          // 클릭한 탭과 해당 탭 내용에 활성 클래스 추가
          $(this).addClass("on");
          $("#" + tabId).addClass("on");
      });
  
      // 초기에 첫 번째 탭과 해당 탭 내용에 활성 클래스 추가
      $(".tab:first").addClass("on");
      $(".tab-content:first").addClass("on");
  });