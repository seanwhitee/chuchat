import mongoose from "mongoose";

let isConnected = false;

const connectToDatabase = async () => {
  // Enable mongoose struct type layer
  mongoose.set("strictQuery", true);

  // If no connection string
  if (!process.env.MONGODB_URL) {
    console.log("No connection string!");
  }

  // Tell user that the connection is already established
  if (isConnected) {
    console.log("The connection is already established!");
  }

  try {
    // connect to mongodb
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connect success!");
  } catch(error) { 
    console.log(error);
  }
};
