
var forceZ;
var forceX;
var forceY;

function CalcForces() {

	CalcNewTemp(); //Update the balloontemperature

	//Y FORCES
	var forceLift = ((1/airTemp-1/balloonTemp)*atmosphericPressure/ideelGasConst*balloonVolume)*gravitationalAcc;
	var forceWindY = airResistanceforSphere*airDensity*(windSpeed.y*Math.abs(windSpeed.y))*balloonCrossArea*0.5;
	var forceUp = forceLift + forceWindY;

	var forceGravity = balloonWeight*gravitationalAcc;
	var forceDragY = airResistanceforSphere*airDensity*(balloonSpeed.y*Math.abs(balloonSpeed.y))*balloonCrossArea*0.5;

	var forceDown = forceGravity + forceDragY;
	forceY = forceUp - forceDown;

	//X FORCES
	var forceDragX = airResistanceforSphere*airDensity*(balloonSpeed.x*Math.abs(balloonSpeed.x))*balloonCrossArea*0.5;
	var forceWindX = airResistanceforSphere*airDensity*(windSpeed.x*Math.abs(windSpeed.x))*balloonCrossArea*0.5;
	forceX = forceWindX - forceDragX;

	//Z FORCES
	var forceDragZ = airResistanceforSphere*airDensity*(balloonSpeed.z*Math.abs(balloonSpeed.z))*balloonCrossArea*0.5;
	var forceWindZ = airResistanceforSphere*airDensity*(windSpeed.z*Math.abs(windSpeed.z))*balloonCrossArea*0.5;
	forceZ = forceWindZ - forceDragZ;
}

function CalcNewTemp() {

	balloonTemp = balloonTemp + (propaneEnergy*(1/fps)/(airDensity*balloonVolume*specificHeatCapacity_Air));  //En gasbrännare 3-4MW

	if(parachuteVentOpen){
		var airFlow =  parachuteVentDC*parachuteVentArea*Math.sqrt(2*gravitationalAcc*balloonRadius*2*(balloonTemp-airTemp)/balloonTemp);
		balloonTemp = (balloonTemp*(balloonVolume-airFlow*(1/fps)) + airTemp*airFlow*(1/fps))/balloonVolume;
	}

	if(balloonTemp > airTemp){
		TempLoss();
	}

	console.log(balloonSpeed.y + " : " + balloonTemp);
	timeSinceLastRender.getElapsedTime();

	//TODO ha med minskande temperatur iom omgivning
}

function TempLoss() {

	var energyTransfer = (nylonthermalcond*balloonArea/balloonNylonThickness*(balloonTemp-airTemp))*steplength; // Joule
	var ballonEnergy = balloonVolume*airDensity*specificHeatCapacity_Air*balloonTemp - energyTransfer;
	balloonTemp = ballonEnergy / (balloonVolume*airDensity*specificHeatCapacity_Air);

}
