const $btn_hamburger = document.querySelector("#btn-hamburger");
const $menu = document.querySelector("#menu");
const $body = document.body;
$btn_hamburger.addEventListener("click", (e) => {
  $menu.classList.toggle("open");
  $body.classList.toggle("no_scroll");
  $btn_hamburger.classList.toggle("active");
});
