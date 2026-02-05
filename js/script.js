const start = new Date("2025-09-23");
const now = new Date();

let months = (now.getFullYear() - start.getFullYear()) * 12;
months += now.getMonth() - start.getMonth();

let days = now.getDate() - start.getDate();
if (days < 0) {
months--;
const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
days += prevMonth.getDate();
}

document.getElementById("time").innerHTML =
months + " meses y " + days + " días";

// animaciones scroll
const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) entry.target.classList.add("show");
});
});

faders.forEach(el => appear.observe(el));
