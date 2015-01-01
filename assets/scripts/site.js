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
    
    var liChildren = $("#navLinkList").children();
    var aChildren = [];
    for (i = 0; i < liChildren.length; i++) {
        var as = liChildren[i].children();
        aChildren.push(as);
    }
    var aArray = [];
    for (i = 0; i < aChildren.length; i++) {
        aArray.push(aChildren[i].attr('data-id'));
    }
    
    $(window).scroll(function() {
        var windowPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        
        for (i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPosition = $(theID).offset().top;
            var divHeight = $(theID).height();
            if (windowPosition >= divPosition && windowPosition < (divPosition + divHeight)) {
                $("a[data-id='" + theID + "']").addClass('navActiveLink');
            }
            else
            {
                $("a[data-id='" + theID + "']").removeClass('navActiveLink');
            }
        }
        
        if(windowPosition + windowHeight == documentHeight) {
            if (!$("nav li:last-child a").hasClass("navActiveLink")) {
                var navActiveCurrent = $(".navActiveLink").attr("data-id");
                $("a[data-id='" + navActiveCurrent + "']").removeClass("navActiveLink");
                $("nav li:last-child a").addClass("navActiveLink");
            }
        }
    });
});

function scrollToID(id, speed) {
    var offset = 50; 
    var targetOffset = $(id).offset().top - offset;
    $('html,body').animate({scrollTop: targetOffset}, speed);
}