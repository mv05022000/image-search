// script.js
const jokeDisplay = document.getElementById('joke-display');
const newJokeBtn = document.getElementById('new-joke-btn');
const shareJokeBtn = document.getElementById('share-joke-btn');
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode-btn');

// Function to fetch a new joke from the API
// Function to fetch a new joke from the API
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
        return 'Sorry, something went wrong while fetching a joke. Please try again later.';
    }
}



// Function to display the fetched joke
function displayJoke(joke) {
    jokeDisplay.textContent = joke;
}

// Event listener for the "Tell Me A Joke" button
newJokeBtn.addEventListener('click', async () => {
    const joke = await fetchJoke();
    displayJoke(joke);
});

// Event listener for the "Share Joke" button
shareJokeBtn.addEventListener('click', () => {
    const joke = jokeDisplay.textContent;
    if (navigator.share) {
        navigator.share({
            title: 'Check out this joke!',
            text: joke,
        })
        .then(() => console.log('Joke shared successfully'))
        .catch(error => console.error('Error sharing joke:', error));
    } else {
        alert('Sharing is not supported on this browser.');
    }
});

// Event listener for the "Dark Mode" button
toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
