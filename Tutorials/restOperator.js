// Suppose we have an function
// that calculates a sum

const sum = (function () {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));

// we can rewrite it like this

const newSum = (function () {
  // rest operator is `...args`
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

// and now we  can run the same code

console.log(newSum(1, 2, 3));

// and can have more than 3 arguments!

console.log(newSum(1, 2, 3, 45, 5, 6, 7, 1, 243, 5, 1));
