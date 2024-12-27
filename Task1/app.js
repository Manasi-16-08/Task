document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Basic validation
    if (!name || !email) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    const userData = { name, email };

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData);

        showMessage(`User created successfully! ID: ${response.data.id}`, 'success'); // Show success message
        clearForm(); // Clear the form after successful submission
    } catch (error) {
        console.error('Error during signup:', error);
        showMessage('Error during signup. Please try again.', 'error'); // Show error message
    }
});

// Function to display messages
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type; // Set class based on type (success/error)
    messageDiv.classList.remove('hidden'); // Show the message div
}

// Function to clear the form fields
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}
