$(document).ready(function() {
    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
});

function scrollToID(id, speed) {
    var offset = 50; 
    var targetOffset = $(id).offset().top - offset;
    $('html,body').animate({scrollTop: targetOffset}, speed);
}