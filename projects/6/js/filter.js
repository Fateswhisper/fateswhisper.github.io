$(function() {

	var newSelection = "";
	
	$(".filter button").click(function(){
	
	    $(".portfolio").fadeTo(1000, 0.10);
	
		$(".filter button").removeClass("active");
		$(this).addClass("active");
		
		newSelection = $(this).attr("id");
		
		$(".filt").not("."+newSelection).hide(1600);
		$("."+newSelection).show(1600);
		
	    $(".portfolio").fadeTo(600, 1);
		
	});
})