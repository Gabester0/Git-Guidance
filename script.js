let navLinks = document.querySelectorAll("#navbar span");
let sections = document.querySelectorAll(".main-section");
console.log(navLinks);
let prev;
let cur = [];

window.addEventListener("scroll", e =>{

    let fromTop = window.scrollY;

    navLinks.forEach(span =>{
        let section = document.querySelector(span.childNodes[0].childNodes[0].parentElement.hash);

        if (section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight >= fromTop){
                span.classList.add("current");
            } else {
                span.classList.remove("current");
            }
            let linkTop = document.getElementById("nav-link-top");
            
            if(window.scrollY <= 244){
                linkTop.classList.add("current");
            } 
            if(window.scrollY >= 244) {
                linkTop.classList.remove("current");
            }
    });
});
