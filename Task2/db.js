const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://manasivtawade:manasi01@chapter-api-01.owh3b.mongodb.net/Chapters?retryWrites=true&w=majority&appName=Chapter-API-01', {
                    });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
