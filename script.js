function nextSlide(id) {
  const container = document.getElementById(id);
  const slides = container.querySelectorAll(".slide");
  let current = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
  slides[current].classList.remove("active");
  let nextIndex = (current + 1) % slides.length;
  slides[nextIndex].classList.add("active");
}

function prevSlide(id) {
  const container = document.getElementById(id);
  const slides = container.querySelectorAll(".slide");
  let current = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
  slides[current].classList.remove("active");
  let prevIndex = (current - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add("active");
}

// Slideshow Navigation Functionality
function nextSlide(slideshowId) {
  const slides = document.querySelectorAll(`#${slideshowId} .slide`);
  const activeSlide = document.querySelector(`#${slideshowId} .slide.active`);
  let nextSlide = activeSlide.nextElementSibling || slides[0];

  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

function prevSlide(slideshowId) {
  const slides = document.querySelectorAll(`#${slideshowId} .slide`);
  const activeSlide = document.querySelector(`#${slideshowId} .slide.active`);
  let prevSlide = activeSlide.previousElementSibling || slides[slides.length - 1];

  activeSlide.classList.remove('active');
  prevSlide.classList.add('active');
}
