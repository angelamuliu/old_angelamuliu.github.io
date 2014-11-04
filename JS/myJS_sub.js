


$(document).ready( function() {

	// Change color of scroll to an almost black as I go down
	$(window).scroll( function() {
		var scrollposition = $(window).scrollTop();
		$(".nav-row")[0].style.background="rgba(34,38,43," + scrollposition/120 + ")";
	})

	// Incase user wants to access menu while scrolled to top
	$(".nav-toggle").click( navtoggle );
	// Works for touch events too
	$('.nav-toggle').on({ 'touchstart' : navtoggle });

	// fancybox gallery widget, used in subpages
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	// --------------------------------------------
	// HELPERS
	// --------------------------------------------

	// Set bg of nav to dark when toggled
	function navtoggle() {
		$(".nav-row")[0].style.background="rgba(34,38,43, 1.0)";
	}

})
