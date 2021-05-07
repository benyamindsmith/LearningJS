const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", () => {
  console.log("tutorial event has occured");
});

eventEmitter.on("sum", (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial");
eventEmitter.emit("sum", 1, 2);
