const triangle = document.querySelector(".triangle")
const button = document.querySelector("#button")
const buttonText = document.querySelector("#button a")
const firstMenu = document.querySelector(".firstMenu")
const teaser = document.querySelector(".teaser")
const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".menuHamburger")
const logo = document.querySelector("logo")

// PARAGRAPHE PRESENTATION

  triangle.addEventListener(
    "click",
    function(){
      textTeaser.innerHTML="<p>Vous êtes un aventurier et vous devez tenter de survivre aux zombies dans un labyrinthe complexe. Pour cela, récupérez votre équipement, caché dans les différents recoins que vous devrez explorer. Dès le début de la partie, vous devez parcourir le labyrinthe afin de retrouver votre équipement. Mais ne trainez pas trop, un zombie affamé vous poursuit !<br> Lorsque vous avez retrouvé votre armure complète et votre arme, vous pourrez enfin vous enfuir. Mais il se peut qu'à ce moment la lumière s'éteigne, j'espère que vous n'avez pas peur du noir...<br><br>Jeu réalisé par l'equipe 18 composée de Julien Wagentrutz, Canan Yesilaltay, Nina Moilier, Axel Viskovic, et Nicolas Frappa.</p> "
      triangle.style.display = "none"

    }
  )

// OUVERTURE DEBUT

button.addEventListener(
  "click",
  function(){
    hamburger.style.opacity="1"
    hamburger.style.transition="all 2s"
    firstMenu.style.opacity="0"
    firstMenu.style.transition="all 2s"

    button.style.width="210px"
    button.style.height="70px"
    button.style.transition="all 2s"

    buttonText.style.fontSize="40px"
    buttonText.style.transition="all 2s"

    buttonText.innerText="Jouer"

    teaser.style.display="block"
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







/*
let nbImage=0

if(nbImage<=2){
  rightArrow.addEventListener(
    "click",
    function(){
      console.log(nbImage)
      sliderImg[nbImage].classList.remove("currentSlide")
      sliderImg[nbImage+1].classList.add("currentSlide")
      nbImage++
    }
  )
}

if(nbImage==2){
  rightArrow.addEventListener(
    "click",
    function(){
      window.alert("wsh")
  sliderImg[2].classList.remove("currentSlide")
  sliderImg[0].classList.add("currentSlide")
  nbImage=0
    }
  )
}
*/
