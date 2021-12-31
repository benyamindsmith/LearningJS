const path = require("path");

//Find our platform specific seperator

console.log(path.sep);

// Normalize a filepath
const filePath = path.join("\\content", "subfolder", "test.txt");

console.log(filePath);

// Get the base file.

console.log(path.basename(filePath));

// Get the absolute path

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);

console.log(absolutePath);
