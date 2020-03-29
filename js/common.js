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
})