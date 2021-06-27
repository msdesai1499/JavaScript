console.log('This is tut 47');

// let regex = /mandar/i;


//Meta character symbols

let regex = /^H/;// ^ means expr will match when string starts with H
regex = /ing$/;// $ at the end of the string means string ends with
regex = /Mand.r/;// Matches any one character
regex = /M*ndar/;// Matches zero or more character
regex = /Ma?ndar/;// ? after character means character is optional
regex = /Ma\?ndar/;// ? after character means character is optional
let str = 'Hello my name is Ma?ndar and Mandar is good boy and Mandar loves coding';

let result = regex.exec(str);
console.log('The result form exec is ', result);


if (regex.test(str)) {
	console.log(`The String ${str} matches the expression ${regex.source}`);
}
else {
	console.log(`The String does not matches the expression ${regex.source}`);
}