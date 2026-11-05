const TEST_MODE = false;

const now = new Date();
const month = now.getMonth();
const day = now.getDate();
const hour = now.getHours();

const isChristmas =
    TEST_MODE ||
    (
        (month === 11 && day === 24 && hour >= 18) ||
        (month === 11 && day === 25) ||
        (month === 11 && day === 26)
    );

if (!isChristmas) {
    return;
}

    if (!isChristmas) {
        return;
    }

    const colors = [
        "#ffffff", // ice
        "#fff5f5",
        "#ffe5e5",
        "#ffd1d1",
        "#ffb3b3",
        "#ff8a8a",
        "#e34e4e"
    ];

    const snowflakes = [
        "❄",
        "❅",
        "❆",
        "✦"
    ];

    for (let i = 0; i < 40; i++) {

        const snow = document.createElement("div");

        snow.className = "christmas-snowflake";

        snow.textContent =
            snowflakes[Math.floor(Math.random() * snowflakes.length)];

        snow.style.left =
            Math.random() * 100 + "vw";

        snow.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        snow.style.fontSize =
            (1 + Math.random() * 1.7) + "rem";

        snow.style.animationDuration =
            (10 + Math.random() * 12) + "s";

        snow.style.animationDelay =
            Math.random() * 10 + "s";

        document.body.appendChild(snow);
    }

    // Santa Miku hat

    const menu = document.querySelector("nav");

    if (menu) {
        const hat = document.createElement("div");
        hat.className = "menu-santa-hat";
        hat.textContent = "🎅";
        menu.appendChild(hat);
    }

})();
