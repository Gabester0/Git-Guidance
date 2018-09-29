let navLinks = document.querySelectorAll("#navbar span");
let sections = document.querySelectorAll(".main-section");
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

let navBar = document.getElementById("navbar");
let btn = document.getElementById("btn");
let header = document.getElementById("topHeader");
let footer = document.getElementsByTagName("footer");

function navFunction(e){
    var target = e.target;
    if(target.className === "closed"){
        target.classList.remove("closed");
        target.classList.add("open");
        target.innerText = "\u00AB";
        navBar.style.opacity = 1;
        sections.forEach(section=>{
            section.style.opacity = 0.1;
        });
        header.style.opacity= 0.1;
        footer[0].style.opacity = 0.1;
    }else if(target.className === "open"){
        target.classList.remove("open");
        target.classList.add("closed");
        target.innerText = "\u00BB";
        navBar.style.opacity = 0;
        sections.forEach(section=>{
            section.style.opacity = 1;
        });
        header.style.opacity= 1;
        footer[0].style.opacity = 1;
    };
}

btn.addEventListener("click", navFunction);
window.addEventListener("resize", sizeCheck);

function sizeCheck(){
    if(window.innerWidth > 730){
        navBar.style.opacity === 0 ? navBar.style.opacity = 1 : navBar.style.opacity = 1;
    } else if (window.innerWidth <= 730){
        btn.style.className === "closed" ? navBar.style.opacity = 0 : navBar.style.opacity = 0;
    }
}
