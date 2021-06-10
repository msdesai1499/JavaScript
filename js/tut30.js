console.log('This is tut 30');

const proto={
	slogan:function(){
		return 'This company is the best';
	},
	changeName:function(newName){
		this.name=newName;
	}
};
//This creates object
// const mandar=Object.create(proto);
// mandar.name='Mandar';
// mandar.role='Programmer';

//This is aslo creates object
let mandy=Object.create(proto,{
	name:{value:'Mandar',writable:true},
	role:{value:'Programmer'}
});
mandy.changeName('makrand');
// console.log(mandar);


//Employee

function Employee(name,salary,experience){
	this.name=name;
	this.salary=salary;
	this.experience=experience;
	this.disp=function(){
		console.log('Hello');
	}
}

Employee.prototype.slogan=function(){
	return `This company is the best: regards ${this.name}`;
}

//Create an object from constructor
let mandar=new Employee('Mandar',70000,3);
console.log(mandar.slogan());

function Programmer(name,salary,experience,language){
	Employee.call(this,name,salary,experience);
	this.language=language;
}

//Inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);

//Manually set the Constructor
Programmer.prototype.constructor=Programmer;
let yogesh=new Programmer('Yogesh',50000,2,'java');
console.log(yogesh.disp());