var obj;
var pos = 0;

function objectLoad( filepaths ) {

	var loader = new THREE.OBJLoader(); //Creates loader

	for(var i in filepaths) {
		loader.load(filepaths[i], function (group) {
			obj = group.children[0];
			obj.material = new THREE.MeshPhongMaterial();
			obj.color = new THREE.Color(0, 255, 0);
			obj.position.x = pos;
			scene.add(obj);
			pos++;
		})
	}
}