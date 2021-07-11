// Copied from constructor.js

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor

function Magazine(title, author, year, month) {
  // Magazine INHERITS the characteristics from Book.
  Book.call(this, title, author, year);

  this.month = month;
}

// If we use .getSummary() with mag we get an error
// because it has not inhereted the prototype methods
// from Book()

// To let it inherit the prototype method we need to use
// Object.create().

Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object

const mag1 = new Magazine("magazine one", "John Doe", "2018", "Jan");

console.log(mag1.getSummary());

// From the output here, we see that the Magazine is still using the
// Book constructor to be made.
console.log(mag1);

// For us to use the Magazine constructor we do the following
// This redefines the constructor

Magazine.prototype.constructor = Magazine;

const mag2 = new Magazine("magazine two", "Jane Doe", "2019", "Mar");

console.log(mag2);
