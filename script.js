// Index Layout
// Function to switch slides
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  let currentIndex = -1;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      slide.classList.remove("active");
    }
  });

  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].classList.add("active");
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  let currentIndex = -1;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      currentIndex = index;
      slide.classList.remove("active");
    }
  });

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add("active");
}
