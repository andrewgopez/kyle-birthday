"use strict";

// Get the buttons
const celebrateBtn = document.getElementById("celebrateBtn");
const finalCelebrateBtn = document.getElementById("finalCelebrateBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

// Purple-themed colours
const colors = ["#c4a7ff", "#9b70e8", "#ffffff", "#e2c5ff"];

// Confetti Function
function celebrate() {

    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        // Random horizontal position
        confetti.style.left = Math.random() * 100 + "vw";

        // Random colour
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        // Random animation delay
        confetti.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(function () {
            confetti.remove();
        }, 5000);
    }
}

// First Celebration Button
celebrateBtn.addEventListener("click", function () {
    celebrate();
});

// Final Celebration Button
finalCelebrateBtn.addEventListener("click", function () {
    celebrate();

    // Reveal the surprise message
    surpriseMessage.classList.remove("hidden");

    // Change button text
    finalCelebrateBtn.textContent = "Surprise Unlocked! 🎉";

    // Disable button after clicking
    finalCelebrateBtn.disabled = true;
});
