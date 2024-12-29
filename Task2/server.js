const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chapterRoutes = require("./ChapterRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the chapter routes
app.use("/api/chapters", chapterRoutes);

// MongoDB Connection URL (replace with your MongoDB Atlas URI)
const mongoURI = "mongodb+srv://manasivtawade:manasi01@chapter-api-01.owh3b.mongodb.net/Chapters?retryWrites=true&w=majority&appName=Chapter-API-01";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });
