const nav = document.querySelector(".menu");
const toggle = document.querySelector(".menu-btn");
const body = document.querySelector("body")

toggle.addEventListener("click", (evt) => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    body.classList.toggle("noscroll", isClosed)
});