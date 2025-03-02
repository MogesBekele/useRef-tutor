import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => console.error(err));

db.once("open", () => console.log("Connected to MongoDB"));

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  image: {type: String, required: true, unique: true},

});

const User = mongoose.model("User", userSchema);


export default User;

