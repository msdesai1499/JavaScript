console.log('This is tut 8');
const age=44;
const var1=34;
const doesDrive=false;
if(age==19)
{
	console.log('Age is 19');
}
else if(age===44)//Triple equal too checks both type and value
{ 
	console.log('Age is  44');
}
else{
	console.log('Age is not 19 and 44');
}

if(typeof(var1)!=='undefined'){
	console.log('Var1 is present');
}
else{
	console.log('Var 1 is not present');
}


if(doesDrive || age==44){
	console.log('You can drive');
}
else{
	console.log('You cannot drive');
}



console.log(age==45?'Age is 44':'Age is not 44');



switch(age){
	case 18:
		console.log('Age is 18');
		break;
	case 45:
		console.log('Age is 44');
		break;
	default:
		console.log('You are unknown');
}