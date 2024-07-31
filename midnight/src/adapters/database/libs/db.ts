import mongoose, { Mongoose } from "mongoose";

// Define a type for the global mongoose object
interface GlobalMongoose {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend the NodeJS Global interface
declare global {
  var mongoose: GlobalMongoose;
}

// Initialize the global mongoose object
global.mongoose = {
  conn: null,
  promise: null,
};

// Function to check if the database is connected
async function checkAndConnect(): Promise<void> {
  if (global.mongoose.conn && global.mongoose.conn) {
    console.log("Database is already connected.");
    return;
  }

  const conString = process.env.MONGO_URL;

  if (!conString) {
    throw new Error("MONGO_URL environment variable is not defined");
  }

  console.log("Connecting to the database...");
  const promise = mongoose.connect(conString, {
    autoIndex: true,
  });

  global.mongoose = {
    conn: await promise,
    promise,
  };

  console.log("Database connection established.");
}

// Function to disconnect from the database
export const disconnect = (): void => {
  if (!global.mongoose.conn) {
    console.log("No active database connection to disconnect.");
    return;
  }
  console.log("Disconnecting from the database...");
  global.mongoose.conn = null;
  mongoose.disconnect();
  console.log("Database disconnected.");
};

// Export the checkAndConnect function
export { checkAndConnect };
