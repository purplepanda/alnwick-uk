$(document).ready(function() {
    if ($('div[class*="anim"]').length > 0) {
        var animateElements = function () {
                var $animElems = $('div[class*="anim"]'),
                    addAnimationClass = function () {
                        $animElems.each(function (idx, item) {
                            var topofElem = $(item).offset().top;

                            if ( topofElem < ( $(window).scrollTop() + ($(window).height() / 1.25)) ) {
                                if (!$(item).hasClass('active')) {
                                    $(item).addClass('active');
                                }
                            }
                        });
                    };

                    $(window).on('scroll', function () {
                        addAnimationClass();
                    });
                    addAnimationClass();
        };
        
        $(window).on('load', animateElements());
    }
    
    var scrollToTop = setInterval(watchTriangle, 200);
    
    var watchTriangle = function() {
        if ($('.triangle').hasClass('active') && $(window).scrollTop() < 600) {
            var topOfTriangle = $('.triangle').position().top;
            
            $('html, body').animate({ scrollTop: topOfTriangle}, 1500);
        }
        
        clearInterval(scrollToTop);
    };

    setTimeout(function() {
        watchTriangle();
    }, 800);
});