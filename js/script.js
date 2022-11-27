// 'use strict';
const burgerMenu = document.querySelector(".header__burger");
const backForm = document.querySelector(".form__main");
const burgerUl = document.querySelector(".burger-ul");
const burgerA = document.querySelectorAll(".ul-a");
const themeButton = document.querySelector(".header__theme");
const bodyHidden = document.body;

themeButton.addEventListener("click", switchTheme);
burgerMenu.addEventListener("click", addBurgerClass);

if (backForm) {
  backForm.addEventListener("submit", acceptForm);
}
function removeListClass() {
  burgerMenu.classList.remove("active");
  burgerUl.classList.remove("active");
  bodyHidden.classList.remove("hidden");
}
// function addOverflow() {
//   bodyHidden.classList.toggle('hidden');
// }
function addBurgerClass() {
  burgerMenu.classList.toggle("active");
  burgerUl.classList.toggle("active");
  bodyHidden.classList.toggle("hidden");
}
// function addListClass() {
//   burgerUl.classList.toggle("active");
// }
function acceptForm(e) {
  e.preventDefault();
  fetch("https://nhope.pl/form.php", {
    body: new FormData(backForm),
    method: "post",
  }).then(function () {
    backForm.reset();
  });
}
if (JSON.parse(localStorage.getItem("theme"))) {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

function switchTheme() {
  document.documentElement.classList.toggle("dark");
  if (JSON.parse(localStorage.getItem("theme"))) {
    localStorage.setItem("theme", false);
  } else {
    localStorage.setItem("theme", true);
  }
}

burgerA.forEach(function (a) {
  a.addEventListener("click", removeListClass);
});
