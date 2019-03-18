const http = require("http");
const app = require("./backend/app");

const normallizePort = val => {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    //name pipe
    return val;
  }
  if (port >= 0) {
    //port number
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const blind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.log(blind + " requires elevated privileges");
      process.exit();
      break;
    case "EADDRINUSE":
      console.log(blind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
};
const onListening = () => {
  const addr = server.address();
  const blind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  debug("Listening on " + blind);
};