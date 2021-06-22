console.log('This is tut 42');

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

function getData() {
	console.log("Starting Get Data");
	url = "abc.txt";
	fetch(url).then((response) => {
		console.log("Inside First then");
		return response.text();
	}).then((data) => {
		console.log("Inside Second then");
		console.log(data);
	})
}
console.log("Before Get Data");
getData();
console.log("After Get Data");