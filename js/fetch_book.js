import { setLoading } from "../utilities/index.js"; // Importing the setLoading function to indicate loading state

export async function searchBooks(query) {
    try {
        setLoading(true); // Set loading state to true before starting the API request
        
        // Fetch book data from Google Books API, encoding the query to handle special characters
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
        
        // Check if the response is successful; if not, throw an error
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        // Parse the JSON response to extract book data
        const data = await response.json();
        
        return data.items; // Return the list of book items from the API response
    } catch (error) {
        console.error("Error fetching books:", error); // Log any errors that occur during the fetch operation
        return []; // Return an empty array in case of an error to avoid breaking the application
    } finally {
        setLoading(false); // Ensure loading state is set to false once the operation completes (success or error)
    }
}
