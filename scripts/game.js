let game = new Game(document.querySelector('#game'));
game.play()



document.querySelector('#restart').addEventListener('click',function () {
    game.restart(game)
})