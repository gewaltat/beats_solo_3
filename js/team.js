const teamB = document.querySelectorAll(".team__button");
const teamI = document.querySelectorAll(".team__item");
const teamL = document.querySelectorAll(".team__item team__item_folded")


Array.from(teamB).forEach(item => {
  item.addEventListener('click', (event)=> {
    event.preventDefault();

    Array.from(document.querySelectorAll('.team__item')).forEach(element =>
      element.classList.add('team__item_folded'));
      event.target.parentElement.classList.remove('team__item_folded');
  })
})