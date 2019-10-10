$inputSearch = document.querySelector(".input-search");
$open = $inputSearch.querySelector(".-open");
$close = $inputSearch.querySelector(".-close")


$open.addEventListener("click", event => {
    event.preventDefault();
    $inputSearch.classList.toggle("-active");
    $open.classList.remove("-active");
    $close.classList.add("-active");
});

$close.addEventListener("click", event => {
    event.preventDefault();
    $inputSearch.classList.toggle("-active");
    $close.classList.remove("-active");
    $open.classList.add("-active");
});