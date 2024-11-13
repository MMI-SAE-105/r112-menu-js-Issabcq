const nav = document.querySelector(".menu")
const toggle = document.querySelector(".menu-btn")

toggle.addEventListener("click", (evt) => {
    nav.ariaHidden = false;
    toggle.ariaExpanded = true;
});