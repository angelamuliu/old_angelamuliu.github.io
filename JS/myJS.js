
$(document).ready( function() {

	// Change color of scroll as I go down
	$(window).scroll( function() {
		var scrollposition = $(window).scrollTop();
		$(".nav-row")[0].style.background="rgba(0,0,0," + scrollposition/120 + ")";
	})



})