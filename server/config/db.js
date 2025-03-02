import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    console.log("Mongo URI:", mongoUri); // Add this line to debug

    await mongoose.connect(mongoUri, {
      // useNewUrlParser: true, // Remove this line
      // useUnifiedTopology: true, // Remove this line
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export { connectDB };

