// JavaScript Document
const navAnimate = document.querySelector("header .container");
const btnBurger = document.querySelector(".burger");

btnBurger.addEventListener("click",navMenu);
function navMenu () {
	navAnimate.classList.toggle("active");
}