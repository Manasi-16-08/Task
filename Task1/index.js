// index.js

// Function to create a user using Axios
async function createUser(data) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', data);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Function to retrieve users using Axios
async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Function to update a user using Axios
async function updateUser(userId, data) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

// Function to delete a user using Axios
async function deleteUser(userId) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

// Utility function to display messages
function showMessage(message, type = 'success') {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type;
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 3000);
}

// Event listener for the signup form
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        showMessage('Name and email are required.', 'error');
        return;
    }

    try {
        const user = await createUser({ name, email });
        showMessage(`User ${user.name} created successfully!`);
    } catch (error) {
        showMessage('Failed to create user. Please try again.', 'error');
    }
});

// Example calls for testing
(async function () {
    try {
        const users = await getUsers();
        console.log('Users:', users);

        const updatedUser = await updateUser(1, { name: 'Updated Name', email: 'updatedemail@example.com' });
        console.log('Updated User:', updatedUser);

        const deletedUser = await deleteUser(1);
        console.log('Deleted User:', deletedUser);
    } catch (error) {
        console.error('Error in operations:', error);
    }
})();
