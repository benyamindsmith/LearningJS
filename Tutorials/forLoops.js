var myArray = [];
// Initialization; Condition; Iteration
for (var i = 0; i < 5; i++) {
  myArray.push(i);
}

console.log(myArray);

// Another example
var numbers = [9, 5, 3, 1, 4];
var myTotal = 0;
// Add up the numbers
for (var i = 0; i < numbers.length; i++) {
  myTotal += numbers[i];
}

console.log(myTotal);

// Nested for loops

var numbersList = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];
// Because we are multiplying, we need to instailize product being
// equal to 1

var product = 1;

for (var i = 0; i < numbersList.length; i++) {
  for (var j = 0; j < numbersList[i].length; j++) {
    product *= numbersList[i][j];
  }
}

console.log(product);
