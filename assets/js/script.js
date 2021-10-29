$(document).ready(function() {
    $('#map').click(function() {
        $('#map').toggleClass('showMap');
        $('#openMap').toggle();
        $('#closeMap').toggle();
    })

    $('[data-fancybox]').fancybox({
        animationEffect: "slide",
        transitionEffect: "fade",
        loop: "true",
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "thumbs",
            "close"
        ]
    });

    $(window).resize(function(){
        winWidth = $(window).width();
        console.log(winWidth)
        if (winWidth >= 754) {
            $(".portfolioItems .item").css('left', winWidth*0.242);
        } else {
            $(".portfolioItems .item").css('left', winWidth*0.24);
            $(".portfolioItems .item").css('left', winWidth*0.24);
        }
    });

    $(".mdi-magnify").click(function() {
        $(".togglesearch").toggle();
        $("input[type='text']").focus();
    });
});