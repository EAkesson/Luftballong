
var forceZ;
var forceX;
var forceY;

function Calcforces() {

	CalcNewTemp(); //Update the balloontemperature

	//Y FORCES
	var forceLift = ((1/airTemp-1/balloonTemp)*atmosphericPressure/ideelGasConst*balloonVolume)*gravitationalAcc;
	var forceUp = forceLift;

	var forceGravity = balloonWeight*gravitationalAcc;
	var forceDragY = airResistanceforSphere*airDensity*(balloonSpeed.y*Math.abs(balloonSpeed.y))*balloonCrossArea*0.5;
	//var forceWindY = airResistanceforSphere*airDensity*(windSpeed.y*Math.abs(windSpeed.y))*balloonCrossArea*0.5;
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
	//button pressed
	balloonTemp = balloonTemp + (propaneEnergy/(airDensity*balloonVolume*specificHeatCapacity_Air));
	//TODO ha med minskande temperatur iom omgivning
}
