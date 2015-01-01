$(document).ready(function() {
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
    
    var aChildren = $(".menuItem").children();
    var aArray = [];
    for (i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('data-id');
        aArray.push(ahref);
    }
    
    $(window).scroll(function() {
        var windowPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        
        for (i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPosition = $('#' + theID).offset().top;
            var divHeight = $('#' + theID).height();
            var currentURL = window.location.href;
            if (currentURL.indexOf(theID) > -1) {
                $("a[data-id='" + theID + "']").addClass('navActiveLink');
            }
            else if (windowPosition >= divPosition && windowPosition < (divPosition + divHeight) && currentURL.indexOf("#") < 0) {
                $("a[data-id='" + theID + "']").addClass('navActiveLink');
            }
            else {
                $("a[data-id='" + theID + "']").removeClass('navActiveLink');
            }
        }
    });
    
    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
        $("a[data-id='" + theID + "']").addClass('navActiveLink');
        for (i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            if (theID !== sectionID && $("a[data-id='" + theID + "']").hasClass('navActiveLink')) {
                $("a[data-id='" + theID + "']").removeClass('navActiveLink');
            }
        }
    });
});

function scrollToID(id, speed) {
    var offset = 50; 
    var targetOffset = $(id).offset().top - offset;
    $('html,body').animate({scrollTop: targetOffset}, speed);
}