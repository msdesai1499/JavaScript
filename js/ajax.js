//Ajax Tutorial 
console.log('THis is ajax tutorial');


let fetchbtn = document.getElementById('fetchbtn');

fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

	console.log('Hello');
	//Instantiate the object
	const xhr = new XMLHttpRequest();

	//open the object
	// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
	xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
	xhr.getResponseHeader('Content-type', 'application/json');

	//What to do on progress
	xhr.onprogress = function () {
		console.log('On Progress');
	}

	xhr.onreadystatechange = function () {
		console.log(xhr.readyState);
	}
	// What to do when response is ready
	xhr.onload = function () {

		if (this.status === 200) {

			console.log(this.responseText);
		}
		else {

			console.log('Some Error Occured');
		}
	}

	//send the request
	params = `{"id": "1",
	"employee_name": "Tiger Nixon",
	"employee_salary": "320800",
	"employee_age": "61"}`;
	xhr.send(params);

	console.log('We are done');
}


let popbtn = document.getElementById('popbtn');

popbtn.addEventListener('click', popHandler);
function popHandler() {

	console.log('Hello');
	//Instantiate the object
	const xhr = new XMLHttpRequest();

	//open the object

	xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);




	// What to do when response is ready
	xhr.onload = function () {

		if (this.status === 200) {

			let obj = JSON.parse(this.responseText);
			console.log(obj);

			let list = document.getElementById('list');
			str = '';
			for (key in obj) {
				str = str + `<li>${obj[key].title} </li>`;
			}
			list.innerHTML = str;

		}
		else {

			console.log('Some Error Occured');
		}
	}

	xhr.send();


	console.log('We are done');
}
