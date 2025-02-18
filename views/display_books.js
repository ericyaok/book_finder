import { fetchReviews } from "../js/fetch_review.js"; // Import function to fetch book reviews

export function displayBooks(books, container) {
    container.innerHTML = ""; // Clear the container before displaying new books

    // Loop through each book in the provided list
    books.forEach(book => {
        const bookInfo = book.volumeInfo; // Extract book information
        const title = bookInfo.title || "Unknown Title"; // Get title or set a default value
        const authors = bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author"; // Get authors or set a default value
        const isbn = bookInfo.industryIdentifiers ? bookInfo.industryIdentifiers[0].identifier : null; // Get ISBN if available
        const cover = bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x192?text=No+Image"; // Get cover image or use a placeholder
        const moreInfoLink = bookInfo.infoLink; // Link to more book details

        // Create book card
        const bookElement = document.createElement("div");
        bookElement.classList.add("book-card"); // Add class for styling
        bookElement.innerHTML = `
            <img src="${cover}" alt="Book Cover"> 
            <h3>${title}</h3>
            <p>Author(s): ${authors}</p>
            <p><a href="${moreInfoLink}" target="_blank">More Info</a></p>
            ${isbn ? `<button class="review-btn" data-isbn="${isbn}">View Reviews</button>` : "<p>No ISBN available</p>"}
            <div class="reviews" id="reviews-${isbn}"></div>
        `;

        container.appendChild(bookElement); // Append the book card to the container

        // Add event listener to "View Reviews" button if ISBN is available
        if (isbn) {
            const reviewButton = bookElement.querySelector(".review-btn");
            if (reviewButton) {
                reviewButton.addEventListener("click", () => {
                    fetchReviews(isbn); // Fetch reviews when the button is clicked
                });
            }
        }  
    });
}
