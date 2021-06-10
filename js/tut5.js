// type conversion
console.log('Welcome to tut 5');
let myVar;
myVar=String(34);
console.log(myVar,typeof(myVar));
let booleanVar=String(true);
console.log(booleanVar,typeof(booleanVar));

let date=String(new Date());
console.log(date,typeof(date));

let arr=String([1,2,3,4,5]);
console.log(arr,typeof(arr),arr.length);

let i=8;
console.log(i.toString());

let stri=Number('3434a');//Not a Number
stri=Number(true);
// stri=Number([1,2,3,4,5]);
console.log(stri,typeof(stri));

let number=parseInt('34.08');
number=parseFloat('34.084');
console.log(number.toFixed(2),typeof(number));


// Type coersion

let myStr='698';
let myNum=34;
console.log(myStr+myNum);



