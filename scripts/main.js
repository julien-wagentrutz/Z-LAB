const triangle = document.querySelector(".triangle")
const button = document.querySelector("#button")
const buttonText = document.querySelector("#button a")
const firstMenu = document.querySelector(".firstMenu")
const teaser = document.querySelector(".teaser")



// PARAGRAPHE PRESENTATION

if(arrowDown=true){
  triangle.addEventListener(
    "click",
    function(){
      textTeaser.innerHTML="<p>Vous êtes un aventurier et vous devez tenter de survivre aux zombies dans un labyrinthe complexe. Pour cela, récupérez votre équipement, caché dans les différents recoins que vous devrez explorer. Dès le début de la partie, vous devez parcourir le labyrinthe afin de retrouver votre équipement. Mais ne trainez pas trop, un zombie affamé vous poursuit !<br> Lorsque vous avez retrouvé votre armure complète et votre arme, le zombie, malgré le fait qu'il n'ait pas de cerveau, va vous craindre, et il faudra le tuer pour passer au niveau supérieur. Mais il se peut qu'à ce moment la lumière s'éteigne, j'espère que vous n'avez pas peur du noir...<br><br>Jeu réalisé par l'equipe 18 composée de Julien Wagentrutz, Canan Yesilaltay, Nina Moilier, Axel Viskovic, et Nicolas Frappa.</p> "
      triangle.style.display = "none"

    }
  )
}


button.addEventListener(
  "click",
  function(){
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
/*
margin : 30px 0px;
width : 210px;
height: 70px;
background-color: red;
border-radius: 50px;
position : fixed;
display: flex;
justify-content: center;
align-items: center;
*/
