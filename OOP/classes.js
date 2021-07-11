// classes

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    // Lets us know that the year has been revised.
    this.revised = true;
  }
  // Static method- this allows us to call a method without instantiating the object
  static topBookStore() {
    return "Barnes & Noble";
  }
}

// instatiate an object

const book1 = new Book("Book One", "John Doe", "2013");

console.log(book1);
book1.revise("2018");
console.log(book1);

// calling a static object

console.log(Book.topBookStore());
