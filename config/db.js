// Import required modules
const mongoose = require("mongoose");
const config = require("./config");
const { logEvents } = require("../middlewares/logger");

/**
 * Connects to the MongoDB database specified in the configuration file.
 */
const connectDB = async () => {
  // Replace password placeholder in connection string with actual password
  const DB = config.db.url.replace("<password>", config.db.password);

  // Configure Mongoose options
  mongoose.set("autoIndex", true);
  mongoose.set("strictQuery", true);

  // Use global Promise library
  mongoose.promise = global.Promise;

  // Connect to MongoDB database
  mongoose.connect(DB);

  // Get a reference to the database connection
  const connection = mongoose.connection;

  // Log when a connection is being established
  console.log("Connecting to MongoDB database...");

  // Set up event listeners for database connection status
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully!");
  });

  connection.on("error", (err) => {
    // Log error to file
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, "mongoErrLog.log");

    // Log error to console and exit process
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit(1);
  });

  connection.on("connecting", () => {
    console.log("Connecting to MongoDB database...");
  });

  connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB database.");
  });

  connection.on("disconnected", () => {
    console.log("Mongoose connection to MongoDB database disconnected.");
  });

  // Close database connection when process is terminated
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
};

// Export the connectDB function for use in other modules
module.exports = connectDB;
