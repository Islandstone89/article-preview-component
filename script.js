
/* Select the button */
let btnWrapper = document.querySelector(".btn-wrapper"); 
let btn = document.querySelector(".js-btn");

/* Add event listener */
 btnWrapper.addEventListener("click", (e) => {
    e.preventDefault

    if (btn.getAttribute("aria-expanded") === "false") {
        btn.setAttribute("aria-expanded", "true")
    }
    else {
        btn.setAttribute("aria-expanded", "false")
    }
})  

