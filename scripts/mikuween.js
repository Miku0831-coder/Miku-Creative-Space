// mikuween.js

(function () {

    // TEST MODE — set to true to force Mikuween any day
    const TEST_MODE = false;

    const today = new Date();
    const month = today.getMonth(); // October = 9
    const day = today.getDate();

    // Reset Halloween state when leaving the site
    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("mikuweenActive");
    });

    // If already shown during this site-session, do nothing
    if (localStorage.getItem("mikuweenActive")) {
        return;
    }

    // Only run on October 31 OR in test mode
    if (TEST_MODE || (month === 9 && day === 31)) {

        // Mark as shown
        localStorage.setItem("mikuweenActive", "true");

        document.body.classList.add("mikuween-active");

        // Banner
        const banner = document.createElement("div");
        banner.className = "mikuween-banner";

        banner.innerHTML = `
            🩵🎃《≧◡≦》 Happy Mikuween! 《≧◡≦》🎃🩵
            <span>Music, magic and smiles under the Halloween moon ♪</span>
        `;

        document.body.prepend(banner);

        // Floating notes
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
    }

})();
