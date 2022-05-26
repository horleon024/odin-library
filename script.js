let myLibrary = [];

function Book(title, author, nbOfPages, isRead) {
	this.title = title;
	this.author = author;
	this.nbOfPages = nbOfPages;
	this.isRead = isRead;
	this.isDisplayed = false;
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
	displayBooks();
}

addBookButton.addEventListener("click", addBookToLibrary);

const cardsContainer = document.querySelector(".container");

function displayBooks() {
	myLibrary.forEach((book) => {
		if (book.isDisplayed) return;
		const bookCard = document.createElement("div");
		bookCard.classList.add("card");
		const titleDiv = document.createElement("div");
		titleDiv.classList.add("card-title");
		titleDiv.textContent = book.title;
		const authorDiv = document.createElement("div");
		authorDiv.classList.add("card-author");
		authorDiv.textContent = `by ${book.author}`;
		const pagesDiv = document.createElement("div");
		pagesDiv.classList.add("card-pages");
		pagesDiv.textContent = `Number of Pages: ${book.nbOfPages}`;
		if (book.isRead) bookCard.classList.add("read");
		else bookCard.classList.add("not-read");
		bookCard.appendChild(titleDiv);
		bookCard.appendChild(authorDiv);
		bookCard.appendChild(pagesDiv);
		cardsContainer.appendChild(bookCard);
		book.isDisplayed = true;
	});
}
