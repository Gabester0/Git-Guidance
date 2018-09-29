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
        target.className = "open";
        target.innerText = "X";
        navBar.style.margin= 0;
        sections.forEach(section=>{
            section.style.opacity = 0.1;
        });
        header.style.opacity= 0.1;
        footer[0].style.opacity = 0.1;
    }else if(target.className === "open"){
        target.className = "closed";
        target.innerText = "O";
        navBar.style.marginLeft = "-500px";
        sections.forEach(section=>{
            section.style.opacity = 1;
        });
        header.style.opacity= 1;
        footer[0].style.opacity = 1;
    };
}

btn.addEventListener("click", navFunction);

/*
var btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu(e){
 
  var eventTarget = e.target;
  var divOverlay = document.getElementsByClassName("overlay")[0];
  var speed = 10;
 
 if(eventTarget.className == "btn-open"){
    fadeIn(divOverlay, speed);
    eventTarget.className = "btn-close";
   
 } else if (eventTarget.className == "btn-close"){
    fadeOut(divOverlay, speed);
    eventTarget.className = "btn-open";
 }
 
}


function fadeIn(elem, speed){
  var inInterval = setInterval(function(){
    
    elem.style.opacity = Number(elem.style.opacity) + 0.2;
    if(elem.style.opacity >= 1){
      elem.style.opacity = 1;
      clearInterval(inInterval);
    }
    
  }, speed);
}

function fadeOut(elem, speed){
  var outInterval = setInterval(function(){
    
    elem.style.opacity = Number(elem.style.opacity) - 0.2;
    if(elem.style.opacity <= 0){
      elem.style.opacity = 0;
      clearInterval(outInterval);
    }
    
  }, speed);
}

*/
//Target Span instead of parent? 
// let nav = document.getElementById("navbar");

// nav.addEventListener("mouseenter", e=>{
//     if(nav.style.width < 70){
//         nav.style.width = "auto";
//         nav.style.fontWeight = 700;
//         document.getElementById("topHeader").style.opacity = 0.1;
//         sections.forEach(section =>{
//             section.style.opacity = 0.1;
//         });
//     }
// });

// nav.addEventListener("mouseleave", e=>{
//     if(nav.style.width === "auto"){
//         nav.style.width = "50px";
//         nav.style.fontWeight = 400;
//         document.getElementById("topHeader").style.opacity = 1;
//         sections.forEach(section =>{
//             section.style.opacity = 1;
//         });
//     }
// });