// Index Layout
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Wrap around if needed
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Show the current slide
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize
showSlide(currentSlide);



// breakfast layout
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

// Show the first slide on load
showSlide(slideIndex);

// Function to show a slide based on index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });
}

// Move to the next or previous slide
function plusSlides(n) {
  slideIndex += n;

  // Loop around if out of bounds
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlide(slideIndex);
}

// food layout
let foodSlideIndex = 0;
const foodSlides = document.querySelectorAll(".slide");

function showFoodSlide(index) {
  foodSlides.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}

function plusSlides(n) {
  foodSlideIndex += n;

  if (foodSlideIndex >= foodSlides.length) {
    foodSlideIndex = 0;
  } else if (foodSlideIndex < 0) {
    foodSlideIndex = foodSlides.length - 1;
  }

  showFoodSlide(foodSlideIndex);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  showFoodSlide(foodSlideIndex);
});



// luqiuds layout
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'flex' : 'none';
  });
}

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Initial display
showSlide(slideIndex);


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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate successful submission
    successMessage.style.display = "block";
    form.reset();
  });

  function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
