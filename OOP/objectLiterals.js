// Lets work with our first example

// This over here is an example of an object literal

const book1 = {
  title: "book1",
  author: "john doe",
  year: "2013",
};

console.log(book1);

// If we want to call a specific property we can just write

console.log(book1.title);

// or any other property we want.
// We can additionally add a function if we want to our book as
// a method.

// An object Literal
const book2 = {
  title: "book2",
  author: "jim cook",
  year: "2008",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2.getSummary());

// Functions to find the values, and the  keys.

console.log(Object.values(book2));
console.log(Object.keys(book2));

// If we want to create multiple books, this will be annoying to do manually.
// For this we will have to move on to constructors.
// See you in the constructors folder!
