document.querySelector('.feedback-form').addEventListener('submit', function() {
  setTimeout(() => {
    this.reset(); // Clears all form fields
  }, 1000); // Waits 1 second to ensure submission completes
});