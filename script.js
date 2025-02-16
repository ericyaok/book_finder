document.getElementById("search_button").addEventListener("click", function () {
    const query = document.getElementById("search_box").value.trim();
    if (query === "") return;

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById("results");
            resultsContainer.innerHTML = ""; // Clear previous results

            if (!data.items) {
                resultsContainer.innerHTML = "<p>No books found.</p>";
                return;
            }

            data.items.forEach(book => {
                const bookInfo = book.volumeInfo;
                const bookElement = document.createElement("div");
                bookElement.innerHTML = `
                    <h3>${bookInfo.title}</h3>
                    <p>${bookInfo.authors ? bookInfo.authors.join(", ") : "Unknown Author"}</p>
                    <img src="${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : "https://via.placeholder.com/128x192?text=No+Image"}" alt="Book Cover">
                    <p><a href="${bookInfo.infoLink}" target="_blank">More Info</a></p>
                `;
                resultsContainer.appendChild(bookElement);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("results").innerHTML = "<p>Error fetching books. Try again later.</p>";
        });
});