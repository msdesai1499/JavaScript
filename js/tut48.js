console.log('This is tut 48');

// Regular Expression 

// Character Set 

let regex = /[madj]/i;//Can be any character from m,a,d or j
regex = /[a-z]/i;//Can be any character from a to z
regex = /M[^b]n/i;//Cannot be character b
regex = /M[a-zA-Z]n/i;//Can be any character from a to z or A to Z

//Quantifiers

regex = /Ma[n]{2}d/ //Ma should be followed by n exactly 2 times
regex = /Ma[n]{0,2}d/ //Ma should be followed by n 0 - 2  (0, 1, 2) times

//Groupings - we use parenthesis for grouping

regex = /(Man){2}/

const str = "Mandar Desai";


let result = regex.exec(str);
console.log('The result form exec is ', result);


if (regex.test(str)) {
	console.log(`The String ${str} matches the expression ${regex.source}`);
}
else {
	console.log(`The String does not matches the expression ${regex.source}`);
}