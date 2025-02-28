"use strict";
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger-menu");
const heroContent = document.querySelector(".hero__content");

header.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target)
    if (
      target.closest(".burger-menu__button") ||
      target.closest(".burger-btn") ||
      target.closest(`._active [class*="link"]`)
    ) {
      burgerMenu.classList.toggle("_active");
    }
    
});

let lastScroll = 0;
const defaulOffcet = 100;

const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollPosition, heroContent.clientHeight);
 
  if (scrollPosition > lastScroll && scrollPosition > header.offsetHeight && !containHide()) {
    header.classList.add("hide");
  } else if (scrollPosition < lastScroll && containHide()) {
    header.classList.remove("hide");
  }
    lastScroll = scrollPosition;
scrollPosition > heroContent.clientHeight
  ? header.classList.add("bg")
  : header.classList.remove("bg");
})



