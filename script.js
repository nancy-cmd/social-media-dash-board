const themeSwitcher = document.querySelector('#toggle');

function switchTheme() {
  // toggle theme
  const toggleValue = localStorage.getItem('toggle') === 'dark' ? 'light' : 'dark';
  
  // update localstorage value;
  localStorage.setItem('toggle', toggleValue);
  
  // update theme
  setTheme();
}

function setTheme() {
  // set current theme - default to `light` on first load and set `theme` property in localStorage.
  const currentTheme = localStorage.getItem('toggle') || 'light';
  
  // update current theme value on `data-theme` attribute
  document.body.dataset.theme = currentTheme;

  // update inner text of button dynamically based on current theme
  themeSwitcher.innerText = currentTheme === 'light' ? 'Dark' : 'Light';
}

// set theme on inital load
setTheme();