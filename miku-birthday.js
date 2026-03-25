// miku-birthday.js

(function () {
    const today = new Date();
    const month = today.getMonth(); // 0 = January, 7 = August
    const day = today.getDate();

    // Miku's birthday: August 31
    if (month === 7 && day === 31) {
        // Add a class to the body so you can style the whole site
        document.body.classList.add("miku-birthday");

        // Example effect: confetti
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

        // Example message popup
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
        document.body.appendChild(msg);
    }
})();
