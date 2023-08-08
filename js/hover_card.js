 //hover_card 이벤트
 $(function () {
    $(".card, .hover_card").mouseenter(function () {
        $(".hover_card").stop().css("opacity", "1");
    });
    $(".card, .hover_card").mouseleave(function () {
        $(".hover_card").stop().css("opacity", "0");
    });

});
