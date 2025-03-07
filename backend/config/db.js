import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected successful");
  } catch (error) {
    console.log("db error", error);
  }
};