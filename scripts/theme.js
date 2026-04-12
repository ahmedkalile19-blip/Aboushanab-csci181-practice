// Select the button
const toggleBtn = document.querySelector("#theme-toggle");

// Add click event listener to the button
toggleBtn.addEventListener("click", () => {
  // Toggle the 'dark' class on the body
  document.body.classList.toggle("dark");

  // Check if dark mode is active
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "🌙 Switch to Light Mode";
  } else {
    toggleBtn.textContent = "☀️ Switch to Dark Mode";
  }
});
