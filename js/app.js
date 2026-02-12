"use strict";

let mobileMenu = document.querySelector(".header .container .inside .right");
let menuIcon = document.querySelector(".header .container .inside .menu-icon");
let flipSwitch = document.querySelector("input[type='checkbox']#fs");
//
let translations = {};
//

// Start Languages Functions ---- START
async function loadLang(lang) {
  const res = await fetch(`lang/${lang}.json`);
  translations = await res.json();

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  applyTranslations();
}

function getValue(obj, key) {
  return key.split(".").reduce((o, i) => o[i], obj);
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = getValue(translations, el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = getValue(translations, el.dataset.i18nPlaceholder);
  });
}
// End Languages Functions   ---- END

// Fetch Json Data

//

document.addEventListener("DOMContentLoaded", () => {
  loadLang("ar");
  flipSwitch.checked = true;
});

menuIcon.addEventListener("click", (event) => {
  mobileMenu.classList.toggle("show-menu");
  // Try Lang Toggle
});

addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    mobileMenu.classList.remove("show-menu");
  }
});

flipSwitch.addEventListener("change", () => {
  if (flipSwitch.checked) {
    loadLang("ar");
  } else {
    loadLang("en");
  }
});

// Start Scroll To Top Behavior

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("btn-scroll-top");
  let progressValue = document.getElementById("progress-value");
  //
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  //
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  //
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#f1cd53 ${scrollValue}%, transparent ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// End Scroll To Top Behavior
