const textHidden = document.querySelector("#textHidden")
const triangleDown = document.querySelector("#triangleDown")

triangleDown.addEventListener(
  "click",
  function(){
    textHidden.style.display="block"
    triangleDown.style.display="none"
  }
)
