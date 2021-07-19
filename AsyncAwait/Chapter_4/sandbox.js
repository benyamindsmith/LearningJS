//Get the code from chapter 3 into a
// function to be callable whenever
// we want to use it.
const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

// Because we're working with asynchronous code,
// lets create an example

// code we want to run
console.log(1);
console.log(2);

// Asynchronous code
// Lets specify different callback functions

// Network request started.
getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err, data);
  } else {
    console.log(data);
  }
});
// While the above code is passed off to a different
// part of the browser to be run. The other code can be
// run in the meantime.

// More code we want to run in the meantime
console.log(3);
console.log(4);
