/*
   A simple example.

   Lets first work with synchornous code
*/

console.log(1);
console.log(2);

/* We're going to now use a setTimeout
This function allows us to pass a function and will fire only
after a set amount of time
*/

// THIS OVER HERE IS AN EXAMPLE
// OF ASYNCHRONOUS CODE IN ACTION
// (LOOK AT THE CONSOLE IN THE BROWSER)
setTimeout(() => {
  console.log("Callback function fired");
}, 2000); //2000  is 2000 milliseconds(2 seconds)

// This code is not blocked!!
console.log(3);
console.log(4);
