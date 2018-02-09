	var steplength = 0.001;

	var airTemp = 293; // Kelvin (20C)
	var atmosphericPressure = 101000; // Pa
	var ideelGasConst = 287; // ?
	var airResistanceforSphere = 0.47;
	var airDensity = 1.2; // For 20c air

	var balloonTemp = airTemp;  // Kelvin
	var balloonVolume = 2800; // m^3
	var balloonWeight = 724; // kg
	var balloonCrossArea = ((balloonVolume*3/(4*Math.PI))^(1/3))^2 * Math.PI;
	var balloonSpeed = new THREE.Vector3( 0, 7, 0 ); // m/s
	var balloonTotalMass;

	var gravitationalAcc = 9.82; // m/s^2
	var windSpeed = new THREE.Vector3( 1, 1, 1 ); // m/s

	var specificHeatCapacity_Air = 720; // At constant volume
	var propaneEnergy = 5*10^6;
