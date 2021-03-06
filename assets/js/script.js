$(document).ready(function () {
    // $('#map').click(function () {
    //     $('#map').toggleClass('showMap');
    //     $('#openMap').toggle();
    //     $('#closeMap').toggle();
    // })

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

    // $(window).resize(function () {
    //     winWidth = $(window).width();
    //     console.log(winWidth)
    //     if (winWidth >= 754) {
    //         $(".portfolioItems .item").css('left', winWidth * 0.242);
    //     } else {
    //         $(".portfolioItems .item").css('left', winWidth * 0.24);
    //         $(".portfolioItems .item").css('left', winWidth * 0.24);
    //     }
    // });

    $(".mdi-magnify").click(function () {
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
    $(window).scroll(function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > 50) {
            $("#navigation-bar").addClass('sticky');
        } else {
            $("#navigation-bar").removeClass('sticky');
        }
    });

    function Counter(selector) {
        var self = this;

        //get all props from element
        this.elem = document.querySelector(selector);
        this.from = parseInt(this.elem.getAttribute('data-from') || 100);
        this.to = parseInt(this.elem.getAttribute('data-to') || 1000);
        this.refreshInterval = parseInt(this.elem.getAttribute('data-refresh-interval') || 50);
        this.speed = parseInt(this.elem.getAttribute('data-speed') || 5000);

        //start counter
        //if restart(int) is provided
        //restart counter after finishing with timeout
        this.start = function (restart) {
            //base logic, can be improved
            var diff = self.to - self.from;
            var steps = self.speed / self.refreshInterval;
            var step = diff / steps;
            var i = 1;
            var interval = setInterval(function () {
                var change = step * i;
                if (change <= self.to) {
                    self.elem.textContent = Math.round(change);
                    i++;
                } else {
                    self.elem.textContent = Math.round(self.to)
                    clearInterval(interval);
                    //try to restart counter
                    if (restart && restart > 0) {
                        setTimeout(function () {
                            self.start(restart);
                        }, restart);
                    }
                }
            }, self.refreshInterval);
        }
    }

    //example2
    var counter1 = new Counter('#web-projects');
    //dont restart
    counter1.start(0);

    //example2
    var counter2 = new Counter('#client');
    //dont restart
    counter2.start(0);

    //example2
    var counter3 = new Counter('#winner');
    //dont restart
    counter3.start(0);

    //example2
    var counter3 = new Counter('#coffee');
    //dont restart
    counter3.start(0);

    //example2
    var counter3 = new Counter('#members');
    //dont restart
    counter3.start(0);
});

$(window).on('load', function(){
    $portfolio = $('.portfolioItems');
    $portfolio.isotope({
        itemSelector : 'li',
        layoutMode : 'masonry'
    });
});

/* =============== PORTFOLIO HOVER EFFECT =============== */
$('.portfolioItems > li').each( function() { $(this).hoverdir(); } );