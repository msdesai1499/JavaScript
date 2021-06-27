console.log('This is tut 46');

let reg = /mandar/;//This is a regular expression literal
reg = /mandar/g; //g means global
reg = /mandar/i; //i means case sensitivity
reg = /mandar/ig;

console.log(reg);
console.log(reg.source);

let s = "Welcome Mandar how are you mandar";

//Function to match expressions

// 1.exec() - This function will return an array for match or null for no match 
// let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);//We can use multiple exec with global flag
// console.log(result);


// 2. test() - Returns true or false

// let result = reg.test(s);
// console.log(result); //This will only print true if string matches


//3.match() - It will return  an array of results or

// result = s.match(reg);
// console.log(result);


//4. search()=Returns index of first match else -1

// result = s.search(reg);
// console.log(result);


// 5. replace() -Returns new replace string with all the replacements

result = s.replace(reg, 'Mahesh');
console.log(result);