
var windDir = new THREE.Vector3(0, 0, 0);
var windSpeed = new THREE.Vector3(0, 0, 0);
var wspeedArray = new Array();
var maxWind = 5;
var normWindSpeed;

// Create arrow to visualize wind
var arrowPos = new THREE.Vector3( -20, 0, 50 );
var arrowLength = 10;
var arrowHex = 0xffff00;
var arrowHelper = new THREE.ArrowHelper( windDir, arrowPos, arrowLength, arrowHex );


function getWindinPoint(){

	// Set normalized wind direction for current position
	windDir.x = Math.sin(Math.pow(Math.sin(balloon.position.x/100),1) + balloon.position.z/50);
	windDir.y = 1+1;
	windDir.z = Math.cos(balloon.position.x/50 + Math.pow(balloon.position.z/100, 1));
	windDir.normalize();

	updateWindSpeed1();

	// Set wind velocity for current position
	windVelocity.x = windDir.x*windSpeed.x;
	windVelocity.y = windDir.y*windSpeed.y;
	windVelocity.z = windDir.z*windSpeed.z;

	// Render wind arrow
	RenderWind();
}

function updateWindSpeed1(){

	// Remove wind from last slot
	while(wspeedArray.length >= 100){
		wspeedArray.pop();
	}

	// Add wind to first slot
	wspeedArray.unshift(remap(windDir, 0, 1, 0, maxWind));

	windSpeed.x = 0;
	windSpeed.y = 0;
	windSpeed.z = 0;

	// Calculate wind speed
	for(var i = 0; i < wspeedArray.length; i++){
		windSpeed.x += wspeedArray[i].x * (1-i/100);
		windSpeed.y += wspeedArray[i].y * (1-i/100);
		windSpeed.z += wspeedArray[i].z * (1-i/100);
	}

	windSpeed.x = windSpeed.x/(wspeedArray.length/2+0.5) // normWindSpeed.reduce(sumVector);
	windSpeed.y = windSpeed.y/(wspeedArray.length/2+0.5);
	windSpeed.z = windSpeed.z/(wspeedArray.length/2+0.5);


}

function updateWindSpeed2() {

	windSpeed = remap(windDir, 0, 1, 0, maxWind);

	for(var i = 0; i < wspeedArray.length; i++){
		windSpeed.x += wspeedArray[i].x * (1-i/100);
		windSpeed.y += wspeedArray[i].y * (1-i/100);
		windSpeed.z += wspeedArray[i].z * (1-i/100);
	}

	windSpeed.x = windSpeed.x/((wspeedArray.length/2+0.5)+1);
	windSpeed.y = windSpeed.y/((wspeedArray.length/2+0.5)+1);
	windSpeed.z = windSpeed.z/((wspeedArray.length/2+0.5)+1);

	wspeedArray.unshift(windSpeed);

	// Remove last slot to keep array length = 10
	while(wspeedArray.length >= 10){
		wspeedArray.pop();
	}

}
function sumVector(a, b) {
	return a+b;
}

function remap(val, lRange1, hRange1, lRange2, hRange2){

	rx = lRange2 + (hRange2 - lRange2) * (Math.abs(val.x) - lRange1)/(hRange1 - lRange1);
	ry = lRange2 + (hRange2 - lRange2) * (Math.abs(val.y) - lRange1)/(hRange1 - lRange1);
	rz = lRange2 + (hRange2 - lRange2) * (Math.abs(val.z) - lRange1)/(hRange1 - lRange1);

	return new THREE.Vector3(rx, ry, rz);
}

function RenderWind() {
	arrowHelper.setDirection(windDir);
}
