require("dotenv").config({ path: __dirname + "/../.env" });

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3500,
  db: {
    url: process.env.MONGO_URI,
    password: process.env.DATABASE_PASSWORD,
  },
};

module.exports = config;
