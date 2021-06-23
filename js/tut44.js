console.log('This is tut 44');


//Pretend the value of a is coming from the server
let a = "Mandar";

a = undefined;
if (a != undefined) {
	throw new Error('This is not undefined');

}
else {
	console.log('This is undefined');
}


try {

	functionxyz();

} catch (error) {
	console.log('Are you okay' + error);
} finally {

	console.log('This block runs everytime');
}

