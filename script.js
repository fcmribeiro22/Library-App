// Button to form Popup

// eslint-disable-next-line no-unused-vars
function openForm() {
  document.querySelector('.form-container').style.display = 'flex';
  document.querySelector('.open-button').style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function closeForm() {
  document.querySelector('.form-container').style.display = 'none';
  document.querySelector('.open-button').style.display = 'inline';
}
// Add books to program

const myLibrary = [];

// constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.ages = pages;
  this.isRead = isRead;

  this.info = function () {
    let readStatus;
    if (this.isRead) {
      readStatus = 'already read';
    } else {
      readStatus = 'not read yet';
    }
    return readStatus;
  };
}

/* function addBookToLibrary() {
  const title =
  const author =
  const pages =
  const isRead = c

  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);
}

addBookToLibrary(); // prompts the user for input and adds a new book to myLibrary
console.log(myLibrary); // prints the current state of the library/*} */
