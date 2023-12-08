const modal = document.querySelector(".modal-parent");
const btn = document.querySelector(".header__btn");

btn.addEventListener("click", () => {
  modal.classList.toggle("modal-parent--open");
});
modal.querySelector(".modal").addEventListener("click", (e) => {
  e._isClick = true;
});
modal.addEventListener("click", (e) => {
  if (e._isClick === true) return;
  modal.classList.remove("modal-parent--open");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("modal-parent--open");
  }
});
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: ".latest-shots__left",
    nextEl: ".latest-shots__right",
  },
});
