

function CalcPosition() {

	balloonTotalMass = balloonWeight + atmosphericPressure/(ideelGasConst*balloonTemp)*balloonVolume;

	//Y-AXIS VELOCITY AND POSISTION
	if(balloon.position.y <=0){
		balloonSpeed.y = Math.max(balloonSpeed.y + steplength*(forceY/balloonTotalMass) , 0) //If the balloon touches the ground neglect negative acceleration
	}else{
		balloonSpeed.y = balloonSpeed.y + steplength*(forceY/balloonTotalMass);
	}
	balloon.position.y = balloon.position.y + steplength*balloonSpeed.y; // Set the position

	//X-AXIS VELOCITY AND POSISTION
	balloonSpeed.x = balloonSpeed.x + steplength*(forceX/balloonTotalMass);
	balloon.position.x = balloon.position.x + steplength*balloonSpeed.x; // Set the position

	//Z-AXIS VELOCITY AND POSISTION
	balloonSpeed.z = balloonSpeed.z + steplength*(forceZ/balloonTotalMass);
	balloon.position.z = balloon.position.z + steplength*balloonSpeed.z; // Set the position
}
