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
  author = prompt('Enter the Author of the book');
  const book = new Book(title, year, author);

  book.addBookToLibrary();
})
class Book{
  constructor (title, yearOfPublish, author) {
    // the constructor...

    this.title = title;
    this.yearOfPublish = yearOfPublish;
    this.author = author;

  }
  addBookToLibrary() {
    // do stuff here
    
    myLibrary.push(this);
  
    length = myLibrary.length;
  
    index = myLibrary.indexOf(this);
    const style = document.createElement('style');
  
    style.textContent = `
      grid-template-columns: ${length};
      
    `
    head.appendChild(style)
    
    loop(index);
  }
}





function loop (index){

  const newDiv = document.createElement('div');
  const title = document.createElement('div');
  const author= document.createElement('div');
  const yearOfPublish = document.createElement('div');
  const divOne = document.createElement('div');
  const divTwo = document.createElement('div');
  const divThree = document.createElement('div');
  const divFour = document.createElement('div');
  const divFive = document.createElement('div');
  const divSix = document.createElement('div');


  newDiv.setAttribute('class', 'card-item');
  title.setAttribute('class', 'title');
  author.setAttribute('class', 'author');
  yearOfPublish.setAttribute('class', 'yearOfPublish');
  divOne.setAttribute('class', 'display');
  divTwo.setAttribute('class', 'content');
  divThree.setAttribute('class', 'display');
  divFour.setAttribute('class', 'content');
  divFive.setAttribute('class', 'display');
  divSix.setAttribute('class', 'content');



  container.appendChild(newDiv);
  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(yearOfPublish);

  title.appendChild(divOne);
  title.appendChild(divTwo);
  author.appendChild(divThree);
  author.appendChild(divFour);
  yearOfPublish.appendChild(divFive);
  yearOfPublish.appendChild(divSix);


  divOne.textContent = "TITLE";
  divThree.textContent = "AUTHOR";
  divFive.textContent = "YEAR OF PUBLISH";

  divTwo.textContent = myLibrary[index].title;
  divFour.textContent = myLibrary[index].author;
  divSix.textContent = myLibrary[index].yearOfPublish;



}



console.log(index)