"# Task1" 
# User Management and API Integration

This project demonstrates how to use basic JavaScript and Axios for interacting with a REST API. It includes functionality for creating, updating, deleting, and fetching user data from an external API, specifically from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Features
- Create a new user
- Fetch all users
- Fetch a specific user by ID
- Update a user
- Delete a user
- Display current date
- Basic form submission with validation

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (for running JavaScript on the server)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/user-management-api.git
    cd Tasak1
2. Install dependencies

Make sure you have the required dependencies. This project uses axios for making HTTP requests.

    ```bash
    npm install

3. Usage

Run the project
To start the project, you can run the following command:

    ```bash
    npm start
This will run the script, and you can test the functionality of the various API calls in the browser's console.

API Functions

The following API functions are available:

addNumbers(a, b): Adds two numbers and returns the sum.
getCurrentDate(): Returns the current date in "YYYY/MM/DD" format.
createUser(data): Creates a new user by sending a POST request to the API.
getUsers(): Fetches a list of users from the API.
fetchPostById(id): Fetches a post by its ID.
fetchAllPosts(): Fetches all posts.
updateUser(userId, data): Updates a user by sending a PUT request to the API.
deleteUser(userId): Deletes a user by sending a DELETE request to the API.
fetchUserTodos(): Fetches a list of todos from the API.


Testing
You can test the functions by calling them directly in the console:

    ```javascript
    console.log(addNumbers(5, 10)); // Expected output: 15
    console.log(getCurrentDate()); // Expected output: Current date in "YYYY/MM/DD" format

    fetchAllPosts();
    fetchPostById(5);
    createUser();
    deleteUser(2);
    fetchUserTodos();
These will output the results in the browser's console, and the status of the HTTP requests will be logged there as well.

4. File Structure
The project has the following structure:

/Task2
  ├── index.js            # JavaScript file with all the API functions
  ├── index.html          # HTML file for the signup form
  ├── styles.css          # Styles for the form and messages
  └── README.md           # Project documentation (this file)


License
This project is licensed under the MIT License - see the LICENSE file for details.


### Key Sections:

1. **Overview**: Explains what the project is about and the features it provides.
2. **Prerequisites**: Lists the software required to run the project.
3. **Setup**: Provides the steps to clone the repository, install dependencies, and start the project.
4. **Usage**: Describes how to use the API functions and test them.
5. **File Structure**: Describes the project structure so users can easily navigate it.






