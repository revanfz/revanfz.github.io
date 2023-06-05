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