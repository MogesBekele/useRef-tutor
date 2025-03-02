import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors());

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
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(() => {
  console.log(`Server is running on port ${port} `);
});
