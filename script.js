const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const submitButton = document.querySelector('.submit-button');

openButton.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'flex';
  openButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'none';
  openButton.style.display = 'inline';
});

const myLibrary = [];

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read_status').checked = false;
}

// constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
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
  document.querySelector('.form-container').style.display = 'none';
  openButton.style.display = 'inline';
  console.log(myLibrary);
}

submitButton.addEventListener('click', addBookToLibrary);
