const triangle = document.querySelector(".triangle")
const button = document.querySelector("#button")
const buttonText = document.querySelector("#button a")
const firstMenu = document.querySelector(".firstMenu")
const teaser = document.querySelector(".teaser")
const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".hamburgerMenu")
const logo = document.querySelector("logo")
const slider = document.querySelector(".slider")
const sliderContainer = document.querySelector(".sliderContainer")
const sliderImg = document.querySelectorAll(".sliderImg")
const musiqueAccueil = document.querySelector("#musiqueAccueil")
const divHowToPlay = document.querySelector(".divHowToPlay")
const levelChoiceTxt = document.querySelector(".levelChoice h4")
const howToPlayPop = document.querySelector(".howToPlayPop")
const croixHowToPlay = document.querySelector(".howToPlayPop img")


let musicPlayed = false//to know if the music has already been played


// Opening

button.addEventListener( //First Page Button
  "click",
  function(){
    slider.style.opacity="1"
    hamburger.style.opacity="1"
    hamburger.style.transition="all 1s"
    firstMenu.style.opacity="0"
    firstMenu.style.transition="all 1s"
    if(musicPlayed==false){
      musiqueAccueil.play()
    }
    musicPlayed=true

    teaser.style.display="block"

    button.style.width="210px"
    button.style.height="70px"
    button.style.transition="all 1s"

    buttonText.style.fontSize="40px"
    buttonText.style.transition="all 1s"


    buttonText.innerText="Jouer"
    divHowToPlay.style.opacity="1"
    howToPlayPop.style.transform="translateX(-90%)"
    howToPlayPop.style.transition="all 3s"
    button.addEventListener(
      "click",
      function(){
        buttonText.setAttribute('href','game.html')
      }
    )
  },false
)

croixHowToPlay.addEventListener(
  "click",
  function(){
    howToPlayPop.style.transform="translateX(10%)"
  }
)




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

// SLIDER

  let nbImage = 0

  for(let i = 0; i<sliderImg.length; i++){
    sliderImg[i].addEventListener(
      "click",
      function(){
        if(nbImage==0){
        sliderImg[0].classList.remove("currentImg")
        sliderImg[1].classList.add("currentImg")
        sliderContainer.style.transform="translateX(-30%)"
        levelChoiceTxt.innerText="Niveau 2"
        }
        if(nbImage==1){
          sliderImg[1].classList.remove("currentImg")
          sliderImg[2].classList.add("currentImg")
          sliderContainer.style.transform="translateX(-60%)"
          levelChoiceTxt.innerText="Niveau 3"
           }
        if(nbImage==2){
          sliderImg[2].classList.remove("currentImg")
          sliderImg[0].classList.add("currentImg")
          sliderContainer.style.transform="translateX(0px)"//fait repartie le slider à 0
          levelChoiceTxt.innerText="Niveau 1"
        }
        if(nbImage<2){
          nbImage++
        }
        else if(nbImage==2){
          nbImage=0
        }
      }
    )
  }

