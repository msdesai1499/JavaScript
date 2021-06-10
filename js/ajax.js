console.log('THis is ajax tutorial');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
	console.log('You have clicked the button');
	//Instantiate an xhr object
	const xhr = new XMLHttpRequest();
	//Open the object
	// xhr.open('GET', 'https://jssonplaceholder.typicode.com/todos/1', true);
	//Use this for post request
	xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

	xhr.getResponseHeader('Content-type', 'application/json');

	//What to do on progress(optional)
	xhr.onprogress = function () {
		console.log('On Progress');
	}

	xhr.onreadystatechange = function () {
		console.log('Ready state is' + xhr.readyState);
	}
	//What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {

			console.log(this.responseText);
		}
		else {
			console.log('Some error occured');
		}
	}
	//Send the request
	params = `{"id": "1",
	"employee_name": "Tiger Nixon",
	"employee_salary": "320800",
	"employee_age": "61"}`;
	xhr.send(params);

	console.log('We are done');
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
	console.log('You have clicked the PopHander');
	//Instantiate an xhr object
	const xhr = new XMLHttpRequest();
	//Open the object
	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

	//What to do when response is ready
	xhr.onload = function () {
		if (this.status === 200) {

			let obj = JSON.parse(this.responseText);
			console.log(obj);
		}
		else {
			console.log('Some error occured');
		}
	}
	//Send the request
	xhr.send();
	console.log('We are done fetching employee data');
}