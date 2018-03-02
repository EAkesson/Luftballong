var fullTurn = 2*Math.PI;

var onProgress = function ( xhr ) {
	if ( xhr.lengthComputable ) {
		var percentComplete = xhr.loaded / xhr.total * 100;
		console.log( Math.round(percentComplete) + '% downloaded' );
	}
};

var onError = function ( xhr ) { };

function enviLoad(){

	var objToLoad = new Array();
	var mtlToLoad = new Array();
	var posforEnvObj = new Array();
	var rot = new Array();

	for(var i= 0; i < 500; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randTree = Math.round(Math.random() * 4);
		//objToLoad[i] = objec.Enviroment.Trees[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		objToLoad[i] = objec.Enviroment.Stones[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		//mtlToLoad[i]= objec.Enviroment.Trees[randTree].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to loobjToLoad[i] = objec.Enviroment.Trees[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Stones[randTree].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to lo
		//objectLoad(objec.Enviroment.Trees[randTree].OBJpath.toString(), objec.Enviroment.Trees[randTree].MTLpath.toString(), posforEnvObj, earth);

	}

	objectLoad(objToLoad, mtlToLoad, posforEnvObj, rot, earth);


	//obj.rotation.x = phi;
	//obj.rotation.y = theta;

}

function randPos(posforEnvObj, rot){
	rot.x = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle
	rot.y = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle
	posforEnvObj.x = earthRadius*Math.sin(rot.x)*Math.cos(rot.y);
	posforEnvObj.y = earthRadius*Math.cos(rot.x);
	posforEnvObj.z = earthRadius*Math.sin(rot.x)*Math.sin(rot.y);
}