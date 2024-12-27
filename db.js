const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn =await mongoose.connect(
            'mongodb+srv://manasivtawade:manasiproject@chapter-api-01.owh3b.mongodb.net/Chapters?retryWrites=true&w=majority&appName=Chapter-API-01', 
            {
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
