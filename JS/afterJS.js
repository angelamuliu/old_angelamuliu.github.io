

// Gallery hover effect
function gallery_hover() {
	$(".project_name").hide();
	if ($(window).width() > 640) { // Web: Hover enabled for project gallery
		$(".mob_proj").hide();
		$(".project").hover(
		function() {
			$(this).find(".project_name").fadeIn(300);
		}, function() {
			$(this).find(".project_name").fadeOut(200);
		})
	} else {
		$(".mob_proj").show(); // Mobile: Don't deal with hover, show alternative
	}
}


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
// Also check if continue to use gallery hover effect
$( window ).on( "orientationchange", function() {
	console.log("Orientation change");
	gallery_hover();
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
	console.log("Window resize");
	gallery_hover();
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