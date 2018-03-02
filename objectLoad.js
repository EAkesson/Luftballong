var obj;

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function objectLoad( objPaths, mtlPath, posArray, rotarr, paren) {

	THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader()); // Not really sure what this is doing

	for (var i = 0; i < objPaths.length; i++) {
		if(arguments.length == 5){
			createObj(objPaths[i], mtlPath[i], posArray[i], rotarr[i], paren);
		}else{
			createObj(objPaths[i], mtlPath[i], posArray[i], rotarr, paren);
		}

	}
}

function createObj(object, mtl,  pos, rot, paren){

	var mtlLoader = new THREE.MTLLoader();

	mtlLoader.setMaterialOptions({ side: THREE.DoubleSide});
	mtlLoader.load(mtl, function (materials) {

		materials.preload();
		loadObj(object, pos, materials, rot, paren);
	}, onProgress , onError)
}

function loadObj(object, pos, materials, rot, paren){

	var objLoader = new THREE.OBJLoader();

	objLoader.setMaterials( materials );
	objLoader.load(object, function(group) {
		obj = group;
		obj.position.x = pos.x;
		obj.position.y = pos.y;
		obj.position.z = pos.z;
		obj.name = object.toString().split('.')[0].split("/").reverse()[0];
		console.log(arguments.length);
		if(paren != undefined){
			obj.rotation.z = -rot.x;
			obj.rotation.y = -rot.y;
			paren.add(obj);
		}else{
			console.log("hej")
			scene.add(obj);
		}

	}, onProgress , onError)
}
