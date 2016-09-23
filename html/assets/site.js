document.addEventListener('DOMContentLoaded', function() {
	eyeTracker();
});

function eyeTracker() {
	var screenWidth = document.body.clientWidth;
	var screenHeight = document.body.clientHeight;
	var mouseX = 0;
	var mouseY = 0;

	document.body.addEventListener('mousemove', function(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;

		calculateNinja();
	});

	window.addEventListener('resize', function(event) {
		screenWidth = document.body.clientWidth;
		screenHeight = document.body.clientHeight;

		calculateNinja();
	});

	function calculateNinja() {
		calculateEyes();
	}

	function calculateEyes() {
		var eyes = document.querySelector('.eyes');
		var pctX = mouseX / screenWidth;
		var pctY = mouseY / screenHeight;
		var xAllow = 40;
		var yAllow = 30;

		eyes.style.top = -(xAllow * pctX - (xAllow / 2)) + 'px';
		eyes.style.left = (yAllow * pctY - (yAllow / 2)) + 'px';
	}
}