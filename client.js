const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write(`Name: BFF`);
    console.log("Successfully connected to game server");
    setTimeout(() => {
      conn.write("Move: up");
    },1000);
    setTimeout(() => {
      conn.write("Move: left");
    },1050);
    setTimeout(() => {
      conn.write("Move: up");
    },1100);
    setInterval(() => {
      conn.write("Move: right");
    }, 50);
  });

  conn.on("data", (message) => {
    // code that does something when the connection is first established
    console.log("server says: " + message);
  });
  return conn;
};




module.exports = connect;