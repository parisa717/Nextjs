const { default: mongoose } = require("mongoose");


const connection = {};
/**
 * Establishes a connection to the MongoDB database
 * @returns {Promise} a promise that resolves to a connection object
 */
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      // If already connected, return the existing connection
      console.log("Using existing Connection");
      return;
    }

    // Establish a connection to the MongoDB database
    const db = await mongoose.connect(process.env.MONGO);

    // Set the connection status
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    // Throw a custom error to notify the caller of the connection failure
    throw new Error("Could not connect to MongoDB. Make sure MongoDB is running.");
  }
};
