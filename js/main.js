$(document).ready( function() {
    parallax();
});

function parallax() {
            
    $(window).on('scroll', function () {

        var windowPosition = $(this).scrollTop();
        $('.bg-parallax').css('background-position', '50%' + ( - windowPosition / 4 ) + 'px');

    });
};