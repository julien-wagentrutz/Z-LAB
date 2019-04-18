const buttonStart = document.querySelector(".buttonStart")
const musiqueJeu = document.querySelector("#musiqueJeu")
const screenStart = document.querySelector(".screenStart")

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
