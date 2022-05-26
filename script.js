let myLibrary = [];

function Book(title, author, nbOfPages, isRead) {
	this.title = title;
	this.author = author;
	this.nbOfPages = nbOfPages;
	this.isRead = isRead;
}

const form = document.querySelector(".form-popup");
const newBookButton = document.querySelector(".newbook");

function toggleDisplay() {
	form.style.display = "block";
}

newBookButton.addEventListener("click", toggleDisplay);

const addBookButton = document.querySelector(".add-book-button");

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isReadInput = document.querySelector("#read");

function addBookToLibrary() {
	const bookToAdd = new Book(titleInput.value, authorInput.value, pagesInput.value, isReadInput.checked);
	myLibrary.push(bookToAdd);
	form.style.display = "none";
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	isReadInput.checked = false;
}

addBookButton.addEventListener("click", addBookToLibrary);