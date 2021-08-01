// PROMISES
// First. Go to the "Promise Example"
// After seeing the Promise example, we can rewrite `getTodos()`
// in the following manner
// we don't need the callback argument because we are using promises

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    // Move all the code we previously wrote in the Promise

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // instead of using callbacks we are using
        // reslove/reject
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

// Now we can get the data with our new function

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("Promise resolved: ", data);
  })
  .catch((err) => {
    console.log("Promise rejected: ", err);
  });

// In the next chapter, we're going to look at chaining promises!

// Promise Example

const getSomething = () => {
  // When we are using promises,
  // the first thing we do is
  // return a new Promise
  return new Promise(
    // These are two arguments that come built in
    // with the Promise API in Javascript
    (resolve, reject) => {
      //resolve("Some data");
      reject("Some error");
    }
  );

  // A promise will either be one of
  // two outcomes:
  // 1. We get what we want and it is resolved
  // 2. An error will happen and the Promise will be
  //    rejected.
};

getSomething().then(
  (data) => {
    // Output that comes if we resolve the promise
    console.log(data);
  },
  (err) => {
    // Output that comes if the promise is rejected
    console.log(err);
  }
);

// Sometimes when we are adding 2 functions to the `then()` argument
// it can look a bit messy. We can alternatively write getSomething()
// in another way

const getSomething2 = () => {
  return new Promise((resolve, reject) => {
    //resolve("Some data");
    reject("Some error");
  });
};

// Using .catch() the code can look (debatably) cleaner.

getSomething2()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Now, go back to getTodos().
