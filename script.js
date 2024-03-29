
/* Select the button */
let btn = document.querySelector(".js-btn");

/* Add event listener */
btn.addEventListener("click", (e) => {
    e.preventDefault

    if (btn.getAttribute("aria-expanded") === "false") {
        btn.setAttribute("aria-expanded", "true")
    }
    else {
        btn.setAttribute("aria-expanded", "false")
    }
})