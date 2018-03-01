
function CalcPosition() {

	balloonTotalMass = balloonWeight + atmosphericPressure/(ideelGasConst*balloonTemp)*balloonVolume;

	//Y-AXIS VELOCITY AND POSISTION
	if(balloon.position.y <= earthRadius + 5){
		balloonSpeed.y = Math.max(balloonSpeed.y + steplength*(forceY/balloonTotalMass) , 0) //If the balloon touches the ground neglect negative acceleration
	}else{
		balloonSpeed.y = balloonSpeed.y + steplength*(forceY/balloonTotalMass);
	}
	balloon.position.y = balloon.position.y + steplength*balloonSpeed.y; // Set the position

	//X-AXIS VELOCITY AND POSISTION / Z-AXIS NEGATIVE EARTH ROTATION
	balloonSpeed.x = balloonSpeed.x + steplength*(forceX/balloonTotalMass);
	earth.rotation.z -= balloonSpeed.x / (balloon.position.y  + earthRadius); // The rotation is the angular velocity (w = v/r) in the opposite direction of the cartesian direction.

	//balloon.position.x = balloon.position.x + steplength*balloonSpeed.x; // Set the position

	//Z-AXIS VELOCITY AND POSISTION / X-AXIS NEGATIVE EARTH ROTATION
	balloonSpeed.z = balloonSpeed.z + steplength*(forceZ/balloonTotalMass);
	earth.rotation.x -= balloonSpeed.z / (balloon.position.y + earthRadius);
	//balloon.position.z = balloon.position.z + steplength*balloonSpeed.z; // Set the position
}
