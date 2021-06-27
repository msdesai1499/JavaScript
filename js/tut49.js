console.log('This is tut 49');


//Character classes

let regex = /\wdar/;//\w- word character - _ or alphabetor numbers
regex = /\w+dar/;//+ means one or more characters
regex = /\Wdar/; //\W -non word character
regex = /\W+dar/;
regex = /\d890/;//\d  -  digit
regex = /\d+890/;//\d  - digit
regex = /\D890/;//\D  -  Non digit
regex = /\D+890/;//\D  -  Non digit
regex = /\s123/;//\s  -  White space character
regex = /\s+123/;//\s  -  White space character
regex = /\S23/;//\s  -  Non-White space character
regex = /\S+23/;//\s  -  Non-White space character
regex = /dar\b/;//\s  -  Word Boundary

//Assertions 
regex = /M(?=a)/;
regex = /M(?!d)/;

const str = "Mandar Desai 1234567890";

let result = regex.exec(str);
console.log('The result form exec is ', result);


if (regex.test(str)) {
	console.log(`The String ${str} matches the expression ${regex.source}`);
}
else {
	console.log(`The String does not matches the expression ${regex.source}`);
}