document.addEventListener("DOMContentLoaded", () => {

    const hour = new Date().getHours();

    if (hour >= 19 || hour < 7) {

        document.body.classList.add("miku-night");

        for (let i = 0; i < 18; i++) {

            const note = document.createElement("div");

            note.className = "floating-note";

            note.textContent =
                ["♪", "♫", "♬", "🎵", "✨", "🌙"]
                [Math.floor(Math.random() * 6)];

            note.style.left = Math.random() * 100 + "vw";

            note.style.animationDuration =
                (12 + Math.random() * 12) + "s";

            note.style.animationDelay =
                Math.random() * 5 + "s";

            document.body.appendChild(note);
        }
    }

});
