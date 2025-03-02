export const uploadController = (req, res) => {
  const { name, email, password } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  res.send(`File uploaded successfully: ${req.file.filename}`);
};