// CHAINING PROMISES

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("Promise 1 resolved: ", data);
    // To chain promises we return getTodos()
    // with our next data

    return getTodos("todos/mario.json");
    //Chaining the `then` statement at the end of the pevious
    //then statement
  })
  .then((data) => {
    console.log("Promise 2 resolved: ", data);
    // Chain promise and chain then statement
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved: ", data);
  })
  .catch((err) => {
    // The good thing about the catch at the end is that it catches
    // any error
    console.log("Promise rejected: ", err);
  });
