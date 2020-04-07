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
                console.log(222)
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
})