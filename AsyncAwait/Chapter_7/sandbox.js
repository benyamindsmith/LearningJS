/*
Suppose we are interested in outputing our JSON data in the `todos`
folder sequentially. That is once everything is printed out in luigi.json
we'll print out everything in mariso.json and then shaun.json
*/

// To this, we are going to need to alter the `getToodos()`
// function by passing another argument. Lets call it resource

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};

getTodos("todos/luigi.json", (err, data) => {
  console.log(data);
  // IF we want things to fire in order we will have to nest them
  getTodos("todos/mario.json", (err, data) => {
    console.log(data);
    getTodos("todos/shaun.json", (err, data) => {
      console.log(data);
    });
  });
});

// The above code works- but if we see how it looks, the code is
// starting to get messy. The above is an example of CALLBACK PURGATORY
// which with size, would make the code very hard to read and mainatain.
// To make something that is easier to look at, we can do something
// called "Promises" (SEE CHAPTER 7).
