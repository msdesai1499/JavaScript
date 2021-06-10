console.log('This is tut 27');

//Object Literal for creating object
// let car={
// 	name:'Maruti',
// 	topspeed:89,
// 	run:function run() {
// 		console.log('car is running');
// 	}
// };


//Creating a constructor for cars
function GeneralCar(givenName,givenSpeed) {
	this.name=givenName;
	this.topspeed=givenSpeed;
	this.run=function(){
		console.log(`${this.name} is running`);
	}
	this.analyze=function(){
		console.log(`This car is slower by ${200-this.topspeed}Kmph than Mercedes`);
	}

}

car1=new GeneralCar('Nissan',180);
car2=new GeneralCar('Alto',80);
// console.log(car1);
car1.run();
car1.analyze();
car2.run();
car2.analyze();

// console.log(car);
