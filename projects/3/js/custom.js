$(document).ready(function() {
	
	$("html").css("display", "none");

    $("html").fadeIn(2000);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("html").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
