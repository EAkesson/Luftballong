var fullTurn = 2*Math.PI;

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function enviLoad(enviObj, enviMtl){

	var theta = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle
	var phi = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle

	obj.position.x = earthRadius*Math.sin(theta)*Math.cos(phi);
	obj.position.y = earthRadius*Math.cos(theta);
	obj.position.z = earthRadius*Math.sin(theta)*Math.sin(phi);

	obj.rotation.x = phi;
	obj.rotation.y = theta;

}