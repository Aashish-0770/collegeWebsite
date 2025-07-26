// Show welcome alert when page loads
window.addEventListener('load', () => {
  alert('Welcome to Aashish College - Best BSc IT College in Nepal!');
});

// Highlight navbar on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#222';  // Dark background on scroll
  } else {
    navbar.style.backgroundColor = 'transparent';  // Reset
  }
});

// Apply Now button interaction
const applyButton = document.querySelector('.apply-button');
applyButton.addEventListener('click', (e) => {
  e.preventDefault();  // Prevent actual navigation
  alert('Thank you for your interest! Redirecting to application form...');
  // Simulate redirection (replace with actual link if needed)
  window.location.href = 'https://yourcollegewebsite.com/apply';
});

// Log each navigation link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`You clicked on: ${link.textContent}`);
  });
});
