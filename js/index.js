$(function(){
      /* navbar导航 */
       $(".navbar-toggle").click(function () {
          $(this).toggleClass("click");
          $(".bg-div").toggleClass("hide");
          $("body").toggleClass("body-static");
          $(".navbar-collapse").slideToggle();
          $(".navbar-collapse").css('visibility','visible');
        });
        /* banner图 */
       $('.banner .bd').flexslider({
          animation:'fade',
          directionNav:false,
          controlNav:false
        });
        bannerBd2();
        initCourse();
		caseScroll();
        $('.banner').find('.bd2').find('.cssTd >div').addClass('ani');
        var aniI = 0;
        var aniLen = $('.banner').find('.ani').length;
        var ani = setInterval(function(){
          if( aniI <= aniLen - 1 ){
            $('.banner').find('.ani').eq(aniI).addClass('on');
            aniI = aniI + 1;
          }else{
            clearInterval(ani);     
            var emTime = "";
            var emCureent = 0;
            $('.banner').find('.bd2').find('.b-txt-01').each(function(){
                var _this = $(this);
                var emLen = _this.find('em').length;
                emTime = setInterval(function(){
                    if( emCureent <= emLen - 1 ){
                        _this.find('em').eq(emCureent).addClass('on').siblings().removeClass('on');
                        emCureent = emCureent + 1;
                    }else{
                        _this.find('em').eq(emCureent-1).removeClass('on');
                        emCureent = 0;

                    }
                },100);
            });    
          }
        },300);
        /* newslist无缝滚动 */
        $('#news .owl-carousel').owlCarousel({
            items:2,
			itemsCustom: false,
			itemsDesktop: [1200,2],
			itemsDesktopSmall: false,
			itemsTablet: [992,2],
			itemsTabletSmall: false,
			itemsMobile: [768,1],
            autoPlay:true,
			lazyLoad: true,
            addClassActive: true
        });
    $('#team .owl-carousel').owlCarousel({
        items:3,
        itemsCustom: false,
        itemsDesktop: [1200,3],
        itemsDesktopSmall: false,
        itemsTablet: [992,2],
        itemsTabletSmall: false,
        itemsMobile: [768,1],
        autoPlay:true,
        lazyLoad: true,
        addClassActive: true
    });
        //wow动画
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
          new WOW().init();
        };
        //One-Page-Nav
		$('.navbar-nav').find('a').click(function(){
			$(".navbar-toggle").click();
		});
		$('.navbar-nav').onePageNav({
			currentClass:'current',
			filter:':not(.disable)'
		});
		
    })
    $(window).resize(function(){
      bannerBd2();
      initCourse();
    });
	function caseScroll(){
		var swiper = new Swiper('#cases .col-md-12', {
			pagination: '.swiper-pagination',
			slidesPerView: 5,
			slidesPerGroup:5,
			slidesPerColumn: 2,
			paginationClickable: true,
			spaceBetween: 10,
			autoplay: 2500,
			breakpoints: {
				1024: {
					slidesPerView: 4,
					slidesPerGroup:4
				},
				768: {
					slidesPerView: 3,
					slidesPerGroup:3
				},
				640: {
					slidesPerView: 2,
					slidesPerGroup:2
				},
				320: {
					slidesPerView: 1,
					slidesPerGroup:1
				}
			}
		});
	}
    function bannerBd2(){
      $('.banner .bd2').css({'padding-top':( $('.navbar').offset().top-$(window).scrollTop()+$('.navbar').outerHeight()) +'px'});
      $('.banner,.banner .bd .slides-item').css({'height':$(window).height()+'px'});
    }

    function popWin(title, content) {
      var w = '60%';
        if($(window).width() < 992) w = '90%';
        var layerObj=layer.open({
          type: 1,
          area: [w,'90%'],
          title: title,
          /* anim:2, */
          shadeClose: true,
          scrollbar: false,
          content: content
        });
		return layerObj;
    }
    //业界荣誉
    function coursescroll(){
        var H = 0;
        var w = $(".course-list .ovh").width();
        for(i=0;i<$(".course-list li").length;i++){
            if($(".course-list li").eq(i).height() > H){
                H = $(".course-list li").eq(i).height();
            }
            if ($(".course-list li").eq(i).index() * (207 + 93) > w) {
                $(".course-list li").eq(i).css('opacity', '0');
            }else{
                $(".course-list li").eq(i).css('opacity', '1');
            }
        }
        var a = Math.ceil($(".course-list .ovh").width()/300);
        
        $(".course-list .ovh").height(2 * H - 15)
        $(".course-list ul").width($(".course-list li").length * (207 + 93));
        $(".course-list li").not($(".course-list li.odd")).each(function(){
            $(this).css("margin-top", H - 15 )
        })
        $(".course-list li.odd").each(function(){
            $(this).css("margin-top", H - $(this).height() )
        })
        $(".course-list li").eq(a).addClass("on").next().css("opacity", 0)
        $(".course-list .next").click(function(){
            $(".course-list .prev").show();
            var $LiOn = $(".course-list li.on")
            // $(".course-list li.on").next().css("opacity", 1)
            $(".course-list li").eq($LiOn.index() - a).css("opacity", 0)
            if($(".course-list li").length-1> $LiOn.index() ){
                if($LiOn.index() == $(".course-list li").length-2){
                    $(this).hide();
                }
                $(".course-list li.on").next().addClass("on").siblings().removeClass("on")
                var n = $(".course-list li.on").index() - a;
                $(".course-list ul").stop().animate({marginLeft : - n * 220 }, 500);
                $(".course-list li.on").prev().css('opacity', '1');
                $(".course-list li.on").css('opacity', '0');
                $(".course-list li").last().css('opacity', '1');
            }
        })
        $(".course-list .prev").click(function(){
            $(".course-list .next").show();
            var $LiOn = $(".course-list li.on");
            if($LiOn.index() > a ){
                if($LiOn.index() == a+1){
                    $(this).hide();
                }
                $(".course-list li.on").prev().addClass("on").siblings().removeClass("on")
                $(".course-list li.on").next().css("opacity", 0)
                $(".course-list li").eq($(".course-list li.on").index() - a).css("opacity", 1)
                var n = $(".course-list li.on").index() - a;
                $(".course-list ul").stop().animate({marginLeft : - n * 213 }, 500);
            }
        })
    }
    function initCourse(){
      var _w = $(window).width();
      if( _w > 768){  
          $(".course-list .ovh ul").css('margin-left', '0');
          var H = 0;
          var w = $(".course-list .ovh").width();
          for(i=0;i<$(".course-list li").length;i++){
              if($(".course-list li").eq(i).height() > H){
                  H = $(".course-list li").eq(i).height()
              }
              if ($(".course-list li").eq(i).index() * (207 + 93) > w) {
                  $(".course-list li").eq(i).css('opacity', '0');
              }else{
                  $(".course-list li").eq(i).css('opacity', '1');
              }
          }
          var a = Math.ceil($(".course-list .ovh").width()/300);
          
          $(".course-list .ovh").height(2 * H - 15)
          $(".course-list ul").width($(".course-list li").length * (207 + 93));
          $(".course-list li").not($(".course-list li.odd")).each(function(){
              $(this).css("margin-top", H - 15 )
          })
          $(".course-list li.odd").each(function(){
              $(this).css("margin-top", H - $(this).height() )
          })
          $(".course-list li").eq(a).addClass("on").next().css("opacity", 0)

          $(".course-list .prev,.course-list .next").show();
		  coursescroll();
		  var owl=$('.course-list ul').data('owlCarousel');
		  if(owl)owl.destroy();
      }else{
		  $('.course-list ul').css({width:'auto','margin-left':0}).owlCarousel({
				singleItem: true,
				autoPlay:true,
				addClassActive: true
			});
	  }
          
  }
