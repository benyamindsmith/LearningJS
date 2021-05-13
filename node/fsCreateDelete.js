// The File System module!
const fs = require("fs");

// create a folder
fs.mkdir("Tutorial", (err) => {
  if (err) console.log(err);
  else console.log("folder sucessfully created!");
});

// remove a folder

fs.rmdir("Tutorial", (err) => {
  if (err) console.log(err);
  else console.log("folder sucessfully Deleted!");
});

// create a folder and add a file
fs.mkdir("Tutorial", (err) => {
  if (err) console.log(err);
  else
    fs.writeFile("./Tutorial/example.txt", "This is some data", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("sucessfully created folder and file!");
        // To delete a folder with a file in it, we need to first remove the file
        fs.unlink("./Tutorial/example.txt", (err) => {
          if (err) console.log(err);
          else
            fs.rmdir("Tutorial", (err) => {
              if (err) console.log(err);
              else console.log("Folder and file sucessfully deleted!");
            });
        });
      }
    });
});
