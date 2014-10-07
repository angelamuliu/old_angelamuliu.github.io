

// Responsive Nav
var nav = responsiveNav(".nav-collapse", {
  label: "<i class=\"fa fa-bars\"></i>", // Label for the navigation toggle
  closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  open: function(){}, // Function: Open callback
  close: function(){}
});

// Foundation
$(document).foundation();

// ------------------------------------------------------------
// ISOTOPE
// ------------------------------------------------------------

// Init
var $container = $("#gallery");
$container.isotope({
	itemSelector: ".project",
	// layoutMode:'fitRows',
	masonry: {
      columnWidth: $(".project").width(),
      isFitWidth: true
    }
})

// On resize or orientation change, check and update the column width
$( window ).on( "orientationchange", function() {
	console.log("CHANGED!");
  var $container = $("#gallery");
	$container.isotope({
		itemSelector: ".project",
		// layoutMode:'fitRows',
		masonry: {
	      columnWidth: $(".project").width()+10,
	      isFitWidth: true
	    }
	})
});
window.onresize = function() {
	var $container = $("#gallery");
	$container.isotope({
		itemSelector: ".project",
		// layoutMode:'fitRows',
		masonry: {
	      columnWidth: $(".project").width()+10,
	      isFitWidth: true
	    }
	})
}