// Load header
fetch('/header.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('site-header').innerHTML = html;
  });

// Load footer
fetch('/footer.html')
  .then(r => r.text())
  .then(html => {
    document.getElementById('site-footer').innerHTML = html;
  });

// Load page content based on URL
const page = window.location.pathname === '/' 
  ? '/pages/index.html'
  : '/pages' + window.location.pathname;

fetch(page)
  .then(r => r.text())
  .then(html => {
    document.getElementById('page-content').innerHTML = html;
  });

// Load shared scripts (ONE place)
const welcomeScript = document.createElement('script');
welcomeScript.src = '/scripts/miku-welcome.js';
document.body.appendChild(welcomeScript);

const birthdayScript = document.createElement('script');
birthdayScript.src = '/scripts/miku-birthday.js';
document.body.appendChild(birthdayScript);
