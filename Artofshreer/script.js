// Visit Instagram
function visitInsta() {
  window.open("https://instagram.com/artofshree9", "_blank");
}

// Image Popup
function openPopup(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popup.style.display = "flex";
  popupImg.src = img.src;
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
});

// Scroll Animation
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
