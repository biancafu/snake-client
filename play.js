const connect = require("./client");

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  process.stdout.write('.');
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
//connect();
setupInput();