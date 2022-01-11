const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/subfolder/combined.txt",
  `Here is the result: ${first} ${second}`
);

const combined = readFileSync("./content/subfolder/combined.txt", "utf-8");

console.log(combined);

// If we want to append to the file we add the {flag: 'a'} argument

writeFileSync(
  "./content/subfolder/combined.txt",
  `Here is the result: ${first} ${second}`,
  { flag: "a" }
);

const newCombined = readFileSync("./content/subfolder/combined.txt", "utf-8");

console.log(newCombined);
