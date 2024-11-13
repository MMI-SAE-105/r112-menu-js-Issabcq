const nav = document.querySelector(".menu");
const toggle = document.querySelector(".menu-btn");
const body = document.querySelector("body")

toggle.addEventListener("click", (evt) => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
    body.classList.toggle("noscroll", isClosed)
});