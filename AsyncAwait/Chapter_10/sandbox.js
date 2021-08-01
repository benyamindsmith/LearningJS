// async & await

const getTodos = async (path) => {
  // instead of doing fetch("...").then
  // we can write

  const response = await fetch(path);
  // since `response` is a promise, to get the data
  // we need to use await
  const data = await response.json();
  return data;
};

getTodos("todos/luigi.json").then((data) => {
  console.log("resolved: ", data);
});

/*
So instead of writing the ugly code
we have down here (see chapter 9). We 
can write the code in the above manner
*/
// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved: ", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected: ", err);
//   });

// Note that the above code is non-blocking.
// so if we look at our code here
console.log(1);
console.log(2);

// Since this takes some time, the other code executes
// while it it loading
getTodos("todos/luigi.json").then((data) => {
  console.log("resolved: ", data);
});

console.log(3);
console.log(4);
