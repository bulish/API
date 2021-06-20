function check(event) {
	event.preventDefault();

	var div = document.querySelector('#demo');
	var theName = document.myForm.theName.value;
	var thePassword = document.myForm.thePassword.value;

	localStorage.setItem('name', 'Uršula Pokorná');
	localStorage.setItem('password', '123456789');

	var checkName = localStorage.getItem('name');
	var checkPassword = localStorage.getItem('password');

	if (theName == checkName && thePassword == checkPassword) {
		div.innerHTML = 'Successful';
	} else {
		div.innerHTML = 'Password or Name is incorrect';
	}

	var x = localStorage.length;
	console.log(x);
}

// The sessionStorage object is identical to the localStorage object.
// The difference is that the sessionStorage object stores data for one session.
// The data is deleted when the browser is closed.
