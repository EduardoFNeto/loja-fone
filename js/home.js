let valorInicial = 10;
const $second = document.querySelector(".-second");

$second.addEventListener("click", handleclick);

function handleclick() {
 const $carrinho = document.querySelector(".-last");
 $carrinho.textContent = `Carrinho (${++valorInicial})`;

 console.log($carrinho);
}