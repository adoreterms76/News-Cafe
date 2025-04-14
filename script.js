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

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide-group");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((group, i) => {
      group.classList.toggle("active", i === index);
    });
  }

  document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
});

// Manual slideshow logic
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide-group");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  document.getElementById("prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide); // Show first slide
});
