const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
