$(".interactive_ava__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const curItem = $this.closest(".reviews__switcher_item interactive_ava");

  curItem.addClass("interactive_ava__active").siblings().removeClass("interactive_ava__active");
});