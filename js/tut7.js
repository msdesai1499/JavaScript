console.log('Welcome to Tut 7');
let marks=[45,32,67,44,88,76];
const fruits=['Orange','Mango','Apple'];
const mixed=['str',34,[3,5]];

const arr=new Array(10,20,30,'Hello');
console.log(arr);
console.log(marks);
console.log(fruits[2]);
console.log(mixed[0]);

console.log(arr.length);
console.log(Array.isArray(arr));
arr[0]='Mandar';
let arrEle=arr[1];
console.log('element',arrEle);
console.log(arr);

let value=marks.indexOf(32);
console.log(value);

// Mutating ot Modifying Arrays
marks.push(35);
console.log(marks);
marks.unshift(11);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);

marks.splice(1,2);//First parameter is index 
//and second parameter is how much element to //remove
console.log(marks);

marks.reverse();
console.log(marks);

let marks2=[3,4,7];
marks=marks.concat(marks2);
console.log(marks);

let myobj={
	'First Name':'mandar',
	aim:'To be software engineer',
	age:19,
	isactive:true
}
console.log(myobj);
console.log(myobj.age);
console.log(myobj.aim);
console.log(myobj['isactive']);
console.log(myobj['First Name']);

