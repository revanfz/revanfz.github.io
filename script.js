document.addEventListener('DOMContentLoaded', function () {
    let i = 0.2;
    let circles = document.querySelectorAll('.rotate');
    console.log(circles)
    circles.forEach(circle => {
        let animationDuration = Math.random() * (18 - 12) + 12;
        console.log(animationDuration);
        circle.style.animationDuration = animationDuration*i + 's';
        i += 0.2;
    });
})

function darkMode() {
    let selector = document.querySelector("body");
    let icon = document.querySelector(".mode");
    let target = icon.firstElementChild
    let new_icon = document.createElement("i")
    if (target.classList.contains('fa-moon')) {
        new_icon.classList.add("fa-sharp", "fa-solid", "fa-sun");
        selector.classList.remove("dark")
    } else {
        selector.classList.add("dark")
        new_icon.classList.add("fa-sharp", "fa-solid", "fa-moon");
    }
    icon.removeChild(icon.firstElementChild);
    icon.appendChild(new_icon)
}
