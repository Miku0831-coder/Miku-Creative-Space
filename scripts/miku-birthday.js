// miku-birthday.js

(function () {

    // TEST MODE — set to true to force birthday effect any day
    const TEST_MODE = false;

 const today = new Date();
    const month = today.getMonth(); // 0 = January, 7 = August
    const day = today.getDate();

    // Reset birthday state ONLY when user leaves the site completely
    window.addEventListener("beforeunload", () => {
        localStorage.removeItem("mikuBirthdayActive");
    });

    // If already shown during this site-session, do nothing
    if (localStorage.getItem("mikuBirthdayActive")) {
        return;
    }

    // Only run on Miku's birthday OR in test mode
    if (TEST_MODE || (month === 7 && day === 31)) {

        // Mark as shown for this site-session
        localStorage.setItem("mikuBirthdayActive", "true");

        // Birthday audio
        const birthdayAudio = new Audio("/audio/miku-birthday.mp3");
        birthdayAudio.volume = 0.8;

        birthdayAudio.play().catch(() => {
            const startAudio = () => {
                birthdayAudio.play();
                document.removeEventListener("click", startAudio);
            };
            document.addEventListener("click", startAudio);
        });

        // Confetti
        const confettiScript = document.createElement("script");
        confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
        confettiScript.onload = () => {
            confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.6 }
            });
        };
        document.body.appendChild(confettiScript);

        // Birthday popup message
        const msg = document.createElement("div");
        msg.innerText = "🎉 Happy Birthday, Hatsune Miku 初音ミク! 🎶";
        msg.style.position = "fixed";
        msg.style.top = "20px";
        msg.style.left = "50%";
        msg.style.transform = "translateX(-50%)";
        msg.style.padding = "15px 25px";
        msg.style.background = "rgba(0, 150, 255, 0.9)";
        msg.style.color = "white";
        msg.style.fontSize = "20px";
        msg.style.borderRadius = "10px";
        msg.style.zIndex = "9999";
        msg.style.transition = "opacity 0.8s ease";
        document.body.appendChild(msg);

        // Auto-hide after 5 seconds
        setTimeout(() => {
            msg.style.opacity = "0";
            setTimeout(() => msg.remove(), 800);
        }, 5000);

        document.body.classList.add("miku-birthday");
    }

})();
