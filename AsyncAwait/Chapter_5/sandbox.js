const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      // Storing our data in a JSON object
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  // Updated to get the todos.json from local files
  request.open("GET", "todos.json");
  request.send();
};

// Data will now appear as an array in the browser
getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err, data);
  } else {
    console.log(data);
  }
});

// We can also create our own JSON file. See todos.json
