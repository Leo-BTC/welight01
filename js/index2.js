/**
 * Created by Administrator on 2017-08-03.
 */
$(function () {
    var swiper = new Swiper('.banner .swiper-container', {
        loop: false,
        effect : 'fade',
        pagination: '.banner .swiper-pagination',
        paginationClickable: true,
        autoplay:3000,
        speed:500,
        nextButton: '.banner .swiper-button-next',
        prevButton: '.banner .swiper-button-prev',
        autoplayDisableOnInteraction : false,
        //onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        //    swiperAnimateCache(swiper); //隐藏动画元素
        //    swiperAnimate(swiper); //初始化完成开始动画
        //},
        //onSlideChangeEnd: function(swiper){
        //    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        //}
    });
    // $('.banner .swiper-container').mouseenter(function(){
    //     banner.stopAutoplay();
    // }).mouseleave(function(){
    //     banner.startAutoplay();
    // });
});

$(function () {
    var swiper = new Swiper('.earBanner .swiper-container', {
        loop: true,
        autoplay:false,
        speed:600,
        pagination: '.earBanner .swiper-pagination',
        paginationClickable: true,
        nextButton: '.earBanner .swiper-button-next',
        prevButton: '.earBanner .swiper-button-prev',
        effect : 'fade',
        autoplayDisableOnInteraction : false,
        onSlideChangeStart:function (swiper) {
            var index = swiper.activeIndex;     //当前索引
            var prev = swiper.previousIndex;    //上一个索引
            $(".ear-content>.right").eq(index).show().siblings().hide();
        }
    });
});
$(function () {
    function screen() {
        if($(window).width()>767){
            var swiper = new Swiper('.ji .swiper-container', {
                pagination: '.ji .swiper-pagination',
                slidesPerView: 1,
                effect : 'fade',
                paginationClickable: true,
                speed:800,
                nextButton: '.ji .swiper-button-next',
                prevButton: '.ji .swiper-button-prev',
                autoplayDisableOnInteraction : false,
                mousewheelControl: true,
                direction : 'vertical',
                paginationType : 'fraction',//数字
                parallax: true,//开启滚动视差
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                autoHeight:true
            });
        }else {
            var swiper = new Swiper('.ji .swiper-container', {
                pagination: '.ji .swiper-pagination',
                slidesPerView: 1,
                effect : 'fade',
                paginationClickable: true,
                speed:800,
                nextButton: '.ji .swiper-button-next',
                prevButton: '.ji .swiper-button-prev',
                autoplayDisableOnInteraction : false,
                mousewheelControl: true,
                direction : 'vertical',
                paginationType : 'bullets',//点
                parallax: true,//开启滚动视差
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                autoHeight:true
            });
            $(".ji .swiper-pagination").css({"height":$(".ji .swiper-pagination-bullet").outerHeight()*$(".ji .swiper-pagination-bullet").length})
        }
    }
    screen();
    $(window).resize(function () {
        screen();
    })

});
$(function () {
    var swiper = new Swiper('.case-list .swiper-container', {
        loop: false,
        autoplayDisableOnInteraction : false,
        pagination: '.case-list .swiper-pagination',
        paginationClickable: true,
        slidesPerView: 6,
        spaceBetween: 7,
        nextButton: '.case-list .swiper-button-next',
        prevButton: '.case-list .swiper-button-prev',
        breakpoints: {
            1400: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 1
            }
        }
    });

});
$(function () {
    $(window).load(function(){
        $(".xin-case li .case-list a").css({"height":$(".xin-case li .right img").height()-2});
        $(".xin-case").css({"height":$(".xin-case li").outerHeight()*4+40});
        $(".xin-arrow").click(function(){
            if($(".xin-case").css("overflow")=="hidden"){
                //$(".xin-case").css({"overflow":"visible","height":"100%"});
                //$(".xin-arrow img").css({"transition":"all 0.3s","transform":"rotate(180deg)"});
                $(".xin-case").addClass("bg1");
                $(".xin-arrow").addClass("bg2");

            }else {
                $(".xin-case").removeClass("bg1");
                $(".xin-arrow").removeClass("bg2");
                $(".xin-case").css({"height":$(".xin-case li").outerHeight()*4+40});
                //$(document).scrollTop($(".people").offset().top-200);
                $('html,body').animate({ scrollTop:$(".people").offset().top-200},300);
            }

        })
    })


    $(".banner img").load(function(){
        $(".banner .hei").css({"width":"100%","height":"100%","transform":"scale(1)"});
        $(".banner .new-wen").delay(600).css({"opacity":1});
        setTimeout(function () {
            $(".banner .hei").hide();
            $(".banner .new-wen").hide();
        },5000);
    })
$(window).load(function () {
    function load() {
        // var headerH=$(".header .inner").outerHeight();
        // var navH=$(".nav").outerHeight();
        // $(".nav").css({"height":navH+headerH+30,"padding-top":headerH,top:-(navH+headerH)});
        // $('.navList').click(function(){
        //     if($('.nav').css("display")=="none"){
        //         $(this).addClass("rotate");
        //         $(".nav").show();
        //     }else{
        //         $(this).removeClass("rotate");
        //         // $(".nav").animate({"top":-(navH+headerH)},200,function () {
        //         //     $(".header").removeClass("active");
        //         // });
        //         $(".nav").hide();
        //     }
        // });


        // if($(window).width()>768){
        //     $(".news .bot .right .scroll").css({"height":$(".news").height()-100});
        //     $(".news .bot .right .scroll ul").css({"height":$(".news").height()-175});
        // }else {
        //     $(".news .bot .right .scroll").css({"height":($(".news .bot .right .scroll ul li").outerHeight())*2+($(".moreTxt").outerHeight())+30});
        //     $(".news .bot .right .scroll ul").css({"height":$(".news .bot .right .scroll ul li").outerHeight()*2});
        // }
        var rightH=$("#content").outerHeight();
        var leftH=$(".case .bot .leftCase").outerHeight();
        // $(".case .bot .leftCase").css({"top":(rightH-leftH)/2});
        if($(window).width()>1660){
            // $("#content>div img").css({"height":"100%"});
            $(".new-right").css({"height":"100%"});
            $(".map .right").css({"height":"100%"});
        }else {
            $("#content>div img").css({"height":leftH});
            // $(".case .bot").css({"height":$("#content>div img").height()});
            $(".new-right").css({"height":$(".people .bot .pic .img3").height()});
            if($(".new-right").height()==$(".people .bot .pic .img3").height()){
                $(".people .bot .new-right").css({"display":"block"});
            }
        }

        // else {
        //     $(".case .bot .leftCase").css({"top":(rightH-leftH)/2});
        //     // $("#content>div img").css({"height":leftH});
        //     $(".new-right").css({"height":$(".people .bot .pic").height()});
        //     $(".map .right").css({"height":$(".map .left").height()});
        // }
        $(".case-list").css({"margin-top":(rightH-leftH)+45});
        $(".case-list .swiper-slide .text").css({"height":$(".case-list .swiper-slide .pic img").height()});
        $(".people .bot .pe-right").css({"height":$(".people .bot .left img").height()});
        $(".people .bot .left").css({"height":$(".people .bot .left img").height()});

        $(".showZi .showBot .showR .ziBox .one").last().css({"border-bottom":"none"});
        if($(window).width()>1000){
            $(".earBanner .inner").css({"height":$(".earBanner .img1").height()});
        }else {
            $(".earBanner .inner").css({"height":"auto"});
        }
        $(".ji").css({"width":$(window).width(),"height":$(window).height()});
        $(".ji .ji-slide").css({"width":$(window).width(),"height":$(window).height()});
        $(".map2 .left").css({"height":$(".map2 #dituContent").height()});
        $(".nav .inner .right").css({"height":$(".smallUl").outerHeight()});
        // $(".showXun .xunUl li .xunR .xunR-txt").css({"height":$(".showXun .xunUl li .xunR img").height()});
        // $(".showXun .xunUl li .xunR .xunR-txt").each(function () {
        //     $(this).hover(function () {
        //         $(this).css({"height":$(this).siblings("img").height()});
        //     })
        // });
        if($(window).width()<=991){
            $(".navList").css({"height":($(".navList span:first").height()+6)*4});
            $(".map .right .mapImg").css({"height":$(".map .right .input").outerHeight()+40})
        }
        $(".body").css({"width":$(window).width(),"height":$(window).height()});
        $(".ji").css({"width":$(window).width(),"height":$(window).height()});
        $(".ji .ji-slide").css({"width":$(window).width(),"height":$(window).height()});
        $(".showAbout .showBot .showL").css({"height":$(".showAbout .showBot .showR").height()});
        // $(".smallUl .li-1").click(function () {
        //     $(".showAbout").show();
        //     $(".showAbout").css({"height":$(".showAbout .inner").outerHeight()});
        //     $(".showAbout .showBot .showL").css({"height":$(".showAbout .showBot .showR").height()});
        // });
        // $(".sixIcon ul .li-qi").click(function () {
        //     $(".showQi").show();
        //     $(".showQi").css({"top":$(".sixIcon ul .li-qi").offset().top-($(window).height()/2-30)});
        //     $(".qiUl li .qiR").css({"height":$(".qiUl li .qiL").height()});
        //
        // });

        $(".show .close").click(function () {
            $(".show").hide();
        });
        $(".case-list .slide").on("mouseover",function () {
             $(this).find(".text-1").hide();
             $(this).find(".white").addClass("bg");
            $(this).find(".white").css({"opacity":1});
        })
        $(".case-list .slide").on("mouseout",function () {
                $(this).find(".white").removeClass("bg");
                $(this).find(".text-1").show();
            $(this).find(".white").css({"opacity":0});

        })

        var tab=$("#content>div");
        var tab2=$(".content2>div");
        $(".case .bot .leftCase ul li").each(function (index) {
            $(this).hover(function () {
                tab.eq(index).show().siblings().hide();
                tab2.eq(index).show().siblings().hide();
            });
        });
    }
    load();
    $(window).resize(function () {
        load();
    });
});
    $(".news .bot .left").on("mouseover",function(){
        $(".new-bg1").show();
    })

    //锚点
    $('.lpl li a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(0) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({ scrollTop: targetOffset-100 },600);
                return false;
            }
        }
    });
    $('.navList').click(function () {
        $(this).hide(0);
        $(".nav>.inner").animate({"top":0},300);
    });
    $('.close-btn').click(function () {
        $(".nav>.inner").animate({"top":"-100%"},300);
        $(".navList").show();
    });
    $(".sixIcon ul li a").hover(function () {
        $(this).addClass("bg");
    },function () {
        $(this).removeClass("bg");
    });

    $(".map .right .input .close").click(function () {
        $(".map .right .input").hide();
    });
    $(window).scroll(function(){
        var t = $(window).scrollTop();
        if(t>=$('.header .inner').outerHeight()){
            $('.scroll-header').css({'top':0})
        }else{
            $('.scroll-header').css({top:'-100%'})
        }
        if($(window).scrollTop()>300){
            $(".scroll-top").fadeIn();
        }else {
            $(".scroll-top").fadeOut();
        }
    });
    $(".scroll-top").click(function () {
        $("html,body").animate({scrollTop:0},500);
    });
    $(".registerform").Validform({
        tiptype: 1,
        callback:function(curform){
          var url = $(".registerform").attr('action');
            $.ajax({
            url: url,
            type: 'POST',
            dataType:'json',
            data:$(curform[0]).serialize(),
            success:function(data){
                  
                  if(data.status==1)
                  {
                    // 将jquery对象转为js对象 重置表单
                    $(curform[0])[0].reset();
                    $.Showmsg("留言成功，谢谢！");
            setTimeout(function(){
               $('#Validform_msg').fadeOut();
            },1500)
                  }
              }
            });
                return false;

        }


    });
});
