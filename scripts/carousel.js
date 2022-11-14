$("#next-button").click(function() {
    nextSlide();
  });
$("#prev-button").click(function() {
    prevSlide();
  });
setInterval(function() {
    nextSlide();
  }, 7000);

const SLIDES = $(".slide");

function nextSlide() {
  let nextNum = SLIDES.index($(".slide:not(.hidden)")) + 1 + 1;
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

function prevSlide() {
  let prevNum = SLIDES.index($(".slide:not(.hidden)")) - 1 + 1;
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

    SLIDES.addClass("hidden")
    currentSlide.removeClass("hidden")
}
