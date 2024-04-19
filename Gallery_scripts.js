document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch images based on category
    function fetchImagesByCategory(category) {
        // Define the API endpoint for images based on category
        const apiUrl = `https://source.unsplash.com/featured/?${category}`;

        // Number of images to fetch
        const numImages = 200;

        // Get the container for dynamic images
        const dynamicImagesContainer = document.getElementById("dynamic-images");

        // Clear previous images
        dynamicImagesContainer.innerHTML = "";

        // Loop to fetch images and create img elements
        for (let i = 0; i < numImages; i++) {
            // Create img element
            const img = document.createElement("img");

            // Set src attribute to fetch a random image from the API based on category
            img.src = `${apiUrl}&${Math.floor(Math.random() * 1000)}`; // Adding a random number to ensure unique images

            // Append the img element to the container
            dynamicImagesContainer.appendChild(img);
        }
    }

    // Call the function to fetch images when the page loads
    fetchImagesByCategory("nature");

    // Event listener for category buttons
    const categoryButtons = document.querySelectorAll(".category-btn");
    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.dataset.category;
            fetchImagesByCategory(category);
        });
    });
});