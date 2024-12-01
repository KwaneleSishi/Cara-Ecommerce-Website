// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

// Show the side menu
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// Close the side menu when the close icon is clicked
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

// Close the side menu when clicking outside
document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !bar.contains(event.target)) {
    nav.classList.remove('active');
  }
});

// Close the side menu when swiping right
let startX;
nav.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

nav.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const deltaX = touch.clientX - startX;

  if (deltaX > 50) { // Swipe right threshold
    nav.classList.remove('active');
  }
});
