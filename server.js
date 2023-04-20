const server = require("./app");
const config = require("./config/config");

const serverPort = config.port;

server.listen(serverPort, () => {
  console.log(`server is running port ${serverPort}`);
});
