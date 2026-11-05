// day-mode.js

console.log("Day mode loaded");

(function () {

    const TEST_MODE = false;

    const hour = new Date().getHours();

    const isDay =
        TEST_MODE ||
        (hour >= 7 && hour < 19);

    if (!isDay) {
        return;
    }

    // Floating symbols
    for (let i = 0; i < 18; i++) {

        const note = document.createElement("div");

        note.className = "floating-note";

       const symbols = ["♪", "♫", "♬", "🎵"];
       note.textContent =
       symbols[Math.floor(Math.random() * symbols.length)];

        note.style.left =
            Math.random() * 100 + "vw";

        note.style.animationDuration =
            (12 + Math.random() * 12) + "s";

        note.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(note);
    }

})();

(function () {

    const TEST_MODE = false;

    const hour = new Date().getHours();

    const isDay =
        TEST_MODE ||
        (hour >= 7 && hour < 19);

    if (!isDay) {
        return;
    }

    // Floating symbols
    for (let i = 0; i < 18; i++) {

        const note = document.createElement("div");

        note.className = "floating-note";

       const symbols = ["♪", "♫", "♬", "🎵"];
       note.textContent =
       symbols[Math.floor(Math.random() * symbols.length)];

        note.style.left =
            Math.random() * 100 + "vw";

        note.style.animationDuration =
            (12 + Math.random() * 12) + "s";

        note.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(note);
    }

})();
