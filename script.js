// Index Layout
function initSlideshow(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  const prevBtn = slideshow.querySelector("button:first-of-type");
  const nextBtn = slideshow.querySelector("button:last-of-type");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide); // Show the first slide initially
}

// Initialize both slideshows
document.addEventListener("DOMContentLoaded", () => {
  initSlideshow("cafe-slideshow");
  initSlideshow("menu-slideshow");
});
