


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

	// A different greeting every time you come back! : )
	var greetings= ["Aloha!", "Welcome!", "Salutations!", "Wassup?", "Howdy!", "Ahoy!"];
	var randomnumber = Math.ceil(Math.random()*5);
	$("#greet").html("<h1>"+greetings[randomnumber]+"</h1>");

	// Filter is called on a button click, button has id. Anything within
	// project area with a matching class name is shown, nonmatches are hidden
	$("button.filter").click( function() {
		var filterterm = "." + $(this).attr("id");
		var $container = $("#gallery");
		$container.isotope({filter: filterterm});
	})

	// --------------------------------------------
	// HELPERS
	// --------------------------------------------

	// Set bg of nav to dark when toggled
	function navtoggle() {
		$(".nav-row")[0].style.background="rgba(34,38,43, 1.0)";
	}

})
