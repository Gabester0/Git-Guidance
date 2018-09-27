let navLinks = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll(".main-section");

let prev;
let cur = [];

window.addEventListener("scroll", e =>{

    let fromTop = window.scrollY;

    navLinks.forEach(link =>{
        let section = document.querySelector(link.hash);

        if (section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight >= fromTop){
                link.classList.add("current");
            } else {
                link.classList.remove("current");
            }
    });
});

// let top = document.getElementById("#top");
// let topLink = document.getElementById("#nav-link-top");
// // let navLinks= document.getElementsByClassName("nav-link");
// // let topLink = navLinks[0];
// function focusPocus(el){
//     let elLink= `${el}Link`;
//     elLink.style.backgroundColor = "#2d2330";
//         elLink.style.color = "white";

// }

// top.addEventListener("focus", top =>{
//     focusPocus(top)    
// });

// let assumptions = document.getElementById("introductions_and_assumptions");

// assumptions.addEventListener("focus", () =>{
//     navLinks[0].style.backgroundColor = "#2d2330";
//     navLinks[0].style.color = "white"
// });
/*
"#top"
use onfocus onblur, add event listener
="#introduction_and_assumptions"
="#installation_guide"
="#navigating_the_terminal"
="#creating_and_initiating"
="#adding_and_committing"
="#branching"
="#configuring/setup"
="#creating_a_github_repository"
="#adding_a_remote_url"
="#pushing_your_branch" 
="#pull_request"
="#pulling_master"
="#final_steps"
*/