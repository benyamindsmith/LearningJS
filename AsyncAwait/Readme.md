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
