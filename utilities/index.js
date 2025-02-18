export function setLoading(isLoading) {
    const resultsContainer = document.getElementById("results"); // Get the container where search results are displayed

    // Show a loading message if isLoading is true; otherwise, clear the container
    resultsContainer.innerHTML = isLoading ? "<p>Loading books...</p>" : "";
}
