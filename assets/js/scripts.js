$(document).ready(function() {
	$(".hamburger-menu-top").click(function(event) {
		event.stopPropagation();
		if ($(".main-nav").hasClass("active")) {
			$(".main-nav").removeClass("active");
			console.log("close");
		} else {
			$(".main-nav").addClass("active");
			console.log("open");
		}
	});

	$(window).resize(function() {
		if ($(window).width() > 480) {
			$(".main-nav").removeClass("active");
		}
	});
});
