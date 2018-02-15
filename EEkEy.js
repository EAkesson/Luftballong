function onDocumentKeyDown(event) {
	var keyCode = event.which;
	// up
	if (keyCode == 32) {
		propaneEnergy = 3*Math.pow(10,6)//46.357*Math.pow(10,6);
	}else if(keyCode == 17){
		parachuteVentOpen = true;
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