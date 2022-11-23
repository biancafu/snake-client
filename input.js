const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  let string ="";
  switch(key) {
    case "w":
      string = "Move: up";
      break;
    case "s":
      string = "Move: down";
      break;
    case "a":
      string = "Move: left";
      break;
    case "d":
      string = "Move: right";
      break;
    case "r":
      string = "Say: rip";
      break;
    case "p":
      string = "Say: gg go next";
      break;
  }
  connection.write(string);
};

let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
//  return stdin;
};


module.exports = {handleUserInput, setupInput};