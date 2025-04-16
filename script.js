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

// breakfast layout
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  const nextIndex = (current + 1) % slides.length;
  slides[nextIndex].classList.add('active');
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  const prevIndex = (current - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('active');
}

// food layout
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  const nextIndex = (current + 1) % slides.length;
  slides[nextIndex].classList.add('active');
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  const prevIndex = (current - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('active');
}

// luqiuds layout
function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  const nextIndex = (current + 1) % slides.length;
  slides[nextIndex].classList.add('active');
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll('.slide');
  let current = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  slides[current].classList.remove('active');
  const prevIndex = (current - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('active');
}

// contact layout
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const messageBox = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple success message
    messageBox.textContent = 'Thank you for your enquiry! We’ll be in touch shortly.';
    
    // Optionally clear the form
    form.reset();
  });
});
