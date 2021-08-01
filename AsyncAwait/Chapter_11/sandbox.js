// Lets work on making our own custom error handling
const getTodos = async (path) => {
  const response = await fetch(path);

  // error code to handle if response status is not 200

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await response.json();
  return data;
};

// Lets:
// 1. make an error in the.json code of luigi.json.
// 2. make an error is misspecifiying the path

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("resolved: ", data);
  })
  .catch((err) => {
    //1. Since we have an error object we can print out the
    //   message here
    console.log("rejected", err.message);
  });

// 2.  Using mario.json because luigi.json is messed up
//     (writing marios.json instead of mario.json)
//    to handle this error we need to write our own code to handle
//     this error
getTodos("todos/marios.json")
  .then((data) => {
    console.log("resolved: ", data);
  })
  .catch((err) => {
    console.log("rejected", err.message);
  });
