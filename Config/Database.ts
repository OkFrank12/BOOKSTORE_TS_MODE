import mongoose from "mongoose";

const bookstoreEndpoint = "mongodb://localhost:27017/database";

export const database = async () => {
  try {
    const dbConnect = await mongoose.connect(bookstoreEndpoint);
    console.log("");
    console.log(dbConnect.connection.host);
  } catch (error) {
    console.log(error);
  }
};

