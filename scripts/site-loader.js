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

// Floating Miku Notes
(function () {

    for (let i = 0; i < 18; i++) {

        const note = document.createElement("div");
        note.className = "floating-note";

        note.textContent =
            ["♪", "♫", "♬", "🎵"]
            [Math.floor(Math.random() * 4)];

        note.style.left = Math.random() * 100 + "vw";

        note.style.animationDuration =
            (12 + Math.random() * 12) + "s";

        note.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(note);
    }

})();
