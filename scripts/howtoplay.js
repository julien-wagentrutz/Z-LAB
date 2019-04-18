const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".menuHamburger")
const triangle = document.querySelectorAll(".triangle")
const howP = document.querySelectorAll(".how p")
const howImg = document.querySelectorAll(".howToPlay img")


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

// TRIANGLE DEROULANT

for(let i=0; i<triangle.length; i++){
  triangle[i].addEventListener(
    "click",
    function(){
      if(howP[i].style.display=="none"){
        howP[i].style.display="block"
        howImg[i].style.display="block"
        triangle[i].classList.add("triangleUp")
      }
      if(howP[i].style.display=="block"){
          howP[i].style.display="none"
          howImg[i].style.display="none"
          triangle[i].classList.remove("triangleUp")
      }
    }
  )
}
