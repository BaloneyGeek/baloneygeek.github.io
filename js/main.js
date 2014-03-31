var resize_panels  = function() {
	var h_window = $(window).height() ;

	$(".bcg").css({
		"height": h_window
	});

	$(".hsContent").css({
		"margin-top": h_window / 2.75
	});

	$("#slide-5 .hsContent").css({
		"margin-top": h_window / 4.5
	});
}

$(window).on("load resize", function() {
  resize_panels();
});