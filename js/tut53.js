console.log('This is tut 53');

//Generators in Javascript

function* numberGen() {
	let i = 0;

	// yield 1;
	// yield 2;
	// yield 3;
	// yield 4;

	while (true) {
		yield i++;
	}
}

const gen = numberGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);