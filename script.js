const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const submitButton = document.querySelector('.submit-button');
const bookGrid = document.querySelector('.book-container');

openButton.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'flex';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'none';
  openButton.style.display = 'inline';
});

const myLibrary = [{
  title: 'asd', author: 'sdf', pages: '3', isRead: 'Read',
},
{
  title: 'asdd', author: 'sdfd', pages: '33', isRead: 'Read',
}];

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read_status').checked = false;
  document.querySelector('.form-container').style.display = 'none';
  openButton.style.display = 'inline';
}

// constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function bookFromArray() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

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
    read.textContent = `Read: ${book.isRead}`;
    bookCard.appendChild(read);

    bookGrid.appendChild(bookCard);
  }
}

function addBookToLibrary(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read_status').checked ? 'Read' : 'Not Read Yet.';
  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
  resetForm();
  bookGrid.innerHTML = '';
  bookFromArray();
}

submitButton.addEventListener('click', addBookToLibrary);
