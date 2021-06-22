console.log('this is tut 41');



// Arrow functions


// Regular functions
// function abc() {

// 	console.log("Hello");
// }
// const abc = function () {

// 	console.log("Hello");
// }

// Converting it to Arrow functions
// const abc = () => {

// 	console.log("Hello");
// }

//One liners do not require braces no need of return
// const greet = () => "hello";
// const greet = () => ({ name: "Mandar" });

//Single Parameters do not need Parenthesis
// const greet = name => "Good Morning " + name;

// But Parenthesis is required for multiple parameters
const greet = (name, sname) => "Good Morning " + name + " " + sname;


// abc();
console.log(greet("Mandar", "Desai"));