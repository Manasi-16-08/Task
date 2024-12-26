import axios from 'axios';

// 1. Function to get all posts from JSONPlaceholder API
async function fetchAllPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response.data); // Log the response data
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// 2. Function to fetch a specific post with ID of 5
async function fetchPostById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response.data); // Log the specific post
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}

// 3. Function to create a new user
async function createUser() {
    const userData = {
        name: "Imeuswe App",
        email: "imeuswe@example.com"
    };
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
        console.log(response.data); // Log the created user data
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

// 4. Function to delete a user with ID of 2
async function deleteUser(userId) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (response.status === 200) {
            console.log(`User with ID ${userId} deleted successfully.`);
        } else {
            console.error('Error deleting user:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

// 5. Function to filter and map todos for user with ID 1
async function fetchUserTodos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
        const todos = response.data;

        // (a) Filter completed todos
        const completedTodos = todos.filter(todo => todo.completed);
        console.log('Completed Todos:', completedTodos);

        // (b) Map todos to rename "completed" to "done"
        const renamedTodos = completedTodos.map(todo => ({
            ...todo,
            done: todo.completed,
            completed: undefined // Remove the old property
        }));
        console.log('Renamed Todos:', renamedTodos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

// 6. Functions for additional utility

// (a) Function to add two numbers
export function addNumbers(a, b) {
    return a + b; // Return the sum of a and b
}

// (b) Function to return current date in format "Year/Month/Day"
export function getCurrentDate() {
    const date = new Date();
    return `${date?.getFullYear()()}/${(date?.getMonth() + 1)?.toString().padStart(2, '0')}/${date?.getDate()?.toString().padStart(2, '0')}`;
}

// 7. Promise handling examples

// (a) Using .then .catch
let r = new Promise((resolve) => {
    resolve("Completed");
});
r.then(value => console.log(value)).catch(error => console.error(error));

// (b) Using async/await and try..catch for error handling
async function sayHello() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("An error has occurred"), 1000);
    });
    try {
        await promise;
    } catch (error) {
        console.error(error); // Handle the error here
    }
}

// 8. Optional chaining example
const product = {
    name: 'Smartphone',
    details: {
        brand: 'XYZ',
        color: 'Black'
        // price property is missing
    }
};

const price = product.details?.price ?? 'Price not available'; // Use optional chaining and nullish coalescing
console.log(price);
