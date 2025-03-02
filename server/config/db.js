import mongoose from "mongoose";

// Database connection function
export const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

