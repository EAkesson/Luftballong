
var HUDrender = function () {
    setTimeout( function() {

        requestAnimationFrame( HUDrender );

        updateHUD();

    }, 1000 / fps );
};

HUDrender();

function updateHUD(){
    document.getElementById("temperature").innerHTML = "Balloon temperature: " + Math.round((balloonTemp-273.15)) + ' &#8451;';
    document.getElementById("height").innerHTML = "Height from ground: " + Math.round((balloon.position.y - earthRadius)) + " m";
    document.getElementById("balloonspeed").innerHTML = "Balloon speed: " + Math.round(balloonSpeed.length()*10)/10 +  " m/s";
    document.getElementById("windspeed").innerHTML = "Wind speed: " + Math.round(windVelocity.length()*10)/10 +  " m/s";
    console.log(balloonSpeed);
}