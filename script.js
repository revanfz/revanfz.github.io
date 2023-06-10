document.addEventListener("DOMContentLoaded", function () {
  let i = 0.2;
  let circles = document.querySelectorAll(".rotate");
  circles.forEach((circle) => {
    let animationDuration = Math.random() * (18 - 12) + 12;
    circle.style.animationDuration = animationDuration * i + "s";
    i += 0.2;
  });
});

function darkMode() {
  let body = document.querySelector("body");
  let mode = document.querySelector(".dark-mode");
  let icon = mode.querySelector(".mode-icon");
  if (mode.classList.contains("active")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
  mode.classList.toggle("active");
  body.classList.toggle("dark");
}
