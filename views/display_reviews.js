export function displayBookReviews(data, isbn) {
    const bookKey = `ISBN:${isbn}`; // Construct the key to access book data
    const book = data[bookKey]; // Retrieve book information from the API response
    const reviewsContainer = document.getElementById(`reviews-${isbn}`); // Get the container for displaying reviews

    if (!reviewsContainer) return; // Prevent errors if the container does not exist

    if (book) {
        // Get the book's average rating or display a default message if unavailable
        const rating = book.ratings_average ? `${book.ratings_average} ⭐` : "No rating available";

        // Get the number of reviews or display a default message if unavailable
        const reviewCount = book.ratings_count ? `${book.ratings_count} reviews` : "No reviews available";

        // Display the rating and review count inside the container
        reviewsContainer.innerHTML = `
            <p>Rating: ${rating}</p>
            <p>Reviews: ${reviewCount}</p>
        `;
    } else {
        // Display a message if no reviews are found for the book
        reviewsContainer.innerHTML = "<p>No reviews found.</p>";
    }
}
