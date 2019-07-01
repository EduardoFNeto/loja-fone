const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick() {
console.log("fé");
}

const $addButton = window.document.querySelector(".-second");
$addButton.addEventListener("click", handleClick);