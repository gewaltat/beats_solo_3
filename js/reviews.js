const iAva = document.querySelectorAll(".reviews__switcher_item");
// console.log(iAva);
const reviewsD = document.querySelectorAll(".reviews__item")

// for (let i = 0; i < iAva.length; i++) {
//   const Search = iAva[i];
// }
  iAva[0].addEventListener('click', e => {
  iAva[0].classList.add('interactive_ava__active');
  iAva[1].classList.remove('interactive_ava__active');
  iAva[2].classList.remove('interactive_ava__active');
  reviewsD[0].classList.add('reviews__item_active');
  reviewsD[1].classList.remove('reviews__item_active');
  reviewsD[2].classList.remove('reviews__item_active');
  
})
  iAva[1].addEventListener('click', e => {
  iAva[1].classList.add('interactive_ava__active');
  iAva[0].classList.remove('interactive_ava__active');
  iAva[2].classList.remove('interactive_ava__active');
  reviewsD[1].classList.add('reviews__item_active');
  reviewsD[0].classList.remove('reviews__item_active');
  reviewsD[2].classList.remove('reviews__item_active');

})
  iAva[2].addEventListener('click', e => {
  iAva[2].classList.add('interactive_ava__active');
  iAva[0].classList.remove('interactive_ava__active');
  iAva[1].classList.remove('interactive_ava__active');
  reviewsD[2].classList.add('reviews__item_active');
  reviewsD[0].classList.remove('reviews__item_active');
  reviewsD[1].classList.remove('reviews__item_active');

})
