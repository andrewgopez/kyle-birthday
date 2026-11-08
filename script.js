"use strict";

// Get the buttons
const celebrateBtn = document.getElementById("celebrateBtn");
const finalCelebrateBtn = document.getElementById("finalCelebrateBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const revealPhotoBtn = document.getElementById("revealPhotoBtn");
const photoContainer = document.getElementById("photoContainer");

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

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

    // Toggle the surprise message
    surpriseMessage.classList.toggle("hidden");

    // Update button text
    if (surpriseMessage.classList.contains("hidden")) {
        finalCelebrateBtn.textContent = "Celebrate One More Time! 🎊";
    } else {
        finalCelebrateBtn.textContent = "Hide Surprise 🎁";
    }
});

// Reveal ALC Photo
revealPhotoBtn.addEventListener("click", function () {

    photoContainer.classList.remove("hidden");

    // Allow the browser to apply the initial hidden state
    requestAnimationFrame(function () {
        photoContainer.classList.add("show");
    });

    // Change button text
    revealPhotoBtn.textContent = "Memory Unlocked! 💜";

    // Disable button
    revealPhotoBtn.disabled = true;
});

// Birthday Music
musicBtn.addEventListener("click", function () {
    if (birthdayMusic.paused) {
        birthdayMusic.play()
            .then(function () {
                musicBtn.textContent = "Pause Music ⏸️";
                musicBtn.setAttribute("aria-pressed", "true");
            })
            .catch(function () {
                musicBtn.textContent = "Music Unavailable 🎵";
            });
    } else {
        birthdayMusic.pause();
        musicBtn.textContent = "Play Birthday Music 🎵";
        musicBtn.setAttribute("aria-pressed", "false");
    }
});

// Reset button when music finishes
birthdayMusic.addEventListener("ended", function () {
    musicBtn.textContent = "Play Birthday Music 🎵";
    musicBtn.setAttribute("aria-pressed", "false");
});
