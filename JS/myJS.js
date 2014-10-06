

$(document).ready( function() {

	// Change color of scroll to an almost black as I go down
	$(window).scroll( function() {
		var scrollposition = $(window).scrollTop();
		$(".nav-row")[0].style.background="rgba(34,38,43," + scrollposition/120 + ")";
		console.log($(window).width());
	})

	$(".nav-toggle").click( function() {
		$(".nav-row")[0].style.background="rgba(34,38,43, 1.0)";
	})

	// A different greeting every time you come back! : )
	var greetings= ["Aloha!", "Welcome!", "Salutations!", "Wassup?", "Howdy!", "Ahoy!"];
	var randomnumber = Math.ceil(Math.random()*5);
	$("#greet").html("<h1>"+greetings[randomnumber]+"</h1>");

	// Gallery hover effect
	if ($(window).width() >= 600) { // Web: Hover enabled for project gallery
		$(".project").hover(
		function() {
			$(this).find(".project_name").fadeIn(300);
		}, function() {
			$(this).find(".project_name").fadeOut(200);
		})
	} else {
		$(".project_name").show(); // Mobile: Don't deal with hover, just show it
	}

	// Filter is called on a button click, button has id. Anything within
	// project area with a matching class name is shown, nonmatches are hidden
	$("button.filter").click( function() {
		filterterm = "." + $(this).attr("id");
		$(".project").not(filterterm).hide();
	})

})
