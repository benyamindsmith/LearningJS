// copied from classes.js

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

// Lets say we want a subclass called `Magazine` which has everything a book has plus a month
// we would write:

class Magazine extends Book {
  constructor(title, author, year, month) {
    // We're going to use super to call what we want from Book()
    super(title, author, year);
    // Add month
    this.month = month;
  }
}

// Instantiate Magazine

const mag1 = new Magazine("Mag 1", "John Doe", "2018", "Jan");

console.log(mag1);
console.log(mag1.getSummary());
