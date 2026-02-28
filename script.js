/* ===============================
   Elegance Boutique - script.js
   Safe & Simple (No Errors)
================================ */

/* Smooth page fade-in */
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease-in-out";
});

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

/* Smooth scroll for anchor links */
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* Simple hover effect safety (optional future use) */
function addHoverEffect(element) {
  if (!element) return;
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(1.03)";
  });
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1)";
  });
}