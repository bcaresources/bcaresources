// Sliding Menu Logic
const hamburgerMenu = document.getElementById("hamburgerMenu");
const slidingMenu = document.getElementById("slidingMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.createElement("div"); // Create overlay dynamically

overlay.className = "overlay";
document.body.appendChild(overlay);

// Open Menu
hamburgerMenu.addEventListener("click", () => {
  slidingMenu.classList.add("active");
  overlay.style.display = "block";
});

// Close Menu
closeMenu.addEventListener("click", closeSlider);
overlay.addEventListener("click", closeSlider);

// Close on menu item click
document.querySelectorAll(".sliding-menu a").forEach(link => {
  link.addEventListener("click", closeSlider);
});

function closeSlider() {
  slidingMenu.classList.remove("active");
  overlay.style.display = "none";
}

// Search Functionality for Sliding Menu
const menuSearchButton = document.getElementById("menuSearchButton");
const menuSearchInput = document.getElementById("menuSearchInput");

menuSearchButton.addEventListener("click", () => {
  const searchTerm = menuSearchInput.value.trim();
  if (searchTerm) {
    alert("You searched for: " + searchTerm); // Replace with actual search logic
  } else {
    alert("Please enter a search term.");
  }
});

// Optional: Add Enter key functionality
menuSearchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    menuSearchButton.click(); // Trigger search on Enter key
  }
});

// Theme Toggle Button
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("bright-theme");
  const isBrightTheme = body.classList.contains("bright-theme");
  themeToggle.innerHTML = isBrightTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block"; // Show the button
  } else {
    backToTopButton.style.display = "none"; // Hide the button
  }
});

backToTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});