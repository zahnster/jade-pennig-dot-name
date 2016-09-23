document.addEventListener('DOMContentLoaded', function() {
	ninjaFace();
});

function ninjaFace() {
	var screenWidth = document.body.clientWidth;
	var screenHeight = document.body.clientHeight;
	
	var mouseXPct = 0.5;
	var mouseYPct = 0.5;

	var eyesAllowX = 60;
	var eyesAllowY = 60;
	
	var maskAllowX = 25;
	var outerAllowY = 45;
	var innerAllowY = 10;

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
		var topMoveY, browMoveY;

		if (mouseYPct > 0.5) {
			topMoveY = outerAllowY;
			browMoveY = innerAllowY;
		}
		else {
			topMoveY = innerAllowY;
			browMoveY = outerAllowY;
		}

		maskBrow.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'px';
		maskBrow.style.left = (browMoveY * mouseYPct - (browMoveY / 2)) + 'px';

		maskTop.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'px';
		maskTop.style.left = (topMoveY * mouseYPct - (topMoveY / 2)) + 'px';
	}

	function calculateEyes() {
		var eyes = document.querySelector('.eyes');

		eyes.style.top = -(eyesAllowX * mouseXPct - (eyesAllowX / 2) + 10) + 'px';
		eyes.style.left = (eyesAllowY * mouseYPct - (eyesAllowY / 2)) + 'px';
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

		maskMouth.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'px';
		maskMouth.style.left = (mouthMoveY * mouseYPct - (mouthMoveY / 2)) + 'px';

		maskBottom.style.top = -(maskAllowX * mouseXPct - (maskAllowX / 2)) + 'px';
		maskBottom.style.left = (maskMoveY * mouseYPct - (maskMoveY / 2)) + 'px';
	}

	function calculateTie() {
		var maskTie = document.querySelector('.mask-tie');

		maskTie.style.top = -((maskAllowX * mouseXPct - (maskAllowX / 2)) - 220) + 'px';
		maskTie.style.left = ((innerAllowY * mouseYPct - (innerAllowY / 2)) - 440) + 'px';
	}
}