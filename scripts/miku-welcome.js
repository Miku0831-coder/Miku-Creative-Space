document.addEventListener("DOMContentLoaded", () => {
    // Check if welcome audio already played this visit
    if (sessionStorage.getItem("mikuWelcomePlayed")) {
        return; // Do NOT play again
    }

    const audio = new Audio("/audio/miku-mikune.mp3");
    audio.volume = 0.7;

    audio.play().catch(() => {
        const startAudio = () => {
            audio.play();
            document.removeEventListener("click", startAudio);
        };
        document.addEventListener("click", startAudio);
    });

    // Mark as played for this visit
    sessionStorage.setItem("mikuWelcomePlayed", "true");
});
