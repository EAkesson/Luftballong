var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function enviLoad(enviObj, enviMtl){

	var objLoader = new THREE.OBJLoader();
	var mtlLoader = new THREE.MTLLoader();


}