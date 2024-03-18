// Function to fetch a new joke from the API
async function fetchJoke() {
    try {
        const response = await fetch('https://api-ninjas.com/');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch joke: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data || !data.data || !data.data.joke) {
            throw new Error('Invalid joke data received from the API');
        }
        
        return data.data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        displayError('Sorry, something went wrong while fetching a joke. Please try again later.');
        return null;
    }
}

// Function to display error message
function displayError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
}
