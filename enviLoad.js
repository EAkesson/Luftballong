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

	var numofTrees = 500;
	var numofStones = 100;
	var numofGrass = 100;
	var numofFenc = 20;
	//Trees
	for(var i = 0; i < numofTrees; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randTree = Math.round(Math.random() * (objec.Enviroment.Trees.length-1));
		objToLoad[i] = objec.Enviroment.Trees[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Trees[randTree].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to loobjToLoad[i] = objec.Enviroment.Trees[randTree].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
	}

	//Stones
	for(var i = numofTrees+1; i < numofTrees+numofStones; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		var randStone = Math.round(Math.random() * (objec.Enviroment.Stones.length-1));
		objToLoad[i] = objec.Enviroment.Stones[randStone].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Stones[randStone].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to load
	}

	//Grass
	for(var i= numofTrees+numofStones; i < numofTrees+numofStones+numofGrass; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		//var randTree = Math.round(Math.random() * (objec.Enviroment.Other.length-1));
		objToLoad[i] = objec.Enviroment.Other[1].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Other[1].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to load
	}

	for(var i= numofTrees+numofStones+numofGrass; i < numofTrees+numofStones+numofGrass+numofFenc; i++){
		posforEnvObj[i] = new THREE.Vector3();
		rot[i] = new THREE.Vector2();
		randPos(posforEnvObj[i], rot[i]);
		//var randTree = Math.round(Math.random() * (objec.Enviroment.Other.length-1));
		objToLoad[i] = objec.Enviroment.Other[0].OBJpath.toString();//'EnviModels/Tree5.obj'; // String array to add filepath to the obj file that we want to load
		mtlToLoad[i]= objec.Enviroment.Other[0].MTLpath.toString();//'EnviModels/Tree5.mtl'; //// String array to add filepath to the mtl file that we want to load
	}


	objectLoad(objToLoad, mtlToLoad, posforEnvObj, rot, earth);


}

function randPos(posforEnvObj, rot){
	rot.x = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle
	rot.y = Math.random() * (fullTurn - (-1*fullTurn)) + (-1*fullTurn); //random angle
	posforEnvObj.x = earthRadius*Math.sin(rot.x)*Math.cos(rot.y);
	posforEnvObj.y = earthRadius*Math.cos(rot.x);
	posforEnvObj.z = earthRadius*Math.sin(rot.x)*Math.sin(rot.y);
}