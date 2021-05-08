const fsmenu = document.querySelector("#hamburger");


fsmenu.addEventListener('click', e => {
const fs = document.querySelector(".fullscreen__menu");
console.log(fs);
fs.classList.add('fullscreen__menu_active');

console.log(fs);

})

const fsMenuClose = document.querySelector(".fullscreen__menu__close");

fsMenuClose.addEventListener('click', e => {
  const fsc = document.querySelector(".fullscreen__menu_active");
  console.log(fsc);
  fsc.className = "fullscreen__menu";
  console.log(fsc);
})

