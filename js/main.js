let nav = document.querySelector(".navigation-wrap")

window.onscroll = function () {
    if (document.documentElement.scroll > 20) {
        nav.classList.add("scroll-on");
    }

    else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide

let navBar = document.querySelectorAll(".nav-link");
let Collapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})

// counter design


// document.addEventListener("DOMContentLoaded", (e) = {
//     function counter(id, start, end, duration){
//     let obj =document.getElementById(id),
//     current=start,
//     range=end - start,
//     increment=end > start ? 1 : -1,
//     step=Math.abs(Math.flore(duration / range)),
//     timer=setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//             clearInterval(timer)
//         }
//     }, step)
// }
// })