console.log('Welcome to project 4');


const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');

name.addEventListener('blur', () => {
	name.classList.remove('is-valid');
	name.classList.remove('is-invalid');
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let str = name.value;
	// console.log(regex, str);	
	if (regex.test(str)) {
		console.log("It Matched");
		name.classList.add('is-valid');
	}
	else {
		console.log('No match');
		name.classList.add('is-invalid');
	}
})
email.addEventListener('blur', () => {
	email.classList.remove('is-valid');
	email.classList.remove('is-invalid');
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let str = email.value;
	// console.log(regex, str);	
	if (regex.test(str)) {
		console.log("It Matched");
		email.classList.add('is-valid');
	}
	else {
		console.log('No match');
		email.classList.add('is-invalid');
	}
})
password.addEventListener('blur', () => {
	password.classList.remove('is-valid');
	password.classList.remove('is-invalid');
	let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
	let str = password.value;
	// console.log(regex, str);	
	if (regex.test(str)) {
		console.log("It Matched");
		password.classList.add('is-valid');
	}
	else {
		console.log('No match');
		password.classList.add('is-invalid');
	}
})
phone.addEventListener('blur', () => {
	phone.classList.remove('is-valid');
	phone.classList.remove('is-invalid');
	let regex = /^(\+91)?[789][0-9]{9}$/;
	let str = phone.value;
	// console.log(regex, str);	
	if (regex.test(str)) {
		console.log("It Matched");
		phone.classList.add('is-valid');
	}
	else {
		console.log('No match');
		phone.classList.add('is-invalid');
	}
})