const server = require("./app");
const config = require("./config/config");
const connectDB = require("./config/db");

const serverPort = config.port;

connectDB();

server.listen(serverPort, () => {
  console.log(`server is running port ${serverPort}`);
});
