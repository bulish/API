// History Object Methods

function goBack() {
	window.history.back();
}

function goForward() {
	window.history.forward();
}

function go() {
	window.history.go(-2);
}

// History Object Properties

function length() {
	document.querySelector('#demo').innerHTML += history.length;
}
