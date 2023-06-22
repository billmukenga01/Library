const container = document.querySelector('.display-container');
const head = document.querySelector('head');

let myLibrary = [];

let title = 'to be set to the value of a form input';
let year = 'to be set to the value of a form input';
let author = 'to be set to the value of a form input';
let length;


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

  const style = document.createElement('style');

  style.textContent = `
    grid-template-columns: ${length};
    
  `
  head.appendChild(style)
  
  loop();
}



function loop (){

  myLibrary.forEach(element => {

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'card-item');
    container.appendChild(newDiv);
      
  });
}

addBookToLibrary();

console.log(myLibrary)