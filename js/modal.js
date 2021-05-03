const fsmenu = document.querySelector("#hamburger");
const body = document.body;

fsmenu.addEventListener("click", e => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("fs__list")

  body.appendChild(overlayElement);
})