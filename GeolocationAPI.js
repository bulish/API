var div = document.querySelector('#demo');
var div2 = document.querySelector('#demo2');

/*function getLocation() {
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                div.innerHTML = "not supported";
            }
        }
        function showPosition(position){
            div.innerHTML = "Latitude: " + position.coords.latitude + "<br>Logitude: " + position.coords.longitude;
        }*/

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		div.innerHTML = 'not supported';
	}
}

function showPosition(position) {
	div.innerHTML =
		'Latitude: ' +
		position.coords.latitude +
		'<br>Longitude: ' +
		position.coords.longitude +
		'<br>Accuracy: ' +
		position.coords.accuracy +
		'<br>Altitude: ' +
		position.coords.altitude + // unvaliable
		'<br>Altitude Accuracy: ' +
		position.coords.altitudeAccuracy + // unvaliable
		'<br>Heading: ' +
		position.coords.heading + // unvaliable
		'<br>Speed: ' +
		position.coords.speed + // unvaliable
		'<br>Timestamp: ' +
		position.timestamp;
}

function showError(error) {
	switch (error.core) {
		case error.PERMISSION_DENIED:
			div.innerHTML = 'User denied the request for Geolocation';
			break;
		case error.POSITION_UNVALIABLE:
			div.innerHTML = 'Your position is unvaliable';
			break;
		case error.TIMEOUT:
			div.innerHTML = 'Time out';
			break;
		case error.UNKNOWN_ERROR:
			div.innerHTML = 'Unknown error';
			break;
	}
}

// gets the position and updates it

function getLocation2() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition2);
	} else {
		div2.innerHTML = 'not supported';
	}
}

function showPosition2(position) {
	div2.innerHTML =
		'Latitude: ' +
		position.coords.latitude +
		'<br> Longitude: ' +
		position.coords.longitude;
}
