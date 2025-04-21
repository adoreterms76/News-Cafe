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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Optional: Grab form values
    const name = form.querySelector("input[placeholder='Name']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Basic validation (you can expand this)
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission (you can later hook this up to a real backend or email service)
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset the form
    form.reset();
  });
});



// promos layout
// Grab the form and the success message element
const form = document.getElementById('signup-form');
const successMessage = document.getElementById('success-message');

// Handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const email = document.getElementById('email').value; // Get the email value
    
    if (email) {
        // Save the email to localStorage (or you could use another method to send it to a backend)
        localStorage.setItem('newsletterEmail', email);

        // Display the success message
        successMessage.style.display = 'block';

        // Optionally, clear the input field
        document.getElementById('email').value = '';
    }
});
