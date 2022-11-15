$(".home-slide-button").click(function() {
    showSlide($(".home-slide-button").index(this)+1);
  });

setInterval(function() {
    nextSlide();
  }, 7000);

const SLIDES = $(".slide");
const BUTTONS = $(".home-slide-button");

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  let currentButton = BUTTONS.eq(index);

    SLIDES.addClass("hidden");
    currentSlide.removeClass("hidden");
    BUTTONS.removeClass("selected");
    currentButton.addClass("selected");
}
