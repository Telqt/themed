const themePreference = localStorage.getItem('theme');

let isLightTheme = themePreference === 'light'; // Convert preference to boolean

const toggleThemeBtn = document.getElementById('theme_btn');
const lightModeImage = 'url("img/light_mode.png")'; // Path to light mode image
const darkModeImage = 'url("img/dark_mode_moon.png")'; // Path to dark mode image

const toggleTheme = () => {
  isLightTheme = !isLightTheme;
  document.documentElement.dataset.theme = isLightTheme ? 'light' : 'dark';

  // Update button background image based on theme
  toggleThemeBtn.style.backgroundImage = isLightTheme ? lightModeImage : darkModeImage;

  // Store preference in local storage
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
};

toggleThemeBtn.addEventListener('click', toggleTheme);

// Set initial theme based on preference or default
if (themePreference) {
  document.documentElement.dataset.theme = themePreference;
  toggleThemeBtn.style.backgroundImage = themePreference === 'light' ? lightModeImage : darkModeImage;
} else {
  // Set default theme (optional)
  isLightTheme = true; // Example default: light theme
  document.documentElement.dataset.theme = 'light';
  localStorage.setItem('theme', 'light');
  toggleThemeBtn.style.backgroundImage = lightModeImage;
}
