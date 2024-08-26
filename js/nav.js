$(function () {
 //logoslide
  
    $(window).on('load', function() {
        setFlowBanner();
    })

    function setFlowBanner() {
        const $wrap = $('.flow_banner');
        const $list = $('.flow_banner .list');
        let wrapWidth = ''; //$wrap의 가로 크기
        let listWidth = ''; //$list의 가로 크기
        const speed = 150; //1초에 몇픽셀 이동하는지 설정

        //리스트 복제
        let $clone = $list.clone();
        $wrap.append($clone);
        flowBannerAct()

        //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
        let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        $(window).on('resize', function() {
            let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                flowBannerAct();
            }
        });

        //배너 실행 함수
        function flowBannerAct() {
            //배너 롤링 초기화
            if (wrapWidth != '') {
                $wrap.find('.list').css({
                    'animation': 'none'
                });
                $wrap.find('.list').slice(2).remove();
            }
            wrapWidth = $wrap.width();
            listWidth = $list.width();

            //무한 반복을 위해 리스트를 복제 후 배너에 추가
            if (listWidth < wrapWidth) {
                const listCount = Math.ceil(wrapWidth * 2 / listWidth);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }
            $wrap.find('.list').css({
                'animation': `${listWidth / speed}s linear infinite flowRolling`
            });
        }

        // 마우스가 요소 위로 진입했을 때 일시정지
        $wrap.on('mouseenter', function () {
            $wrap.find('.list').css('animation-play-state', 'paused');
        });

        // 마우스가 요소에서 빠져나갈 때 재생
        $wrap.on('mouseleave', function () {
            $wrap.find('.list').css('animation-play-state', 'running');
        });
    }
});



$(document).ready(function() {
     $(window).scroll(function(){
       // 현재 스크롤 위치를 가져옵니다.
       var scrollPosition = $(window).scrollTop();
  
       // 스크롤 위치가 50px 이상이면 클래스를 추가하고, 그렇지 않으면 제거합니다.
       if(scrollPosition >= 50){
         $('body').addClass('scrolled');
       } else {
         $('body').removeClass('scrolled');
       }
     });
 });




 $(document).ready(function() {
  var aside = $('aside');
  var footer = $('footer');

  function updateAsidePosition() {
    var scrollPosition = $(window).scrollTop();
    var footerPosition = footer.offset().top - $(window).height();
    var windowWidth = $(window).width();

    if (windowWidth >= 1024) {
      // 브라우저 너비가 1024px 이상일 때
      if (scrollPosition >= 50 && scrollPosition < footerPosition) {
        aside.css({
          'position': 'sticky',
          'top': '100px',

        });
      } else {
        aside.css({

        });
      }
    } else {
      // 브라우저 너비가 1024px 미만일 때
      aside.css({
        'position': 'fixed',
        'top': '0',

      });
    }
  }

  // 페이지 로드 시 초기 설정
  updateAsidePosition();

  $(window).scroll(function() {
    // 스크롤 시 동적으로 처리
    updateAsidePosition();
  });

  // 윈도우 리사이즈 시 동적으로 처리
  $(window).resize(function() {
    updateAsidePosition();
  });
});


$(document).ready(function(){
    // Show the first submenu initially
    // $('.first > li:first-child .sub').show();

    // // Toggle the submenu when clicking on the list item
    // $('.first > li').click(function(){
    //   // Check if the clicked li already has the 'on' class
    //   if ($(this).find('h2').hasClass('on')) {
    //     // If yes, hide the submenu and remove 'on' class
    //     $(this).find('.sub').hide();
    //     $(this).find('h2').removeClass('on');
    //   } else {
    //     // If not, hide all submenus, remove 'on' class from all h2 elements,
    //     // then show the clicked submenu and add 'on' class to the clicked h2 element
    //     $('.first > li .sub').hide();
    //     $('.first > li h2').removeClass('on');
    //     $(this).find('.sub').show();
    //     $(this).find('h2').addClass('on');
    //   }
    // });

    $('.first > li:first-child .sub').slideDown();

    // Toggle the submenu when clicking on the list item
    $('.first > li').click(function(){
      // Check if the clicked li already has the 'on' class
      if ($(this).find('h2').hasClass('on')) {
        // If yes, slide up the submenu and remove 'on' class
        $(this).find('.sub').slideUp();
        $(this).find('h2').removeClass('on');
      } else {
        // If not, slide up all submenus, remove 'on' class from all h2 elements,
        // then slide down the clicked submenu and add 'on' class to the clicked h2 element
        $('.first > li .sub').slideUp();
        $('.first > li h2').removeClass('on');
        $(this).find('.sub').slideDown();
        $(this).find('h2').addClass('on');
      }
    });

    $(".navbar-toggler").click(function(){
        $("#aside").toggleClass("on");
        $(".aside_bg").toggleClass("on");
        $(this).toggleClass("on");
  
        function toggleClassBasedOnScreenSize() {
  
        if ($(window).width() > 1024) { 
            $("#aside").removeClass("on");
            $(".aside_bg").removeClass("on");
            $(".navbar-toggler").removeClass("on");
            $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
          } else {
          
          }
        }
        toggleClassBasedOnScreenSize();
  
        $(window).resize(function() {
            toggleClassBasedOnScreenSize();
        });
  
       
      });
    $("aside #close").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on"); 
    });  
    $(".aside_bg").click(function(){
        $("#aside").removeClass("on");
        $(".aside_bg").removeClass("on");
        $(".navbar-toggler").removeClass("on");
        $("#aside .navbar-nav_m li").removeClass("on");
        $("#aside .navbar-nav_m li").find(".sub").removeClass("on");
    });
  
  
      // $("#aside .navbar-nav_m li .sub").hide();
      $("#aside .navbar-nav_m li").click(function(){
          $(this).toggleClass("on");
          //$(this).find(".sub").slideDown();
          $('#aside .navbar-nav_m li').not(this).removeClass('on');        
          let subElement = $(this).find(".sub");
  
          if (subElement.is(":visible")) {
            subElement.slideUp();
          } else {
            $("#aside .navbar-nav_m li .sub").slideUp();
            subElement.slideDown();
          }
      });
      
});


function aniCtrl(){
  var _st = $(window).scrollTop();
 
  var _wH = $(window).height();

  $('.ani-item').each(function(){
      var _this = $(this);
      if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
          _this.addClass('done');
      }
  });
}


$(document).ready(function(){

  aniCtrl();

  $(window).scroll(function(){
      aniCtrl();
  });
});