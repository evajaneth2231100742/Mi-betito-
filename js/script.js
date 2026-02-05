// Contador de días juntos
const startDate = new Date("2025-09-23");
const today = new Date();
const diff = today - startDate;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.getElementById("days").textContent =
days + " días juntos ❤️";

// Animaciones al hacer scroll
const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
});

faders.forEach(el => appear.observe(el));
