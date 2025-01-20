import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";
// import User from "../models/users.js";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://Raj:6thsem@cluster0.hwwfs.mongodb.net/${DB_NAME}`);
    console.log("DB is connected");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
export default connectDB;
