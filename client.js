const net = require("net");
const { IP, PORT, name } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write(name);
    console.log("Successfully connected to game server");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },1000);
    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 50);
  });

  conn.on("data", (message) => {
    // code that does something when the connection is first established
    console.log("server says: " + message);
  });
  return conn;
};




module.exports = {connect};