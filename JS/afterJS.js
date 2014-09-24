var nav = responsiveNav(".nav-collapse", {
  label: "<i class=\"fa fa-bars\"></i>", // Label for the navigation toggle
  insert: "after", // String: Insert the toggle before or after the navigation
  closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
  open: function(){}, // Function: Open callback
  close: function(){}
});

$(document).foundation();