
$(document).ready( function() {

	// Change color of scroll as I go down
	$(window).scroll( function() {
		var scrollposition = $(window).scrollTop();
		$(".nav-row")[0].style.background="rgba(0,0,0," + scrollposition/120 + ")";
	})


	var greetings= ["Aloha!", "Welcome!", "Salutations!", "Wassup?", "Howdy!", "Ahoy!"];
	var randomnumber = Math.ceil(Math.random()*5);
	$("#greet").html("<h1>"+greetings[randomnumber]+"</h1>");

})