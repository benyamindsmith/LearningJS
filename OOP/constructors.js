// Constructors

// A constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiate a new book object.

const book1 = new Book("Book One", "John Doe", "2014");
// We can create as many books we want with
// the constructor we created
const book2 = new Book("Book Two", "Tim Buck", "2002");

console.log(book1.getSummary());
console.log(book2.getSummary());
