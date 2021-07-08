// For finding length we just use the .length method.

var firstNameLength = 0;
var firstName = "John";

firstNameLength = firstName.length;

console.log(firstNameLength);

// To find location of letter find put a bracket with the index
// Javascript uses 0 based indexing
var firstLetter = firstName[0];
console.log(firstLetter);

// To find the last letter

var lastLetter = firstName[firstName.length - 1];

console.log(lastLetter);

// Second last letter

scndLastLetter = firstName[firstName.length - 2];

console.log(scndLastLetter);
