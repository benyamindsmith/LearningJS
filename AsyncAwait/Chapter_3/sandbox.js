const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //console.log(request.readyState);

  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  }
});

// put an error in the link by adding an additional s
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
