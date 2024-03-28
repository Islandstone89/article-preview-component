
/* Select the button */
let btn = document.querySelector(".btn");

/* Add event listener */
btn.addEventListener("click", (e) => {
    e.preventDefault
    btn.setAttribute("aria-pressed", "true")
})