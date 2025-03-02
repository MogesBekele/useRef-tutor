import express from "express";
import multer from "multer";
import cors from "cors";
import { connectDB } from "./config/db";


const app = express();
const port = 4000;

app.use(express.json());

app.use(cors());

connectDB()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
