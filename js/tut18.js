console.log('This is tut 18');

// let btn=document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);

// function func1(e)
// {
// console.log('thanks',e);
// e.preventDefault();
// }
// function func2(e)
// {
// console.log('thanks its a double click',e);
// e.preventDefault();
// }
// function func3(e)
// {
// console.log('thanks its a mouse down',e);
// e.preventDefault();
// }

// document.querySelector('.no').addEventListener(
// 	'mouseenter',function (e) {
// 		console.log('You entered no ',e);
		
// 	}
// )

// document.querySelector('.no').addEventListener(
// 	'mouseleave',function (e) {
// 		console.log('You entered no ',e);
		
// 	}
// )


document.querySelector('.no').addEventListener(
	'mousemove',function (e) {
		document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
		console.log('You entered mouse move event ');
		
	}
)
