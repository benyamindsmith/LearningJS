// The File System module!
const fs = require("fs");
// create a file
// fs.writeFile("example.txt", "This is an example", (err) => {
//   // Error handling
//   if (err) console.log(err);
//   else {
//     console.log("File sucessfully created!");
//     // Encoding needs to be specified (as utf8) otherwise binary buffered result will be returned
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// Renaming files

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("File sucessfully renamed!");
//   }
// });

// Append Data to file

// fs.appendFile("example2.txt", "some data I want to append", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("data successfully appended");
//   }
// });

// Delete File

fs.unlink("example2.txt", (err) => {
  if (err) console.log(err);
  else {
    console.log("File Deleted!");
  }
});
