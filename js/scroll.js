//#name 스크롤하면 글자 이동

$(function () {

    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        console.log(ws);
        if (ws < 800) {
            $('#name span:nth-of-type(2)').animate({ 'margin-top': -ws / 7 }, 20);
            $('#name span:nth-of-type(3)').animate({ 'margin-top': ws / 10 }, 20);
            $('#name span:nth-of-type(4)').animate({ 'margin-top': -ws / 3 }, 20);
            $('#name span:nth-of-type(5)').animate({ 'margin-top': ws / 3 }, 20);
            $('#name span:nth-of-type(6)').animate({ 'margin-top': -ws / 4 }, 20);
        }

        //#catalog>.menu li 스크롤하면 이동
        
        let con1 = $('#content1').offset().top; //1800
        let con2 = $('#content2').offset().top; //2770
        let con3 = $('#content3').offset().top; //3740
        let con4 = $('#content4').offset().top; //4710

        if (ws > con1 - 500) {
            $('.menu li').removeClass('active');
            $('.menu li:nth-of-type(1)').addClass('active');
            $('.menu li img').css("display", "none");
            $('.menu li:nth-of-type(1) img').css("display", "block");
        }
        if (ws > con2 - 300) {
            $('.menu li').removeClass('active');
            $('.menu li:nth-of-type(2)').addClass('active');
            $('.menu li img').css("display", "none");
            $('.menu li:nth-of-type(2) img').css("display", "block");
        }
        if (ws > con3 - 300) {
            $('.menu li').removeClass('active');
            $('.menu li:nth-of-type(3)').addClass('active');
            $('.menu li img').css("display", "none");
            $('.menu li:nth-of-type(3) img').css("display", "block");
        }
        if (ws > con4 - 200) {
            $('.menu li').removeClass('active');
            $('.menu li:nth-of-type(4)').addClass('active');
            $('.menu li img').css("display", "none");
            $('.menu li:nth-of-type(4) img').css("display", "block");
        }
    });
});