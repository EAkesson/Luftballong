
	var fps = 30;
	var steplength = 1/fps;

	var airTemp = 293; // Kelvin (20C)
	var atmosphericPressure = 101000; // Pa
	var ideelGasConst = 287; // ?
	var airResistanceforSphere = 0.47;
	var airDensity = 1.2; // For 20c air

	var balloonTemp = 370;  // Kelvin
	var balloonVolume = 2800; // m^3
	var balloonWeight = 724; // kg
	var balloonRadius = (Math.pow((balloonVolume*3/(4*Math.PI)), 1/3 ));
	var balloonCrossArea = Math.pow(balloonRadius, 2) * Math.PI;
	var balloonArea = 4 * Math.PI * Math.pow(balloonRadius, 2);
	var balloonSpeed = new THREE.Vector3( 0, 0, 0 ); // m/s
	var balloonTotalMass;

	var balloonNylonThickness = 0.02;
	var nylonthermalcond = 0.25;

	var gravitationalAcc = 9.82; // m/s^2
	var windVelocity = new THREE.Vector3( 0, 0, 0); // m/s

	var specificHeatCapacity_Air = 720; // At constant volume
	var propaneEnergy = 0; //Amount of watt for burner

	var parachuteVentArea = Math.pow(balloonRadius/2, 2) * Math.PI;
	var parachuteVentDC = 0.65; //Discharge Coefficient for a chimney
	var parachuteVentOpen = false;

