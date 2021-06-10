// Datatypes
// Primitive Datatype (Stack) -String,numbers,booolean,null,undefined,symbol
// Reference Datatype (Heap) - Arrays,object Literals,functions,dates

// String -> 'Mandar'
// numbers -> 34
// boolean -> true/false
//null -> intetional empty value
//undefined -> default value undefined
// symbol 


// Primitive Datatypes

// String
var name='Mandar';
console.log('My name is '+name);
console.log('Datatype is '+typeof(name));

// Numbers
let marks=34.4;
console.log('Datatype is '+typeof(marks));

// Boolean
let isDriver=true;
console.log('Datatype is '+typeof(isDriver));

// Null
let nullVar=null;
console.log('Datatype is '+typeof(nullVar));

// Undefined
let undef=undefined;
console.log('Datatype is '+typeof(undef));


// Reference Datatypes

// Arrays
let myarr=[1,2,3,4,false,'string'];
console.log('Datatype is '+typeof(myarr));

// Object literals
let stMarks={
	mandar:34,
	yogesh:33,
	gaurav:32
};
console.log(stMarks);
console.log('Datatype is '+typeof(stMarks));

// functions
function findName() {
	
}
console.log('Datatype is '+typeof(findName));

// date
let date=new Date();
console.log('Datatype is '+typeof(date));