console.log('Welcome to tut 28');

//Object Literal : Object.prototype
let obj={
	name:'Mandar',
	job:'Coder',
	address:'karad'
}
function Obj(givenName){
	this.name=givenName;
}
Obj.prototype.getName=function(){
	return this.name;
}

Obj.prototype.setName=function(newName){
	this.name=newName;
}
let obj2=new Obj('Mandar');
console.log(obj2);