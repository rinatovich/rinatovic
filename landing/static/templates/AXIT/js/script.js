$(document).ready(function() {
	
/*****Fixed Header********/
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize",function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH){
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}		
	}


	let nav = $("#nav");

	/*********MenuDrawer********/
	$("#navToggle").on("click", function(event){
		event.preventDefault();

		nav.toggleClass('show');
	})



/********Smooth scroll******/
	
	$("[data-scroll]").on("click resize",function(event){
		event.preventDefault();


		let blockID = $(this).data("scroll");
		let elementOffset = $(blockID).offset().top;
		
		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset 	
		},1000);
	});



});