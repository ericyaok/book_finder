// Load saved theme from local storage
export function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light"; // Retrieve the saved theme or default to "light"
    document.body.classList.toggle("dark-mode", savedTheme === "dark"); // Apply dark mode if the saved theme is "dark"
}

// Toggle theme and save to local storage
export function toggleTheme(button) {
    const isDarkMode = document.body.classList.toggle("dark-mode"); // Toggle the dark mode class on the body
    localStorage.setItem("theme", isDarkMode ? "dark" : "light"); // Save the updated theme preference in local storage

    // Change the button text based on the current theme
    button.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}
