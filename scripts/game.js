const buttonStart = document.querySelector(".buttonStart")
const musiqueJeu = document.querySelector("#musiqueJeu")


buttonStart.addEventListener(
  "click",
  function(){
    buttonStart.style.opacity="0"
    let game = new Game(document.querySelector('#game'));
    game.play()
    musiqueJeu.play()
  }
)
