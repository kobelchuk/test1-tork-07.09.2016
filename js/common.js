$(function() {

	// Custom JS

	//toggle-mnu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	// open-close
	$(document).ready(function(){
		var button = $('.toggle-mnu');
		var open_close = $('.position__wrap, .header__top_buy');
		$(button).on('click', function(e) {
			e.preventDefault();
			open_close.slideToggle();
		});
	});

	//jquery-match-height
	$(function() {
		$('.eq').matchHeight();
	});

	//open tongue
	$(document).ready(function(){
		var button = $('.tongue');
		var open_close = $('.achiev');
		$(button).on('click', function(e) {
			e.preventDefault();
			open_close.slideToggle();
		});
	});

	//jquery-match-height-presentation__top
	$(function() {
		$('.match-height-v').matchHeight();
	});

	//jquery-match-height-presentation__middle
	$(function() {
		$('.match-height-v').matchHeight();
	});

	$(function() {
		$('.match-height-c').matchHeight();
	});

});
