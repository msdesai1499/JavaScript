console.log('This is es6 version of project 2');
class Book {
	constructor(name, author, type) {
		this.name = name;
		this.author = author;
		this.type = type;
	}
};

class Display {
	add(book) {
		console.log('adding');
		let tableBody = document.getElementById('tableBody');
		let uiString = `
		<tr>
			<td>${book.name}</td>
			<td>${book.author}</td>
			<td>${book.type}</td>
		</tr>
		`;
		tableBody.innerHTML += uiString;
	}
	clear() {
		let libraryform = document.getElementById('libraryform');
		libraryform.reset();
	}

	validate(book) {
		if (book.name.length < 2 || book.author.length < 2) {
			return false;
		}
		else {
			return true;
		}

	}

	show(type, txt) {
		let message = document.getElementById('message');
		let boldText;
		if (type == 'success') {
			boldText = 'Success';
		}
		else {
			boldText = 'Error';
		}
		message.innerHTML = `
		<div class="alert alert-${type} alert-dismissible fade show" role="alert">
			<strong>${boldText}</strong> 
			${txt}
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
	`;
		setTimeout(() => {
			message.innerHTML = '';
		}, 5000);
	}
};


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

