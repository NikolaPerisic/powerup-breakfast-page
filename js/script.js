$(function () {
	$(document).scroll(function() {
		let $nav = $("#mainNavbar");
		$nav.toggleClass("nav-scrolling", $(this).scrollTop() > $nav.height());
	});
});