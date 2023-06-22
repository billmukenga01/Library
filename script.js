const container = document.querySelector('.display-container');
const head = document.querySelector('head');
const button = document.querySelector('.button');

let myLibrary = [];

let title = 'to be set to the value of a form input';
let year = 'to be set to the value of a form input';
let author = 'to be set to the value of a form input';
let length;
let index;

button.addEventListener('click', function(){

  title = prompt('Enter Title of Book');
  year = prompt('Enter the Publication Year');
  title = prompt('Enter the Author of the book');

  addBookToLibrary()
})

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

  length = myLibrary.length;

  index = myLibrary.indexOf(Book);
  const style = document.createElement('style');

  style.textContent = `
    grid-template-columns: ${length};
    
  `
  head.appendChild(style)
  
  loop(index);
}



function loop (index){

  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'card-item');
  container.appendChild(newDiv);
      
}



// console.log(myLibrary)