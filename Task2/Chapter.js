const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"], // Title is required
  },
  content: {
    type: String,
    required: [true, "Content is required"], // Content is required
  },
  author: {
    type: String,
    required: [true, "Author is required"], // Author is now required
  },
});

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
