const button = document.querySelector("#button")
const buttonText = document.querySelector("#button a")
const firstMenu = document.querySelector(".firstMenu")
const teaser = document.querySelector(".teaser")
const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".menuHamburger")
const logo = document.querySelector("logo")



// HAMBURGER

hamburger.addEventListener(
  "click",
  function(){
    menuHamburger.style.transform="translateX(200px)"
    blackHamburger.style.opacity="1"
  }
)

blackHamburger.addEventListener(
  "click",
  function(){
    blackHamburger.style.opacity="0"
    menuHamburger.style.transform="translateX(0px)"
  }
)
