/* ================= TYPING EFFECT ================= */
const text = "Java Full Stack | Frontend Developer";
let index = 0;
const typingElement = document.getElementById("typingText");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* ================= THEME TOGGLE ================= */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const body = document.body;
  const theme = body.getAttribute("data-theme");

  body.setAttribute("data-theme", theme === "light" ? "dark" : "light");
  toggle.textContent = theme === "light" ? "☀️" : "🌙";
});

/* ================= RESUME MODAL ================= */
function openResume() {
  const modal = new bootstrap.Modal(
    document.getElementById("resumeModal")
  );
  modal.show();
}

/* ================= AOS INIT ================= */
AOS.init({
  duration: 1200,
  once: true,
  easing: "ease-out-cubic"
});
