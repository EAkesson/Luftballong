function onDocumentKeyDown(event) {
	var keyCode = event.which;
	// up
	if (keyCode == 32) {
		propaneEnergy = 3*Math.pow(10,6)//46.357*Math.pow(10,6);
	}else if(keyCode == 17){
		parachuteVentOpen = true;
	}else if (keyCode === 86) { //v
		if (cameraPick === 1){
			cameraPick = 2;
		} else if (cameraPick === 2) {
			cameraPick = 1;
		}
	}
};

function onDocumentKeyUp(event) {
	var keyCode = event.which;
	// up
	if (keyCode == 32) {
		propaneEnergy = 0;
	}else if(keyCode == 17){
		parachuteVentOpen = false;
	}

};

function onMouseMove(event) {
	if (this.enabled == false) return;

	var movementX = event.movementX = 0;
	var movementY = event.movementY = 0;

	yawObject.rotation.y -= movementX * 0.002;
	pitchObject.rotation.x -= movementY * 0.002;

	pitchObject.rotation.x = Math.max(-Math.PI / 2, Math.min( Math.PI / 2, pitchObject.rotation.x));
};


function onMouseWheel(event) {
	var scrollDirection = detectMouseWheelDirection(event);
	handleMouseWheelDirection(scrollDirection);
}

function handleMouseWheelDirection(direction){
	if (direction == 'down') {
		// To avoid wonky camera angles we limit the minimal value to 1.
		if (relativeCamPos == 1) {
			relativeCamPos = relativeCamPos;
		}
		else {
			relativeCamPos --;
		}
	} else if (direction == 'up') {
		relativeCamPos ++;
	} else {
		console.log("The scroll direction could not be detected");
	}
}

function detectMouseWheelDirection(event) {
	var delta = null, direction = false;

	if (!event) { //If the event is not provided, we get it from the window object?
		event = window.event;
	}

	if (event.wheelDelta) { // Will work in most cases
		delta = event.wheelDelta / 60;
		  } else if (evnet.detail) { // Fallback for Firefox
			delta = -event.detail / 2;
	}
	if ( delta !== null ) {
		direction = delta > 0 ? 'up' : 'down'
	}

	return direction;
}

