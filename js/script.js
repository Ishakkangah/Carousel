const btns = Array.from(document.querySelectorAll("[data-carousel-button]"));
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    setCarousel(btn);
  });
});

function setCarousel(btn) {
  const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
  const slider = btn.closest("[data-carousel]").querySelector("[data-slider");
  const activeSlide = slider.querySelector("[data-active]");
  let newIndex = [...slider.children].indexOf(activeSlide) + offset;

  if (newIndex < 0) newIndex = slider.children.length - 1;
  if (newIndex >= slider.children.length) newIndex = 0;

  slider.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}
