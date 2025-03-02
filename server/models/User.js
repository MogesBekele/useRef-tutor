import mongoose from "mongoose";

// User schema definition
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, required: true },
});

// User model creation
const User = mongoose.model("User", userSchema);

export default User;
