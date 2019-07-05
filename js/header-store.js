const $search = document.querySelector(".input-search");
$search.addEventListener("click", event => {
 event.preventDefault()
 $search.classList.toggle("-active");
});
