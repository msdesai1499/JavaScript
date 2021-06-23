console.log('This is tut 43');


const abc = async () => {
	console.log('Inside Function');

	const response = await fetch('https://api.github.com/users');
	console.log('Before response');

	const users = await response.json();

	console.log('Users Resolved');

	return users;
}
console.log('Before calling');



abc().then(data => console.log(data));
console.log('After calling');

console.log('last line ');