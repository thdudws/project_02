

//버튼으로 움직이는 슬라이드

$(function () {

    let w = $(".fin").width();

    $(window).resize(function () {
        w = $(".fin").width();
    })

    $('.prev1').click(function () {
        let n = $(this).parents(".insta").index() - 2;
        $('.fin_pic' + n + ' li:last').prependTo('.fin_pic' + n);
        $('.fin_pic' + n).css('margin-left', -w);
        $('.fin_pic' + n).stop().animate({ marginLeft: 0 }, 700);
    });

    $('.next1').click(function () {
        let n = $(this).parents(".insta").index() - 2;
        $('.fin_pic' + n).stop().animate({ marginLeft: -w }, 700, function () {
            $('.fin_pic' + n + ' li:first').appendTo('.fin_pic' + n);
            $('.fin_pic' + n).css({ marginLeft: 0 });
        });
    });

});
