console.log('This is tut 9');

// General Loops  for , while , do-while

for(let i=0;i<10;i++)
{
	console.log(i);
}

let j=10;
while(j<20)
{
	console.log(j);
	j++;
}

let k=20;
do{
console.log(k);
k++;
}while(k<30);

k=0;
do{
	console.log(k);
	if(k===5)
	{
		break;
	}
	k++;
}while(k<10);

k=0;
do{
	if(k==5)
	{
		k++;
		continue;
	}
	console.log(k);
	k++;
}while(k<10);

let arr=[1,2,3,4,5,6];
arr.forEach(function (element) {
	console.log(element);
})

let obj={
	name:'Mandar',
	age:20,
	type:'Dangerous Programmer',
	os:'Windows'
};

for(let key in obj)
{
	console.log(`The ${key} of object is ${obj[key]}`);
}

arr=[1,2,3,4,5,6,7];
arr.forEach(function (element,index,array) {

	console.log(element,index,array);
});