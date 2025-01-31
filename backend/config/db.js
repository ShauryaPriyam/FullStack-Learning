import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1); // 1 code means failure and 0 means success
  }
};
