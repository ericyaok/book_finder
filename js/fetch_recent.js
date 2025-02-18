
const MAX_RECENT_SEARCHES = 5;

export function saveRecentSearch(query) {
    let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    
    // Remove duplicate searches
    searches = searches.filter(item => item !== query);
    
    // Add new search to the top
    searches.unshift(query);

    // Keep only the last 5 searches
    if (searches.length > MAX_RECENT_SEARCHES) {
        searches.pop();
    }

    // Save to local storage
    localStorage.setItem("recentSearches", JSON.stringify(searches));

    // Update UI
    displayRecentSearches();
}

export function displayRecentSearches() {
    const container = document.getElementById("recentSearches"); // Get the container element for recent searches
    if (!container) return; // Exit if the container is not found

    container.innerHTML = ""; // Clear the container before displaying recent searches

    // Retrieve the list of recent searches from localStorage, or use an empty array if none exist
    let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];

    // Iterate through each saved search query
    searches.forEach(query => {
        const button = document.createElement("button"); // Create a new button for the search query
        button.textContent = query; // Set the button text to the search query
        button.classList.add("recent-search-btn"); // Add a CSS class for styling

        // Set the button click event to populate the search box and perform a search
        button.onclick = () => {
            document.getElementById("search_box").value = query; // Set the search input value
            searchBooks(query); // Trigger a new search with the selected query
        };

        container.appendChild(button); // Append the button to the container
    });
}



