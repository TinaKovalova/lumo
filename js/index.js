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

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      heroContent.style.paddingBlockStart = `${entry.contentBoxSize[0].blockSize/16}rem`;
    }
  }
  console.log("changed", heroContent.style.paddingBlockStart);
});
resizeObserver.observe(header);



