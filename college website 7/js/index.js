// Smooth Scroll for Explore Now Button
document.getElementById("exploreBtn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.querySelector("#boxes").scrollIntoView({
      behavior: "smooth", // Smooth scroll
    });
  });
  
  // Search Functionality (Example)
const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".search-bar button");

// Function to handle search
function performSearch() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    alert("You searched for: " + searchTerm); // Replace with actual search logic
  } else {
    alert("Please enter a search term.");
  }
}

// Search on button click
searchButton.addEventListener("click", performSearch);

// Search on Enter key press
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch(); // Trigger search on Enter key
  }
});

// Add click event listeners to all boxes
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', () => {
    const link = box.getAttribute('data-link'); // Get the link from the data-link attribute
    if (link) {
      window.open(link, '_blank'); // Open the link in a new tab
    }
  });
});