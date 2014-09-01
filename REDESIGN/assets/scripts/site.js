$(document).ready(function() {
	/*navigation click actions*/
	$('.scroll-link').on('click', function(event) {
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
});

function scrollToID(id, speed) {
	/*height of the navbar*/
	var offset = 50;

	/*adjusting the div's top*/
	var targetOffset = $(id).offset().top - offset;
	$('html,body').animate({scrollTop: targetOffset}, speed);
}

if (typeof console === "undefined") {
	console = {
		log: function() {}
	};
}