document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const month = today.getMonth(); // 0 = January, 7 = August
    const day = today.getDate();

    // Do NOT play welcome audio on Miku's birthday (August 31)
    if (month === 7 && day === 31) {
        return;
    }

    // Check if welcome audio already played this browser session
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

    // Mark as played for this browser session
    sessionStorage.setItem("mikuWelcomePlayed", "true");
});
