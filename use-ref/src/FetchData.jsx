import React, { useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FetchData;
