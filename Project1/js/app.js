console.log('Welcome to Notes App');
showNotes();

//User adds a note add into a local storage
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function (e) {
	let addTxt=document.getElementById('addTxt');
	let addTitle=document.getElementById('addTitle');
	let notes=localStorage.getItem('notes');
	let title=localStorage.getItem('title');
	if(notes==null && title==null)
	{
		notesObj=[];
		titleObj=[];
	}
	else{
		notesObj=JSON.parse(notes);
		titleObj=JSON.parse(title);
	}
	notesObj.push(addTxt.value);
	titleObj.push(addTitle.value);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	localStorage.setItem('title',JSON.stringify(titleObj));
	addTxt.value='';
	addTitle.value='';
	// console.log(notesObj);
	showNotes();
})

//Function to show elements from local storage
function showNotes() {
	let notes=localStorage.getItem('notes');
	let title=localStorage.getItem('title');
	if(notes==null && title==null)
	{
		notesObj=[];
		titleObj=[];
	}
	else
	{
		notesObj=JSON.parse(notes);
		titleObj=JSON.parse(title);
	}
	let html='';
	notesObj.forEach(function (element,index) {

		html+=`	
		<div class="noteCard card my-2 mx-2" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">${titleObj[index]}</h5>
				<p class="card-text">${element}</p>
				<button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
			</div>
		</div>
	`;
	});
	let notesElm=document.getElementById('notes');
	if(notesObj.length!=0)
	{
		notesElm.innerHTML=html;
	}
	else{
		notesElm.innerHTML=`Nothing to show! Use "Add a note" section above to add notes`;
	}
}




//Function to delete a note
function deleteNote(index) {
	// console.log('I am deleting',index);
	let notes=localStorage.getItem('notes');
	let title=localStorage.getItem('title');
	if(notes==null && title==null)
	{
		notesObj=[];
		titleObj=[];
	}
	else
	{
		notesObj=JSON.parse(notes);
		titleObj=JSON.parse(title);

	}
	notesObj.splice(index,1);
	titleObj.splice(index,1);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	localStorage.setItem('title',JSON.stringify(titleObj));
	showNotes();
}

let search=document.getElementById('searchTxt');
search.addEventListener('input',function () {
	inputVal=search.value.toLowerCase();
	// console.log('Input event fired',inputVal);

	let noteCards=document.getElementsByClassName('noteCard');
	Array.from(noteCards).forEach(function (element) {
		let cardTxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
		if(cardTxt.includes(inputVal))
		{
			element.style.display='block';
		}
		else
		{
			element.style.display='none';
		}
		// console.log(cardTxt);

		
	})
	
})




//Further Features
/*
1.Add Title
2.Mark a note as Important
3.Seperate note by users
4.Sync and host to a web server
*/