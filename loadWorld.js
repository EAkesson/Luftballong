function loadWorld() {

	// Sphere
	var balloonGeometry = new THREE.SphereGeometry( 5, 32, 32 );
	var balloonMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
	balloon = new THREE.Mesh( balloonGeometry, balloonMaterial );


	var earthGeometry = new THREE.SphereGeometry( earthRadius, 8, 8 );
	var earthMaterial = new THREE.MeshBasicMaterial( {color: 0x225500 });
	earth = new THREE.Mesh( earthGeometry, earthMaterial );

	balloon.position.y = earthRadius + 5;
	scene.add( balloon );
	scene.add( earth );

	scene.add( arrowHelper ); //TODO SET THIS IN THA HOOD
}