// The readline module!
const readline = require("readline");
//Make a input/output user interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let variables can be updated, not redefined
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;


rl.question(`What is ${num1} + ${num2}?\n`, (userInput) => {
  if (userInput.trim() == answer) {
    rl.close();
    rl.write(`correct!`);
  } else {
    // Set the prompt
    rl.setPrompt(`Incorrect answer. Please try again.\n`);
    // Call the prompt
    rl.prompt();
    // Add a listener for the users input
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(
          `Your answer of ${userInput} is incorrect. Try again.\nWhat is ${num1} + ${num2}?\n`
        );
        rl.prompt();
      }
    });
  }
});

// Response on close
rl.on("close", () => {
  console.log("Thanks for playing!");
});
