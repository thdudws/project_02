
$(function () {

    // 포스트박스 변경 제이쿼리
    $('.tap li:nth-of-type(1)').click(function () {
        $('.tap li').removeClass('click');
        $(this).addClass('click');
        $('.post_box').show().css('display', 'flex');
        $('.post_box2').hide();
    });

    $('.tap li:nth-of-type(2)').click(function () {
        $('.tap li').removeClass('click');
        $(this).addClass('click');
        $('.post_box2').show().css('display', 'flex');
        $('.post_box').hide();
    });

});