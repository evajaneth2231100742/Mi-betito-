const start = new Date("2025-09-23T00:00:00");

function updateCounter() {
const now = new Date();

let diff = now - start;

let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);

let months = Math.floor(days / 30);

seconds %= 60;
minutes %= 60;
hours %= 24;
days %= 30;

document.getElementById("months").textContent = months;
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

// animaciones scroll
const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add("show");
});
});

faders.forEach(el => appear.observe(el));
// MENU HAMBURGUESA
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});
