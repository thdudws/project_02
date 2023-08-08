$(function(){
            
    //버튼으로 제어하는 슬라이드
    function slide() {
        if (window.matchMedia("(min-width:1024px)").matches) {
            $('.prev').click(function () {
                $('#slide_box .slider:last').prependTo('#slide_box');
                $('#slide_box').css('margin-left', '-50%');
                $('#slide_box').stop().animate({ marginLeft: '-10%' }, 800);
            });

            $('.next').click(function () {
                $('#slide_box').stop().animate({ marginLeft: '-50%' }, 800, function () {
                    $('#slide_box .slider:first').appendTo('#slide_box');
                    $('#slide_box').css({ marginLeft: '-10%' });
                });
            });


        } else {
            $('.prev').click(function () {
                $('#slide_box .slider:last').prependTo('#slide_box');
                $('#slide_box').css('margin-left', '-100%');
                $('#slide_box').stop().animate({ marginLeft: '0' }, 800);
            });

            $('.next').click(function () {
                $('#slide_box').stop().animate({ marginLeft: '-100%' }, 800, function () {
                    $('#slide_box .slider:first').appendTo('#slide_box');
                    $('#slide_box').css({ marginLeft: '0' });
                });
            });
        }
    }

    slide();

    window.addEventListener('resize', slide)
    

});

