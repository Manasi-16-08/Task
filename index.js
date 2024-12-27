const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./ConnectDB'); // Make sure to implement this for DB connection
const StoryModel = require('./models/Story'); // MongoDB schema for Story
const ChapterModel = require('./models/Chapter'); // MongoDB schema for Chapter
const UserModel = require('./models/user'); // MongoDB schema for User

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Basic Route
app.get('/', (req, res) => {
    res.send('Welcome to the Chapter API');
});

// Create a new story
app.post('/stories', async (req, res) => {
    const { title, description, userId } = req.body;

    try {
        const story = new StoryModel({ title, description, userId });
        await story.save();
        res.status(201).json(story);
    } catch (error) {
        res.status(500).json({ message: 'Error creating story', error });
    }
});

// Create a new chapter
app.post('/chapters', async (req, res) => {
    const { title, content, userId, storyId } = req.body;

    try {
        const chapter = new ChapterModel({ title, content, userId, storyId });
        await chapter.save();
        res.status(201).json(chapter);
    } catch (error) {
        res.status(500).json({ message: 'Error creating chapter', error });
    }
});

// Get all stories
app.get('/stories', async (req, res) => {
    try {
        const stories = await StoryModel.find();
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stories', error });
    }
});

// Get all chapters
app.get('/chapters', async (req, res) => {
    try {
        const chapters = await ChapterModel.find();
        res.status(200).json(chapters);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chapters', error });
    }
});

// Get a specific story by ID
app.get('/stories/:id', async (req, res) => {
    try {
        const story = await StoryModel.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json(story);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching story', error });
    }
});

// Get a specific chapter by ID
app.get('/chapters/:id', async (req, res) => {
    try {
        const chapter = await ChapterModel.findById(req.params.id);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.status(200).json(chapter);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching chapter', error });
    }
});

// Update a story
app.put('/stories/:id', async (req, res) => {
    const { title, description } = req.body;

    try {
        const updatedStory = await StoryModel.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
        if (!updatedStory) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json(updatedStory);
    } catch (error) {
        res.status(500).json({ message: 'Error updating story', error });
    }
});

// Update a chapter
app.put('/chapters/:id', async (req, res) => {
    const { title, content } = req.body;

    try {
        const updatedChapter = await ChapterModel.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!updatedChapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.status(200).json(updatedChapter);
    } catch (error) {
        res.status(500).json({ message: 'Error updating chapter', error });
    }
});

// Delete a story
app.delete('/stories/:id', async (req, res) => {
    try {
        const deletedStory = await StoryModel.findByIdAndDelete(req.params.id);
        if (!deletedStory) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json({ message: 'Story deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting story', error });
    }
});

// Delete a chapter
app.delete('/chapters/:id', async (req, res) => {
    try {
        const deletedChapter = await ChapterModel.findByIdAndDelete(req.params.id);
        if (!deletedChapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.status(200).json({ message: 'Chapter deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting chapter', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
