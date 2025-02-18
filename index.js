import { searchBooks } from "./js/fetch_book.js"; // Import function to fetch books
import { displayBooks } from "./views/display_books.js"; // Import function to display books
import { loadTheme, toggleTheme } from "./js/theme.js"; // Import theme-related functions
import { displayRecentSearches, saveRecentSearch } from "./js/fetch_recent.js"; // Import functions for handling recent searches

document.addEventListener("DOMContentLoaded", () => {
    displayRecentSearches(); // Load and display recent searches when the page loads

    const themeToggle = document.getElementById("themeToggle"); // Get theme toggle button
    themeToggle.addEventListener("click", () => {
        toggleTheme(themeToggle); // Toggle theme when button is clicked
    });
    loadTheme(); // Load saved theme from local storage

    const lastVisitElement = document.getElementById("lastVisit"); // Get element to display last visit time
    const lastVisit = localStorage.getItem("lastVisit"); // Retrieve last visit time from local storage

    // Display the last visit time if it exists; otherwise, show a welcome message
    if (lastVisit) {
        lastVisitElement.textContent = `Last visited: ${lastVisit}`;
    } else {
        lastVisitElement.textContent = "You are welcome!";
    }

    // Store the current visit time in local storage
    const currentTime = new Date().toLocaleString();
    localStorage.setItem("lastVisit", currentTime);

    const searchInput = document.getElementById("search_box"); // Get search input field
    const searchButton = document.getElementById("search_button"); // Get search button
    const resultsContainer = document.getElementById("results"); // Get container for displaying book results

    // Add event listener to search button
    searchButton.addEventListener("click", async () => {
        const query = searchInput.value.trim(); // Get user input and remove extra spaces
        if (query) {
            const books = await searchBooks(query); // Fetch books based on search query
            displayBooks(books, resultsContainer); // Display search results
            saveRecentSearch(query); // Save the search query to recent searches
        }
    });
});
