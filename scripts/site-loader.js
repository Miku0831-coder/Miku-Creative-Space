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

// MIKUWEEN 2026 - October 31 only

(function () {
    const today = new Date();

    if (today.getMonth() === 9 && today.getDate() === 31) {
        document.body.classList.add("mikuween-active");

        // Floating greeting
        const banner = document.createElement("div");
        banner.className = "mikuween-banner";
       banner.innerHTML = `
    🩵🎃《≧◡≦》 Happy Mikuween! 《≧◡≦》🎃🩵
    <span>Music, magic and smiles under the Halloween moon ♪</span>
`;

// Miku pumpkins
const leftPumpkin = document.createElement("div");
leftPumpkin.className = "miku-pumpkin left";

const rightPumpkin = document.createElement("div");
rightPumpkin.className = "miku-pumpkin right";

document.body.appendChild(leftPumpkin);
document.body.appendChild(rightPumpkin);

// Floating notes
for (let i = 0; i < 18; i++) {
   ...
}
