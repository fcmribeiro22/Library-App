const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const addBookButton = document.querySelector('.submit-button');
const bookGrid = document.querySelector('.book-container');

// Begginning App Buttons functionality

openButton.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'flex';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'none';
  openButton.style.display = 'inline';
});

const myLibrary = [];

// constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read_status').checked = false;
  document.querySelector('.form-container').style.display = 'none';
  openButton.style.display = 'inline';
}

function removeBook() {
  const bookCard = this.parentElement.parentElement;
  bookGrid.removeChild(bookCard);
  const bookIndex = bookCard.dataset.indexNumber;
  myLibrary.splice(bookIndex, 1);
}

function addBookToLibrary(event) {
  event.preventDefault();
  if (title.value === '' || author.value === '' || pages.value === '') {
    alert('Please fill in all the required fields.');
  } else {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read_status').checked ? 'Read' : 'Not Read Yet.';
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
    resetForm();
    bookGrid.innerHTML = '';
    printBooksToScreen();
  }
}

function printBooksToScreen() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.indexNumber = i;

    const title = document.createElement('h2');
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    const read = document.createElement('p');
    read.textContent = ` ${book.isRead}`;
    bookCard.appendChild(read);

    const bookCardButtons = document.createElement('div');
    bookCardButtons.classList.add('bookcard-buttons');
    bookCard.appendChild(bookCardButtons);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('book-delete-btn');
    deleteButton.textContent = 'Remove';
    bookCardButtons.appendChild(deleteButton);

    deleteButton.addEventListener('click', removeBook);

    const readStatusButton = document.createElement('button');
    readStatusButton.classList.add('change-status-btn');
    readStatusButton.textContent = 'Change Read Status';
    bookCardButtons.appendChild(readStatusButton);

    readStatusButton.addEventListener('click', () => {
      book.toggleReadStatus();
      read.textContent = book.isRead ? 'Read' : 'Not Read Yet.';
    });

    bookGrid.appendChild(bookCard);
  }
}

addBookButton.addEventListener('click', addBookToLibrary);
