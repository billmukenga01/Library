const container = document.querySelector('container');

let myLibrary = [];

let title = 'The River and the Source';
let year = '1973';
let author = 'Akoko';


function Book(title, yearOfPublish, author) {
  // the constructor...

  this.title = title;
  this.yearOfPublish = yearOfPublish;
  this.author = author;

}

Book.prototype.addBookToLibrary = addBookToLibrary;

function addBookToLibrary() {
  // do stuff here
  const book = new Book(title, year, author);
  myLibrary.push(book);

}

function loop (){


  myLibrary.forEach(element => {

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'card-item');
    container.appendChild(newDiv);
      
  });
}