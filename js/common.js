$(function(){
    $('.select ').on('click',function(){
        $(this).toggleClass('active');
    })
    var $width = $(window).width();
    if($width < 764){
        mobileScroll();
    }
    function mobileScroll(){
        var $header = $('.header'),
        $headerH = $header.height();
        $('.contents').scroll(function () {
            var scrollValue = $('.contents').scrollTop(); 
            if(scrollValue > $headerH){
                $header.addClass('fix');
            }else {
                $header.removeClass('fix');
            }
        });
    }
    function accordion(){
        $selector = $('.accordion-wrap dt button');
        $selector.on('click',function(){
            $(this).toggleClass('on');
            $(this).parents('dl').toggleClass('open');
        })
    }
    accordion();
    function popUp(){
        $selector = $('.close');
        $selector.on('click',function(){
            $(this).parents().parents().removeClass('active');
        })
    }
    popUp();
    function moreShow(){
        $selector = $('.white-borad .more > button');
        $selector.on('click',function(){
            $(this).siblings().toggleClass('active');
        })
        $close = $('.white-borad .more  .cancel');
        $close.on('click',function(){
            $(this).parent().toggleClass('active');
        })
    }
    moreShow();
    function fileShow(){
        $selector = $('.upload > button');
        $selector.on('click',function(){
            $(this).siblings().toggleClass('active');
        })
        $close = $('.upload .cancel');
        $close.on('click',function(){
            $(this).parent().toggleClass('active');
        })
    }
    fileShow();
    moreShow();
    function serviceTab(){
        var $tab = $('.btn-group.service button'),
        $tabCont = $('.service-wrap .tab-cont'),
        $idx = 0;
        $tab.on('click',function(){
            $('.service-list').hide();
            $idx = $(this).index();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $tabCont.eq($idx).addClass('active').siblings().removeClass('active')
        })
    }
    serviceTab();
})