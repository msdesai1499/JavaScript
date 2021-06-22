console.log('This is tut 42');

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// function getData() {
// 	console.log("Starting Get Data");
// 	url = "abc.txt";
// 	fetch(url).then((response) => {
// 		console.log("Inside First then");
// 		return response.text();
// 	}).then((data) => {
// 		console.log("Inside Second then");
// 		console.log(data);
// 	})
// }
function getData() {
	console.log("Starting Get Data");
	url = "https://api.github.com/users";
	fetch(url).then((response) => {
		console.log("Inside First then");
		return response.json();
	}).then((data) => {
		console.log("Inside Second then");
		console.log(data);
	})
}
function postData() {

	url = "https://dummy.restapiexample.com/api/v1/create";

	data = `{"name":"Mandar","salary":"123","age":"23"}`
	params = {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	}
	fetch(url, params).then(response => response.json())
		.then(data => console.log(data))
}
console.log("Before Get Data");
postData();
console.log("After Get Data");