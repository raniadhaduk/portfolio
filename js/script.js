// Typing Effect
const text = "AI Agents";
const typingText = document.querySelector(".typing-text");
let i = 0;

function type() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (i > 0) {
        typingText.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(erase, 50);
    } else {
        i = 0;
        setTimeout(type, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (typingText) {
        type();
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});
