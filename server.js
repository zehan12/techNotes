const server = require("./app");
const PORT = process.env.PORT || 3500;

server.listen(PORT, () => {
  console.log(`server is running port ${PORT}`);
});
