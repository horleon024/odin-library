let myLibrary = [];

function Book(title, author, nbOfPages, isRead) {
	this.title = title;
	this.author = author;
	this.nbOfPages = nbOfPages;
	this.isRead = isRead;
	this.info = function() {
		return (`${this.title} by ${this.author}, ${nbOfPages} pages, ${isRead ? "already read" : "not read yet"}`);
	}
}

const form = document.querySelector(".form-popup");
const newBookButton = document.querySelector(".newbook");

function toggleDisplay() {
	form.style.display = "block";
}

newBookButton.addEventListener("click", toggleDisplay);