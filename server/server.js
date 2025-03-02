import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { uploadController } from "./uploadController.js";
import fs from 'fs';
import path from 'path';

dotenv.config(); // Load environment variables

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), uploadController);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
});
