console.log('This is tut 51');

//Iterators

function fruitIterator(values) {
	let nextIndex = 0;

	//We will return an object
	return {
		next: function () {
			if (nextIndex < values.length) {
				//We will return below object
				return {
					value: values[nextIndex++],
					done: false
				}

			}
			else {

				return { done: true }
			}
		}
	}

}

const myArray = ['Apple', 'Grapes', 'Oranges', 'Mangoes'];
console.log(myArray);

//Using the iterator

const fruits = fruitIterator(myArray);

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);