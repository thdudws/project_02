//nav 햄버거 제이쿼리
$(function () {
    $("#ham img").click(function () {
        $(".nav_bottom").slideToggle();
    });

    $(window).resize(function () {
        if (window.innerWidth <= 767) {
            $(".nav_bottom").hide();
        }
    });
});