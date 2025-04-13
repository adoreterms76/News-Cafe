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

function scrollCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  const scrollAmount = 320; // Adjust based on image width + gap
  track.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
