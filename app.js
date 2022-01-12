const ham = document.querySelector(".hamburger");
const navlinks= document.querySelector(".navLinks");
const links = document.querySelectorAll(".links li");

ham.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
});