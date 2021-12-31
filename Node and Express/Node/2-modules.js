// Modules
// CommonJs, every file is a module (by default)
// Modules -Encapsulated Code (only share minimum)
const names = require("./3-names");
const sayHi = require("./4-utils");

sayHi(names.ben);
sayHi(names.shev);
sayHi(names.yosef);
