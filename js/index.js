"use strict";
const header = document.querySelector(".header");
const burgerMenu = document.querySelector(".burger-menu");

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


