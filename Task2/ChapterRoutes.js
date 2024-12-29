const express = require("express");
const Chapter = require("./Chapter"); // Import the Chapter model
const router = express.Router();

// Create Chapter Route (POST)
router.post("/", async (req, res) => {
  const { title, content, author } = req.body;  // Add author to the destructuring

  // Validate that all required fields are present
  if (!title || !content || !author) {
    return res.status(400).json({ error: "Title, content, and author are required" });
  }

  try {
    // Create new chapter with title, content, and author
    const newChapter = new Chapter({
      title,
      content,
      author,
    });

    // Save the chapter to the database
    await newChapter.save();
    
    // Respond with the created chapter
    res.status(201).json(newChapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch Chapters Route (GET)
router.get("/", async (req, res) => {
  const { pageNo = 1 } = req.query; // Get the page number from query or default to 1
  const limit = 10; // Set the number of chapters per page
  const skip = (pageNo - 1) * limit; // Calculate how many chapters to skip

  try {
    // Fetch chapters with pagination
    const chapters = await Chapter.find()
      .skip(skip)
      .limit(limit); // Paginate results by skip and limit

    // Count total chapters to calculate total pages
    const totalChapters = await Chapter.countDocuments();
    const totalPages = Math.ceil(totalChapters / limit); // Calculate total pages

    // Send response with chapters and pagination information
    res.status(200).json({
      chapters,
      pagination: {
        totalChapters,
        totalPages,
        currentPage: pageNo,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
