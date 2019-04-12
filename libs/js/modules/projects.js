$(document).ready(function() {
    $("a[href*='#img']").on("click", function () {
        var carousel = $(this).parent('.project').find('.project__carousel-wrapper');

        setTimeout(function() {
            carousel.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });    
        }, 150);
    }); 

    $("a[href*='#goppion']").on("click", function () {
        var carousel = $(this).parent('.nav-projects__item-description').find('.project__carousel-wrapper');

        setTimeout(function() {
            carousel.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });    
        }, 150);  
    });
});
