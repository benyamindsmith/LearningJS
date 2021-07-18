// XML reffers to an older data type which was used before JSON
// But this request object now works for all data types.

const request = new XMLHttpRequest();

// We can track the progress of our events by using an
// event listener called `readystatechange`
request.addEventListener("readystatechange", () => {
  //We get 4 different types of states that appear in
  // the console. But what do they mean?
  /* 
0 = UNSENT
1 = OPENED
2 = HEADERS_RECIEVED
3 = LOADING
4 = DONE
*/
  // With readyState 4 we can acutally use
  // the data for what we want.

  if (request.readyState === 4) {
    // Get the response data
    console.log(request.responseText);
  }
});

// Send a request to get the data that we want
// Define the type of request we want.
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// now lets send the request
request.send();
// At this point, we do not know when this
// code is complete.
