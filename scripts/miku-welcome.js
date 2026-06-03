document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio("/audio/miku-welcome.mp3");
    audio.volume = 0.7; // gentle volume
    audio.play().catch(() => {
        // If autoplay is blocked, wait for first click/tap
        const startAudio = () => {
            audio.play();
            document.removeEventListener("click", startAudio);
        };
        document.addEventListener("click", startAudio);
    });
});
