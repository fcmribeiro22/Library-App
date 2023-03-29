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

function addBookToLibrary() {
  const title = 
  const author = 
  const pages = 
  const isRead = c

  const book = new Book(title, author, pages, isRead);

  myLibrary.push(book);
}

addBookToLibrary(); // prompts the user for input and adds a new book to myLibrary
console.log(myLibrary); // prints the current state of the library
