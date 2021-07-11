//setup

const person = {
  firstName: "Timmy",
  age: 19,
};

// to have a string with template literals, use back ticks.

const greeting = `Hello, my name is ${person.firstName} and I am ${person.age} years old`;

console.log(greeting);

const peeps = {
  0: { firstName: "Timmy", age: 19 },
  1: { firstName: "Frank", age: 52 },
  2: { firstName: "Stan", age: 46 },
};

for (let i = 0; i < 3; i++) {
  let newGreeting = `Hello, my name is ${peeps[i].firstName} and I am ${peeps[i].age} years old`;
  console.log(newGreeting);
}

console.log(peeps[0]);
