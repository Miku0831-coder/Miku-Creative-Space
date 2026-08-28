document.addEventListener("DOMContentLoaded", () => {

    const today = new Date();
    const month = today.getMonth(); // 0 = January, 7 = August
    const day = today.getDate();

    // Do NOT play welcome audio on Miku's birthday
    if (month === 7 && day === 31) {
        return;
    }

    // Reset welcome audio ONLY when user leaves the site completely
    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("mikuWelcomeActive");
    });

    // If welcome audio already played during this site-session, do nothing
    if (localStorage.getItem("mikuWelcomeActive")) {
        return;
    }

    // Play welcome audio
    const audio = new Audio("/audio/miku-mikune.mp3");
    audio.volume = 0.7;

    audio.play().catch(() => {
        const startAudio = () => {
            audio.play();
            document.removeEventListener("click", startAudio);
        };
        document.addEventListener("click", startAudio);
    });

    // Mark welcome audio as played for this site-session
    localStorage.setItem("mikuWelcomeActive", "true");
});
