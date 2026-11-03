(() => {
    // Set to true if you want the theme active all day while testing
    const TEST_MODE = true;

    const hour = new Date().getHours();

    const isNight =
        TEST_MODE ||
        hour >= 19 ||
        hour < 7;

    if (!isNight) return;

    // Apply moonlight theme
    document.body.classList.add("miku-night");

    // Floating musical notes
    const symbols = ["♪", "♫", "♬", "🎵"];
    const noteCount = 18;

    for (let i = 0; i < noteCount; i++) {
        const note = document.createElement("div");

        note.className = "floating-note";

        note.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        note.style.left =
            `${Math.random() * 100}vw`;

        note.style.animationDuration =
            `${12 + Math.random() * 12}s`;

        note.style.animationDelay =
            `${Math.random() * 5}s`;

        document.body.appendChild(note);
    }
})();
