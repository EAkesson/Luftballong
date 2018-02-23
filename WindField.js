var deltaY = 0;
var deltaT = 0;
var newWind = new THREE.Vector3();
var oldWind = new THREE.Vector3();
var maxWind = 3;


// Create arrow to visualize wind
var arrowPos = new THREE.Vector3( -20, 0, 50 );
var arrowLength = 5;
var arrowHex = 0xffff00;
var arrowDir = new THREE.Vector3();
var arrowHelper = new THREE.ArrowHelper( arrowDir, arrowPos, arrowLength, arrowHex );

function WindUpdate(){

	deltaT++;
	deltaY += steplength*balloonSpeed.y;

	if(Math.abs(deltaY) > 20 || deltaT > fps*30){
		GenerateNewWind();
		deltaY = 0;
		deltaT = 0;
	}
	else if(deltaT <= 3*fps){
		windVelocity.lerpVectors(oldWind, newWind, deltaT/(3*fps) ); //deltaT/(3*fps)
		arrowDir = windVelocity.clone();
	}

	RenderWind();

}

function GenerateNewWind(){
	newWind.x = Math.random()* maxWind*2-maxWind;
	newWind.y = Math.random()* maxWind*2-maxWind;
	newWind.z = Math.random()* maxWind*2-maxWind;
	oldWind = windVelocity.clone();
}

function RenderWind() {
	arrowHelper.setDirection(arrowDir.normalize());
}
