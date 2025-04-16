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
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiry-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data (you can log or process it here if needed)
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message").value;

    // Show a success message (for now, just an alert)
    alert(`Thank you, ${name}! Your enquiry has been received.`);

    // Optionally reset the form
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
