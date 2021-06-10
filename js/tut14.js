console.log('This is tut 14');
// console.log(document.all);
/*
element Selectors
1.Single Element Selectors
2.Multi Element Selectors
*/

// Single element Selectors
let element=document.getElementById('first');
console.log(element.className);
console.log(element.childNodes);
console.log(element.parentNode);
element.style.color='red';
element.innerText='Mandar is a good boy';
element.innerHTML='<h3>Hello</h3>';


let sel=document.querySelector('div');
sel.style.color='green';
console.log(sel);

// Multi element selector
let elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
// Array.from(elems).forEach(function (element) {
// 	console.log(element);
// 	element.style.color='pink';
// })

for (let index = 0; index < elems.length; index++) {
	const element = elems[index];
	console.log(element);
		element.style.color='pink';
	
}
// console.log(elems[0].getElementsByClassName('child'));
// console.log(elems);