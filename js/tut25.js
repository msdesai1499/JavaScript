console.log('This is tut 25');
/*
Create a div and inject it into page which contains heading.
Whenever someone click on div it should be converted into editable text and when user clicks away save the note in the local storage
*/

//Create a new element
let divElement=document.createElement('div');


//Add text to that created element
let text;
let val=localStorage.getItem('text');
if(val==null){
	text=document.createTextNode('This is my element click to edit it');
}
else{
	text=document.createTextNode(val);
}

divElement.appendChild(text);

// Give element id,style and class
divElement.setAttribute('id','elem');
divElement.setAttribute('class','elem');
divElement.setAttribute('style','border:2px solid black; width:154px; margin:34px; padding:23px;')

//Grab the main Container
let container=document.querySelector('.container');
let first=document.getElementById('first');

//Insert the element before element with id first
container.insertBefore(divElement,first);

// console.log(divElement,container,first);

//add event listener to the divElement
divElement.addEventListener('click',function () {
	let noTextarea=document.getElementsByClassName('textArea').length;
	if(noTextarea==0){
		let html=divElement.innerHTML;
		divElement.innerHTML=`<textarea class="textArea" id="textArea" rows="3">${html}</textarea>`;
	}
	//listen for blur event on the textArea
	let textArea=document.getElementById('textArea');
	textArea.addEventListener('blur',function () {
		divElement.innerHTML=textArea.value;
		localStorage.setItem('text',textArea.value);
	})	
});

