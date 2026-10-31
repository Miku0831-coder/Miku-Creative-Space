(function () {

    // Set to true to test during daytime
    const TEST_MODE = false;

    const hour = new Date().getHours();

    const isNight =
        TEST_MODE ||
        hour >= 19 ||
        hour < 7;

    if (!isNight) {
        return;
    }

    document.body.classList.add("miku-night");

    // Floating notes
    for (let i = 0; i < 18; i++) {

        const note = document.createElement("div");

        note.className = "floating-note";

        note.textContent =
            ["♪", "♫", "♬", "🎵"]
            [Math.floor(Math.random() * 6)];

        note.style.left =
            Math.random() * 100 + "vw";

        note.style.animationDuration =
            (12 + Math.random() * 12) + "s";

        note.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(note);
    }

})();
