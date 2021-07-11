// Same code as the constructor code earlier

// A constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  // but the getSummary method is not in the
  // constructor code itself
}

// Instead of writing getSummary() as a method directly in the Book()
// constructor, we can use a prototype method

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Lets add a new prototype getAge

Book.prototype.getAge = function () {
  const age = new Date().getFullYear() - this.year;
  return `${this.title} is ${age} years old`;
};
// The code below should work the same.

const book1 = new Book("Book One", "John Doe", "2014");
const book2 = new Book("Book Two", "Tim Buck", "2002");

console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book2.getSummary());
console.log(book2.getAge());

// Revise - Change the year of the book

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  // Lets us know that the year has been revised.
  this.revised = true;
};

book2.revise("2007");
console.log(book2.getSummary());
console.log(book2.getAge());
