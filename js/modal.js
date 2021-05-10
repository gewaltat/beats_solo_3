const fsmenu = document.querySelector("#hamburger");


fsmenu.addEventListener('click', e => {
const fs = document.querySelector(".fullscreen__menu");
fs.classList.add('fullscreen__menu_active');
})

const fsMenuClose = document.querySelector(".fullscreen__menu__close");

fsMenuClose.addEventListener('click', e => {
  const fsc = document.querySelector(".fullscreen__menu_active");
  fsc.classList.remove('fullscreen__menu_active');
})