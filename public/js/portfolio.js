document.getElementById('theme-toggle').addEventListener('click', () => {
    const themeLink = document.getElementById('theme-link');
    const lightTheme = '/css/light.css';
    const darkTheme = '/css/dark.css';
  
    if (themeLink.getAttribute('href') === lightTheme) {
      themeLink.setAttribute('href', darkTheme);
    } else {
      themeLink.setAttribute('href', lightTheme);
    }
  });  