// MIKUWEEN - October 31 only

(function () {
    const today = new Date();

    if (today.getMonth() === 9 && today.getDate() === 31) {
        document.body.classList.add("mikuween-active");

        const banner = document.createElement("div");
        banner.className = "mikuween-banner";

        banner.innerHTML = `
            🩵🎃《≧◡≦》 Happy Mikuween! 《≧◡≦》🎃🩵
            <span>Music, magic and smiles under the Halloween moon ♪</span>
        `;

        document.body.prepend(banner);

        for (let i = 0; i < 18; i++) {
            const note = document.createElement("div");
            note.className = "floating-note";
            note.textContent = ["♪", "♫", "♬", "🎵"][Math.floor(Math.random() * 4)];

            note.style.left = Math.random() * 100 + "vw";
            note.style.animationDuration = (12 + Math.random() * 12) + "s";
            note.style.animationDelay = Math.random() * 5 + "s";

            document.body.appendChild(note);
        }
    }
})();
