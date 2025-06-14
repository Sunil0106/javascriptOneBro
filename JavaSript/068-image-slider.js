const slides = document.querySelectorAll(".slides img");
let slideIdx = 0;
let intervalId = null;

// intializeSlider();
document.addEventListener("DOMContentLoaded", intializeSlider);

function intializeSlider() {
  if (slides.length > 0) {
    slides[slideIdx].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIdx = 0;
  } else if (index < 0) {
    slideIdx = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIdx].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId);
  slideIdx--;
  showSlide(slideIdx);
}

function nextSlide() {
  slideIdx++;
  showSlide(slideIdx);
}
