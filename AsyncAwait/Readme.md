# Asynchronous Javascript

Asynchoronus Javascript (AKA Async Javascript) governs how we preform tasks which take some time to complete (e.g. getting data from a database or an API). If you are going to use be creating any application, you will need to know Asynchronous code.

In short:

> Asynchronous code allows the user to have code that starts now and finishes later.

Before we jump into getting to understand Asynchronous code, lets first understand what synchronous code is.

## What is Synchronous Code?

Javascript, by its very nature is a synchronous language. Meaning that Javascript can only execute one statement at a time. From top to bottom.

The following code:

    ```
    console.log('one');
    console.log('two');
    console.log('three');
    ```

Will give the following output

    ```
    one
    two
    three
    ```

`console.log("two");` cannot start before `console.log("one");` is run and `console.log("three");` cannot start until `console.log("two");` is run.

This is the same thing as saying that JavaScript is a ["single threaded" language](https://www.collinsdictionary.com/us/dictionary/english/single-thread).

# How Asynchronous code helps.

The issue with this is that writing applications in this manner is that if code take a long time to execute, the overall app will be very slow and hinder user experience and practical usage.

Asynchronous code offers a solution for this by allowing code to start when it is called and finish later. This does not prevent the hinderance of other code that from being run while waiting for earlier code to complete.

# Table of Contents

## Chapter 1: First Examples

See the `sandbox.js` file for detailed comments.

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/AsyncAwait/Chapter_1)

## Chapter 2: HTTP Requests.

Probably one of the most basic things that you will be doing regularly when writing asynchronous code is running HTTP requests which usually take some time to run.

### What is a HTTP Requerst

Sometimes we want to display some stuff that is in a database or stored on a server somewhere. In order to get that data, we make a HTTP request to get that information from that server and do something with it. We make these particular requests to API endpoints.

We're going to be practicing with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) which allows us to play with HTTP requests and JSON data.

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/AsyncAwait/Chapter_2)

### Chapter 3: Status codes

Experimenting with status codes.

In summary

200 codes: Successful responses

300 codes: Redirection messages

400 codes: User error messages

500 codes: Server error messages.

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/AsyncAwait/Chapter_3)

### Chapter 4: Callback Functions

See the comments in the code. A working example for how asynchronous code works. Create a asynchronous function. Work with error handling.

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/AsyncAwait/Chapter_4)

### Chapter 5: Using JSON Data

JSON data is just a string that looks like a Javascript object. Learn how to turn a JSON string into a javascript object.

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/AsyncAwait/Chapter_5)

### Chapter 6: Callback Purgatory

So far we have only been calling our function `getTodos()` once to get the `todos.json` file. But what if we have multiple JSON files which we want to get interred (By interred we mean, request one file and wait till it is loaded and displayed before getting the other file.)?

The following codes provides an example of whats commonly reffered to as ["Callback Purgatory"](http://callbackhell.com). To remidey this, we need to look at something reffered to as "Promises".

[folder](https://github.com/benyamindsmith/LearningJS/tree/main/AsyncAwait/Chapter_6)

### Chapter 7: Promises