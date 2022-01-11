const { readFile, writeFile } = require("fs");

// An example of callback purgatory

readFile("./content/subfolder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    console.log(first, second);
    writeFile(
      "./content/subfolder/combined-asyc.txt",
      `This is the combined text ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
