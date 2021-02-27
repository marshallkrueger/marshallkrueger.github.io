/* Preloader Splash */
$(window).load(function(){
    setTimeout(function() {
        $('#container').animate({opacity: 1},300);
        $('.preloader').fadeOut(500);
    }, 2000);
});
