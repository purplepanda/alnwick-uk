$('.btn-back-to-top').on('click', function (e) {
    e.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 1500);
});