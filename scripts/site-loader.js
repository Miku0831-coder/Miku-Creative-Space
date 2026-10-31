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

const mikuweenScript = document.createElement('script');
mikuweenScript.src = '/scripts/mikuween.js';
document.body.appendChild(mikuweenScript);

const dayModeScript = document.createElement('script');
dayModeScript.src = '/scripts/day-mode.js';
document.body.appendChild(dayModeScript);

const nightModeScript = document.createElement('script');
nightModeScript.src = '/scripts/night-mode.js';
document.body.appendChild(nightModeScript);
