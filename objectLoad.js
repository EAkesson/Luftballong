var obj;

function objectLoad( filePaths, posArray) {

	var loader = new THREE.OBJLoader(); //Creates loader

	for(var i = 0; i < filePaths.length; i++) {
		createObj(loader, filePaths[i], posArray[i]);
	}
}

function createObj(loader, file, pos){
	loader.load(file, function (group) {
		obj = group.children[0];
		obj.material = new THREE.MeshPhongMaterial();
		obj.color = new THREE.Color(0, 255, 0);
		obj.position.x = pos.x;
		obj.position.y = pos.y;
		obj.position.z = pos.z;
		obj.name = file.toString().split('.')[0].split("/").reverse()[0];
		scene.add(obj);
	})
}