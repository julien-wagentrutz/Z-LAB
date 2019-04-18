const buttonStart = document.querySelector(".buttonStart")
const musiqueJeu = document.querySelector("#musiqueJeu")
const screenStart = document.querySelector(".screenStart")
const hamburger = document.querySelector("#hamburger")
const blackHamburger = document.querySelector("#blackHamburger")
const menuHamburger = document.querySelector(".menuHamburger")

let game = new Game(document.querySelector('#game'));



document.querySelector('#restart').addEventListener('click',function () {
    game.restart(game)
})


buttonStart.addEventListener(
  "click",
  function(){
    buttonStart.style.opacity="0"
    game.play()
    for(let i = 0; i<10; i++){
      musiqueJeu.play()
    }
    screenStart.style.display="none"
  }
)

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
