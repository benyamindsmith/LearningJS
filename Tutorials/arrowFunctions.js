// Arrow functions
// Basically an anonymous function
// Will see alot of this when doing react

//instalization- always use const or let
// Arrow functions don't need curly braces or return functions.
const magic = () => new Date();

console.log(magic());

// Arrow function with parameters

const myConcat = (arr1, arr2) => {
  // if we have curly braces we need a return function
  return arr1.concat(arr2);
};

console.log(myConcat([5, 12, 6, 20], [3, 16, 40]));
