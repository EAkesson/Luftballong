var obj;

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function objectLoad( objPaths, mtlPath, posArray) {

	THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader()); // Not really sure what this is doing

	for (var i = 0; i < objPaths.length; i++) {
		createObj(objPaths[i], mtlPath[i], posArray[i]);
	}
}

function createObj(object, mtl,  pos){

	var mtlLoader = new THREE.MTLLoader();

	mtlLoader.setMaterialOptions({ side: THREE.DoubleSide});
	mtlLoader.load(mtl, function (materials) {

		materials.preload();
		loadObj(object, pos, materials);
	}, onProgress , onError)
}

function loadObj(object, pos, materials){

	var objLoader = new THREE.OBJLoader();

	objLoader.setMaterials( materials );
	objLoader.load(object, function(group) {
		obj = group;
		obj.position.x = pos.x;
		obj.position.y = pos.y;
		obj.position.z = pos.z;
		obj.name = object.toString().split('.')[0].split("/").reverse()[0];
		scene.add(obj);
	}, onProgress , onError)
}
