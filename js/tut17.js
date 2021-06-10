console.log('This is tut 17');

document.getElementById('heading').addEventListener('mouseover',
function(e){
	
console.log('You hav clicked the heading');
// location.href='http://www.linkedin.com';
let v=e.target.classList;
Array.from(v).forEach(function (element) {
	console.log(element);
})

console.log(e.offsetX);
console.log(e.offsetY);
console.log(e.clientX);
console.log(e.clientY);
});