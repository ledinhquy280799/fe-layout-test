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
});