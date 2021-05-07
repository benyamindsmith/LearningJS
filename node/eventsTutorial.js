// Basic Idea of Events

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", () => {
  console.log("tutorial event has occured");
});

eventEmitter.on("sum", (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial");
eventEmitter.emit("sum", 1, 2);

// Application
// First lets make a class
class Person extends EventEmitter {
  // Then define a constructor
  constructor(name) {
    //super allow us to use the `this` property
    super();
    this._name = name;
  }
  // Define a method
  get name() {
    return this._name;
  }
}

// Now lets impliment it
// First define a Person
let ben = new Person("Ben");
let shev = new Person("Shev");

// Now, define an event
ben.on("name", () => {
  console.log("My name is " + ben._name);
});

shev.on("name", () => {
  console.log("My name is " + shev._name);
});

// Call the event for the
ben.emit("name");
shev.emit("name");

