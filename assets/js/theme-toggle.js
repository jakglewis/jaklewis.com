// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial state based on user preference
  if (localStorage.getItem('theme')) {
    document.body.classList.add(localStorage.getItem('theme'));
    themeToggle.innerText = localStorage.getItem('theme') === 'dark-theme' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', localStorage.getItem('theme') === 'dark-theme' ? 'Switch to light mode' : 'Switch to dark mode');
  } else if (prefersDark) {
    document.body.classList.add('dark-theme');
    themeToggle.innerText = '☀️';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    document.body.classList.add('light-theme');
    themeToggle.innerText = '🌙';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
  
  themeToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      themeToggle.innerText = '☀️';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
      localStorage.setItem('theme', 'dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      themeToggle.innerText = '🌙';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      localStorage.setItem('theme', 'light-theme');
    }
  });
});
