var obj;

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete, 2) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function objectLoad( objPaths, mtlPath, posArray) {

	THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader()); // Not really sure what this is doing

	var objLoader = new THREE.OBJLoader(); //Creates loader
	var mtlLoader = new THREE.MTLLoader();

	for (var i = 0; i < objPaths.length; i++) {
		createObj(objLoader, mtlLoader, objPaths[i], mtlPath[i], posArray[i]);
	}
}

function createObj(objLoader, mtlLoader, object, mtl,  pos){

	mtlLoader.setMaterialOptions({ side: THREE.DoubleSide});
	mtlLoader.load(mtl, function (materials) {

		materials.preload();
		loadObj(objLoader, object, pos, materials);
	}, onProgress , onError)
}

function loadObj(objLoader, object, pos, materials){

	objLoader.setMaterials( materials );
	objLoader.load(object, function(group) {
		group.position.x = pos.x;
		group.position.y = pos.y;
		group.position.z = pos.z;
		group.name = object.toString().split('.')[0].split("/").reverse()[0];
		scene.add(group);
	}, onProgress , onError)
}
