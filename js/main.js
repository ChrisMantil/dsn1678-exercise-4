var $win = $(window);
var $sun = $(".sun");
var $sunSection = $(".sun-section")
var $dipperSection = $(".dipper-section");
var $dipper = $(".dipper");
var $shuttle = $(".shuttle");
var $shuttleSection = $(".shuttle-section");
var $spaceshipSection = $(".spaceship-section");
var $ship = $(".ship");

$win.on("scroll", function () {
	var scrollPos = $win.scrollTop();

	$sun.css("transform", "rotate(" + scrollPos / 5 + "deg)");

	$sunSection.css("background-position", "center " + scrollPos / 2 + "px");

	$spaceshipSection.css("background-position", "center " + scrollPos / 2 + "px");

});



$dipperSection.waypoint(function () {
	$dipper.addClass("js-dipper-fade");

}, {offset: "50%" });

$shuttleSection.waypoint(function () {
	$shuttle.addClass("js-shuttle-animation");

}, {offset: "50%" });

$spaceshipSection.waypoint(function () {
	$ship.addClass("js-ship-animation");

}, {offset: "50%" });
