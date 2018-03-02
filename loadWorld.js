function loadWorld() {

	// Sphere
	//var balloonGeometry = new THREE.SphereGeometry( 5, 32, 32 );
	//var balloonMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
	//balloon = new THREE.Mesh( balloonGeometry, balloonMaterial );

	var objToLoad = ['balloon/Air_Balloon/realSizeBalloon1.obj']; // String array to add filepath to the obj file that we want to load
	var mtlToLoad = ['balloon/Air_Balloon/realSizeBalloon1.mtl']; //// String array to add filepath to the mtl file that we want to load
	var objPos = [new THREE.Vector3(0,0,0)];
	objectLoad(objToLoad, mtlToLoad, objPos); //Loaded object can be found using filename in childrens of scene

	setTimeout( function() {
		balloon = scene.getObjectByName("realSizeBalloon1");
		console.log(balloon);
		balloon.position.y = earthRadius;
	}, 5000);


	var earthGeometry = new THREE.SphereGeometry( earthRadius, 200, 200 );
	var earthMaterial = new THREE.MeshBasicMaterial( {color: 0x225500 });
	earth = new THREE.Mesh( earthGeometry, earthMaterial );

	scene.add( earth );

	var ambient = new THREE.AmbientLight('#fff'); // Important to be able to see any object loaded my objectLoad()
	scene.add(ambient);

	enviLoad();
	//scene.add( arrowHelper ); //TODO SET THIS IN THA HOOD
}
