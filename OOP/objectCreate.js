// For Object.create() the first thing we want to do is create
// an object of our prototype

// Object Protos

const bookProtos = {
  // Prototypes
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is ${age} years old`;
  },
};

// Create Object

const book1 = Object.create(bookProtos);
book1.title = "book1";
book1.author = "John Doe";
book1.year = "2013";

console.log(book1);

// If we don't want to do it like this we could do it a little differently

const book2 = Object.create(bookProtos, {
  // Add our data. But what we need to do here is have a value key
  title: { value: "book2" },
  author: { value: "Jane Doe" },
  year: { value: "2016" },
});

console.log(book2);

// Until now we have been working on ES5 object types. Now we will be working on ES6 classes
