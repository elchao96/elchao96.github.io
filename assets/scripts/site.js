$(document).ready(function() {
    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    
    $(window).scroll(function() {
        var homeDistance = $('#home').height();
        var windowDistance = $(window).scrollTop();
        if (windowDistance >= homeDistance) {
            $('.navbar').addClass('navbar-fixed-top');
        }
        else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
        
        
    });
});

function scrollToID(id, speed) {
    var offset = 50; 
    var targetOffset = $(id).offset().top - offset;
    $('html,body').animate({scrollTop: targetOffset}, speed);
}