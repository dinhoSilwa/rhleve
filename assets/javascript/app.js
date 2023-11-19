const inputIconeMenu = document.getElementById("inputIconeMenu")
const secaodomenuDrop = document.querySelector(".secaodomenu-items")

function mostrarMenu(){
 const menuAtivo = inputIconeMenu.checked == true
  if(menuAtivo){
   secaodomenuDrop.classList.add("secaodomenuToggle")
  }else{
   secaodomenuDrop.classList.remove("secaodomenuToggle")
  }
}

inputIconeMenu.addEventListener("change",mostrarMenu)
