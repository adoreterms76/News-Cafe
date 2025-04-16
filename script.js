// Index Layout
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
