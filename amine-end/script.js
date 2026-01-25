// Load visit count from local storage (persists in the browser)
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);

// Display the count
document.getElementById('counter').textContent = visitCount;

// Optional: Log to console for debugging
console.log(`Page visited ${visitCount} times`);

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
    localStorage.setItem('visitCount', 0);
    document.getElementById('counter').textContent = 0;
});
document.addEventListener("DOMContentLoaded", () => {
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount = parseInt(visitCount) + 1;
  localStorage.setItem("visitCount", visitCount);

  document.getElementById("counter").textContent = visitCount;

  document.getElementById("resetBtn").addEventListener("click", () => {
    localStorage.setItem("visitCount", 0);
    document.getElementById("counter").textContent = 0;
  });
});