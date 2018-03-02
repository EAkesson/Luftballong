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
	}, 20000);

	var earthGeometry = new THREE.SphereGeometry( earthRadius, 200, 200 );
	var earthMaterial = new THREE.MeshLambertMaterial({color: 0x005500});
	/*var earthMaterial = new THREE.MeshPhongMaterial( {
		map: new THREE.TextureLoader().load("EnviModels/Map__3_Dent.png")
	 } );
	earthMaterial.map.wrapS = THREE.RepeatWrapping;
	earthMaterial.map.wrapT = THREE.RepeatWrapping;
	earthMaterial.map.repeat.set( 20, 20 );*/
	earth = new THREE.Mesh( earthGeometry, earthMaterial );
	earth.receiveShadow = true;
	scene.add( earth );
	earth.rotation.x = 1;

		var geometry = new THREE.SphereGeometry(earthRadius+200, 60, 40);
	var material = new THREE.MeshPhongMaterial( {
		map: new THREE.TextureLoader().load("EnviModels/Sky019.jpg")
	} );
	skyBox = new THREE.Mesh(geometry, material);
	skyBox.material.side = THREE.BackSide;
	earth.add(skyBox);



	var ambient = new THREE.AmbientLight('#777', 1.2); // Important to be able to see any object loaded my objectLoad()
	scene.add(ambient);

	light = new THREE.PointLight( 0xf55e2f, 10, 300, 2);
	light.position.set( 50, earthRadius + 100, -100 );
	light.castShadow = true;            // default false

	earth.add( light );

	//Set up shadow properties for the light
	light.shadow.mapSize.width = 1024;  // default
	light.shadow.mapSize.height = 1024; // default
	light.shadow.camera.near = 0.5;       // default
	light.shadow.camera.far = 10000      // default


	var helper = new THREE.CameraHelper( light.shadow.camera );
	scene.add( helper );

	enviLoad();

}


