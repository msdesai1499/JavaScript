console.log('This is Project 2');

//Store all the data into local storage
//Given another option to delete the book
//Add the scroll bar to the view

//Constructor
function Book(name, author, type) {
	this.name = name;
	this.author = author;
	this.type = type;
}

//Display Constructor
function Display() {

}

//Add methods to display prototype
Display.prototype.add = function (book) {
	console.log('adding');
	tableBody = document.getElementById('tableBody');
	let uiString = `
	<tr>
		<td>${book.name}</td>
		<td>${book.author}</td>
		<td>${book.type}</td>
	</tr>
	`;
	tableBody.innerHTML += uiString;
};

//Implement the clear function
Display.prototype.clear = function () {
	let libraryform = document.getElementById('libraryform');
	libraryform.reset();
};

//Implementing the validate function
Display.prototype.validate = function (book) {
	if (book.name.length < 2 || book.author.length < 2) {
		return false;
	}
	else {
		return true;
	}

};

Display.prototype.show = function (type, txt) {
	let message = document.getElementById('message');
	message.innerHTML = `
	<div class="alert alert-${type} alert-dismissible fade show" role="alert">
		<strong>Alert! </strong> 
		${txt}
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
`;
	setTimeout(() => {
		message.innerHTML = '';
	}, 2000);
}
//Add Submit Event Listener to libraryform
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
	console.log('You have submitted library form ');
	let name = document.getElementById('bookName').value;
	let author = document.getElementById('authorName').value;
	let fiction = document.getElementById('fiction');
	let programming = document.getElementById('programming');
	let cooking = document.getElementById('cooking');

	if (fiction.checked) {
		type = fiction.value;
	}
	else if (programming.checked) {
		type = programming.value;
	}
	else if (cooking.checked) {
		type = cooking.value;
	}

	let book = new Book(name, author, type);
	console.log(book);

	let display = new Display();
	if (display.validate(book)) {
		display.add(book);
		display.clear();
		display.show('success', 'Your book has been successfully added');
	}
	else {
		display.show('danger', 'Sorry you cannot add this book');
	}


	e.preventDefault();
}

