const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star") //querySelector pega todos os elementos da pag, mas só seleciona um

$heart.addEventListener("click", handleClick);
$stars.forEach(function ($star)  {
$star.addEventListener("click", handleClick); //segunda referencia é o index
});

function handleClick() {
 console.log("Colé");
 this.classList.toggle("-active");
}

