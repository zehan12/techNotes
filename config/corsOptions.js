const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // it will allow listed one and !origin for postman and desktop
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  credential: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
