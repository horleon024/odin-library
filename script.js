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

const cardsContainer = document.querySelector(".books-container");

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

function toggleIsRead(event) {
	let nodes = Array.prototype.slice.call( cardsContainer.children );
	const nodesIndex = nodes.indexOf(event.srcElement.parentNode);
	if (myLibrary[nodesIndex].isRead) {
		myLibrary[nodesIndex].isRead = false;
		event.srcElement.textContent = "Not read";
		event.srcElement.parentNode.classList.remove("read");
		event.srcElement.parentNode.classList.add("not-read");
	} else {
		myLibrary[nodesIndex ].isRead = true;
		event.srcElement.textContent = "Read";
		event.srcElement.parentNode.classList.remove("not-read");
		event.srcElement.parentNode.classList.add("read");
	}
}

function deleteBook(event) {
	let nodes = Array.prototype.slice.call( cardsContainer.children );
	const nodesIndex = nodes.indexOf(event.srcElement.parentNode);
	cardsContainer.removeChild(event.srcElement.parentNode);
	myLibrary.splice(nodesIndex, 1);
}

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

		const isReadButton = document.createElement("button");
		if (book.isRead) {
			bookCard.classList.add("read");
			isReadButton.textContent = "Read";
		} else {
			bookCard.classList.add("not-read");
			isReadButton.textContent = "Not read";
		}
		isReadButton.classList.add("read-button");
		isReadButton.addEventListener("click", toggleIsRead);

		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.classList.add("delete-button");
		deleteButton.addEventListener("click", deleteBook);

		bookCard.appendChild(titleDiv);
		bookCard.appendChild(authorDiv);
		bookCard.appendChild(pagesDiv);
		bookCard.appendChild(isReadButton);
		bookCard.appendChild(deleteButton);
		cardsContainer.appendChild(bookCard);
		book.isDisplayed = true;
	});
}

myLibrary.push(new Book("asdd", "fghfg", 123, true));
myLibrary.push(new Book("fdgdfgd", "fghfg", 1223, true));
myLibrary.push(new Book("bvnb", "izuiz", 645, false));
myLibrary.push(new Book("hgjg", "rtzr", 1567, true));
displayBooks();