const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".menuHamburger")
const triangle = document.querySelectorAll(".triangle")
const howP = document.querySelectorAll(".how p")
const howImg = document.querySelectorAll(".howToPlay img")
const howPContainer = document.querySelectorAll(".howPContainer")
const howImgContainer = document.querySelectorAll(".howImgContainer")

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

// drop-down menu

let displayNone = true

for(let i=0; i<triangle.length; i++){
  triangle[i].addEventListener(
    "click",
    function(){
      if(this.classList.contains('triangleUp')){
        howPContainer[i].classList.remove("displayBlock")
        howImgContainer[i].classList.remove("displayBlock")
        triangle[i].classList.remove("triangleUp")

      }
      else{
        howPContainer[i].classList.add("displayBlock")
        howImgContainer[i].classList.add("displayBlock")
        triangle[i].classList.add("triangleUp")
      }
    }
  )
}
