"use strict";

let mobileMenu = document.querySelector(".header .container .inside .right");
let menuIcon = document.querySelector(".header .container .inside .menu-icon");

//
menuIcon.addEventListener("click", (event) => {
  mobileMenu.classList.toggle("show-menu");
});

addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    mobileMenu.classList.remove("show-menu");
  }
});
