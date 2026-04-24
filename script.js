// Typing Effect
const text = "Hello Player, I'm Lakshay Gupta 👾";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 70);
    }
}
typingEffect();

// Cursor Glow Follow
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// Button Alert
function showAlert() {
    alert("Mission Accepted 🚀");
}

// Smooth Scroll
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}