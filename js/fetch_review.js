import { displayBookReviews } from "../views/display_reviews.js"; // Import function to display book reviews

// Fetch reviews only when "View Reviews" is clicked
export function fetchReviews(isbn) {
    // Construct the API URL using the provided ISBN
    const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;

    // Fetch book review data from Open Library API
    fetch(apiUrl)
        .then(response => response.json()) // Parse the JSON response
        .then(data => displayBookReviews(data, isbn)) // Pass the data to displayBookReviews function
        .catch(error => console.error("Error fetching reviews:", error)); // Log any errors that occur
}


