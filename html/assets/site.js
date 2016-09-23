document.addEventListener('DOMContentLoaded', function() {
	ninjaFace();
});

function ninjaFace() {
	var screenWidth = document.body.clientWidth;
	var screenHeight = document.body.clientHeight;
	var mouseXPct = 0.5;
	var mouseYPct = 0.5;

	document.body.addEventListener('mousemove', function(event) {
		mouseXPct = event.clientX / screenWidth;
		mouseYPct = event.clientY / screenHeight;

		calculateNinjaFace();
	});

	window.addEventListener('resize', function(event) {
		screenWidth = document.body.clientWidth;
		screenHeight = document.body.clientHeight;

		calculateNinjaFace();
	});

	function calculateNinjaFace() {
		calculateMaskTop();
		calculateEyes();
		calculateMaskBottom();
		calculateTie();
	}

	function calculateMaskTop() {
		var maskTop = document.querySelector('.mask-top');
		var maskBrow = document.querySelector('.brow');

		var topAllowX = 10;
		var maskTopAllowY = 20;
		var maskBrowAllowY = 10;

		maskTop.style.top = -(topAllowX * mouseXPct - (topAllowX / 2)) + 'px';
		maskTop.style.left = (maskTopAllowY * mouseYPct - (maskTopAllowY / 2)) + 'px';

		maskBrow.style.top = -(topAllowX * mouseXPct - (topAllowX / 2)) + 'px';
		maskBrow.style.left = (maskBrowAllowY * mouseYPct - (maskBrowAllowY / 2)) + 'px';
	}

	function calculateEyes() {
		var eyes = document.querySelector('.eyes');
		var xAllow = 40;
		var yAllow = 30;

		eyes.style.top = -(xAllow * mouseXPct - (xAllow / 2) + 10) + 'px';
		eyes.style.left = (yAllow * mouseYPct - (yAllow / 2)) + 'px';
	}

	function calculateMaskBottom() {
		var maskMouth = document.querySelector('.mask-mouth');
		var maskBottom = document.querySelector('.mask-bottom');

		var bottomAllowX = 10;
		var maskMouthAllowY = 10;
		var maskBottomAllowY = 20;

		maskMouth.style.top = -(bottomAllowX * mouseXPct - (bottomAllowX / 2)) + 'px';
		maskMouth.style.left = (maskMouthAllowY * mouseYPct - (maskMouthAllowY / 2)) + 'px';

		maskBottom.style.top = -(bottomAllowX * mouseXPct - (bottomAllowX / 2)) + 'px';
		maskBottom.style.left = (maskBottomAllowY * mouseYPct - (maskBottomAllowY / 2)) + 'px';
	}

	function calculateTie() {
		var maskTie = document.querySelector('.mask-tie');
		var xAllow = 10;
		var yAllow = 10;

		maskTie.style.top = -((xAllow * mouseXPct - (xAllow / 2)) - 220) + 'px';
		maskTie.style.left = ((yAllow * mouseYPct - (yAllow / 2)) - 440) + 'px';


	// 	maskTie.style.top = (xMove + 220) + 'px';
	// 	maskTie.style.left = (yMove - 440) + 'px';
	}
}