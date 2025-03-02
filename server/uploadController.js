import User from "./models/User.js";

export const uploadController = async (req, res) => {
  const { name, email, password } = req.body;
  const filename = req.file.filename;

  try {
    const newUser = new User({
      name,
      email,
      password,
      filename,
    });

    await newUser.save();

    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    res.send(`File uploaded successfully: ${filename}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};