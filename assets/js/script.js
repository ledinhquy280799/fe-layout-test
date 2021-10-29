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

    // var lastScrollTop = 0;
    // navbar = document.getElementById('navigation-bar');
    // window.addEventListener('scroll', function() {
    //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > lastScrollTop) {
    //         navbar.style.top = "-70px";
    //     } else {
    //         navbar.style.position = "fixed";
    //         navbar.style.top = "0";
    //         navbar.style.left = "0";
    //         navbar.style.right = "0";
    //         navbar.style.background = "#f28989";
    //     }
    //     lastScrollTop = scrollTop;
    // })

    // var scroll = $(document).scrollTop();
    // var navHeight = $('#navigation-bar').outerHeight();

    // $(window).scroll (function() {
    //     var scrolled = $(document).scrollTop();

    //     if (scrolled > navHeight) {
    //         $('#navigation-bar').addClass('animate')
    //     } else {
    //         $('#navigation-bar').removeClass('animate')
    //     }

    //     if (scrolled > scroll) {
    //         $('#navigation-bar').removeClass('sticky')
    //     } else {
    //         $('#navigation-bar').addClass('sticky')
    //     }

    //     scroll = $(document).scrollTop();
    // });
    $(window).scroll(function() {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > 50) {
            $("#navigation-bar").addClass('sticky');
        } else {
            $("#navigation-bar").removeClass('sticky');
        }
    });
});