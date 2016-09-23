document.addEventListener('DOMContentLoaded', function() {
	remSizing();
	ninjaFace();
});

function remSizing() {
	function sizeToWindow() {
		var clientWidth = document.body.clientWidth;
		var clientHeight = document.body.clientHeight;
		var maxFontSize = 700;
		var htmlFontSize = (clientWidth > clientHeight) ? clientHeight : clientWidth;

		if (htmlFontSize > maxFontSize) {
			htmlFontSize = maxFontSize;
		}

		document.querySelector('html').style.fontSize = htmlFontSize + 'px';
	}

	window.addEventListener('resize', function() {
		sizeToWindow();
	});

	sizeToWindow();
}

function ninjaFace() {
	var screenWidth = document.body.clientWidth;
	var screenHeight = document.body.clientHeight;
	
	var mouseXPct = 0.5;
	var mouseYPct = 0.5;

	var eyesAllowX = 0.1;
	var eyesAllowY = 0.08;

	var maskAllowX = 0.04;
	var outerAllowY = 0.06;
	var innerAllowY = 0.01;

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
		calculateKnot();
	}

	function calculateMaskTop() {
		var maskTop = document.querySelector('.mask-top');
		var maskBrow = document.querySelector('.brow');
		var topMoveY, browMoveY;

		if (mouseYPct > 0.5) {
			topMoveY = outerAllowY;
			browMoveY = innerAllowY;
		}
		else {
			topMoveY = innerAllowY;
			browMoveY = outerAllowY;
		}

		maskBrow.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'rem';
		maskBrow.style.left = (browMoveY * mouseYPct - (browMoveY / 2)) + 'rem';

		maskTop.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'rem';
		maskTop.style.left = (topMoveY * mouseYPct - (topMoveY / 2)) + 'rem';
	}

	function calculateEyes() {
		var eyes = document.querySelector('.eyes');

		eyes.style.top = -(eyesAllowX * mouseXPct - (eyesAllowX / 2)) + 'rem';
		eyes.style.left = (eyesAllowY * mouseYPct - (eyesAllowY / 2)) + 'rem';
	}

	function calculateMaskBottom() {
		var maskMouth = document.querySelector('.mask-mouth');
		var maskBottom = document.querySelector('.mask-bottom');
		var mouthMoveY, bottomMoveY;

		if (mouseYPct > 0.5) {
			mouthMoveY = outerAllowY;
			maskMoveY = innerAllowY;
		}
		else {
			mouthMoveY = innerAllowY;
			maskMoveY = outerAllowY;
		}

		maskMouth.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'rem';
		maskMouth.style.left = (mouthMoveY * mouseYPct - (mouthMoveY / 2)) + 'rem';

		maskBottom.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'rem';
		maskBottom.style.left = (maskMoveY * mouseYPct - (maskMoveY / 2)) + 'rem';
	}

	function calculateKnot() {
		var maskKnot = document.querySelector('.mask-knot');
		var topAdjust = 0.35;
		var leftAdjust = 0.7;

		maskKnot.style.top = -((maskAllowX * mouseXPct - (maskAllowX / 2)) - topAdjust) + 'rem';
		maskKnot.style.left = ((innerAllowY * mouseYPct - (innerAllowY / 2)) - leftAdjust) + 'rem';
	}
}