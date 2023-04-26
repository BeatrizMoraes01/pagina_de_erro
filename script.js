const toggleBtn = document.querySelector('#toggle-theme-btn');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// check local storage for user preference and set the theme accordingly
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}