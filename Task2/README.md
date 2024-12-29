#Task2 
#Chapters API

A simple API for managing chapters. The API allows you to create new chapters and fetch existing chapters with pagination.

## Features

- Create a new chapter with a title, content, and author.
- Fetch a list of chapters with pagination.

## Technologies Used

- Node.js
- Express
- MongoDB (MongoDB Atlas or local instance)

## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [MongoDB](https://www.mongodb.com/) (either local or use MongoDB Atlas)
- [Postman](https://www.postman.com/) or any other API testing tool

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chapters-api.git

2. Navigate to the project directory:
    ```bash
    cd chapters-api


Install the dependencies:

    ```bash
    npm init -y
    npm install express mongoose lodash body-parser
    npm install
Set up your MongoDB database (either local or on MongoDB Atlas).

If using MongoDB Atlas, make sure to get your connection string and replace it in the .env file:

    ```makefile
    MONGO_URI=your_mongodb_connection_string

If using a local MongoDB server, you can set the connection string like this:

    ```bash
    MONGO_URI=mongodb://localhost:27017/chapters
Start the application:
    
    ```bash
    npm start
The server will run on http://localhost:3000.

API Endpoints
1. Create a Chapter (POST)
URL: /api/chapters

Method: POST

Request Body:

json
Copy code
{
  "title": "Introduction",
  "content": "This is the first chapter.",
  "author": "Manasi Tawade"
}
Response:

Success (201): Returns the created chapter object.

json
Copy code
{
  "_id": "5f50c31b2d4b77e4e9e8c9c9",
  "title": "Introduction",
  "content": "This is the first chapter.",
  "author": "Manasi Tawade",
  "__v": 0
}
Error (400): If required fields are missing:

json
Copy code
{
  "error": "Title, content, and author are required"
}
Error (500): If server error occurs:

json
Copy code
{
  "error": "Error message"
}
2. Fetch Chapters (GET)
URL: /api/chapters?pageNo=1

Method: GET

Query Parameters:

pageNo: Page number for pagination (optional, defaults to 1).
Response:

Success (200): Returns a list of chapters with pagination information.

    ```json
    {
    "chapters": [
    {
      "_id": "5f50c31b2d4b77e4e9e8c9c9",
      "title": "Introduction",
      "content": "This is the first chapter.",
      "author": "Manasi Tawade",
      "__v": 0
    }
    ],
    "pagination": {
        "totalChapters": 10,
        "totalPages": 1,
        "currentPage": 1
     }
    }
Error (500): If server error occurs:

    ```json
    {
     "error": "Error message"
    }
#Folder Structure
Task2
├── node_modules/          # Node.js modules
├── .env                   # Environment variables (for MongoDB URI)
├── package.json           # Project dependencies and scripts
├── server.js              # Main application file
├── chapter.js         # Chapter API routes
├── ChapterRoutes.js         # Mongoose schema for Chapter
└── README.md              # Project documentation
# Troubleshooting
Error: "Could not connect to MongoDB": Ensure MongoDB is running or your MongoDB Atlas cluster is properly set up.
Error: "400 Bad Request": Ensure you are sending all required fields (title, content, and author) in the request body.


### Key Sections:

1. **Introduction**: Describes the functionality of the API.
2. **Installation**: Instructions to set up and run the project.
3. **API Documentation**: Details about the `POST` and `GET` endpoints, with example requests and responses.
4. **Folder Structure**: A description of the project file organization.
5. **Troubleshooting**: Some common errors and solutions.

You can copy this content into your `README.md` file. Let me know if you'd like to add or modify any sections!
