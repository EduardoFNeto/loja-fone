$inputSearch = document.querySelector(".input-search");
$icon = $inputSearch.querySelector(".icon");

$icon.addEventListener("click", () => {
 $inputSearch.classList.add("-active");
})