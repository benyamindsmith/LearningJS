//loading in the module
const os = require("os");

// Get info about current user.
const user = os.userInfo();
console.log(user);

// Get  info on how long the computer has been running (in seconds)
// [Uptime]

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
