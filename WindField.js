
var windField;
//TODO Kanske köra så att vi inte har ett vektorfält utan kör sin och cosin formel för riktnignen på vår vind.
function CreateWindField() {
	windField = new Array();
	var px = 3;
	var py = 3;
	var pz = 3;

	// Create points with directions
	for(var x = 0; x < px; x++){
		for(var y = 0; y < py; y++){
			for (var z = 0; z < pz; z++) {
				//console.log(z);
				windField.push(new THREE.Ray(new THREE.Vector3(balloon.position.x - ((px/2-0.5)-x), balloon.position.y - ((px/2-0.5)-y), balloon.position.z - ((px/2-0.5)-z)), new THREE.Vector3(2, 0, 1)));
			}
		}
	}

}

function UpdateWindfield() {
	for(var x = 0; x < px; x++){
		for(var y = 0; y < py; y++){
			for (var z = 0; z < pz; z++) {
				//console.log(z);
				windField.push(new THREE.Ray(new THREE.Vector3(balloon.position.x - ((px/2-0.5)-x), balloon.position.y - ((px/2-0.5)-y), balloon.position.z - ((px/2-0.5)-z)), new THREE.Vector3(2, 0, 1)));
			}
		}
	}
}



function RenderWind() {

	for(var i = 0; i < windField.length; i++){

		var length = 1;

		var arrowHelper = new THREE.ArrowHelper( windField[i].direction, windField[i].origin, 0.5, 0xffff00 );
		scene.add( arrowHelper );
	}
}
