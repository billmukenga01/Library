const container = document.querySelector('container');

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function loop (){


  myLibrary.forEach(element => {

    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'card-item');
    container.appendChild(newDiv);
      
  });
}