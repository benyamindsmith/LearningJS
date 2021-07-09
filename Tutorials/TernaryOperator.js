function theWinner(a, b) {
  // Question mark is the Ternary Operator
  return a > b ? "A is bigger" : a < b ? "B is bigger" : "Tie";
}

console.log(theWinner(4, 2));

console.log(theWinner(1, 2));
console.log(theWinner(1, 1));
