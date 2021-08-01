// Fetch API
// the newer, native way for handling
// HTTP Requests.

fetch("todos/luigi.json")
  .then((response) => {
    console.log("resolved: ", response);
  })
  .catch((err) => {
    console.log("rejected: ", err);
  });

// lets make an error
// Contrary to using promises, the
// request is always resolved unless there
// is a network error- like not being able
// to access the API or something like this.
fetch("todos/luigis.json")
  .then((response) => {
    console.log("resolved: ", response);
  })
  .catch((err) => {
    console.log("rejected: ", err);
  });
/*
To get the actual data, we use the `response.json` method
*/

fetch("todos/luigi.json")
  .then((response) => {
    console.log("resolved: ", response);
    // the .json method
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected: ", err);
  });

/* So in summary:
1. We first get the data using a promise (response.json)
2. we then get the data by chaining .then() and outputting it
3. we handle errors by using the catch() method

*/
