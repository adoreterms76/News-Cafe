
// breakfast layout
// breakfast-slideshow.js

document.addEventListener('DOMContentLoaded', () => {
  const imageRow = document.querySelector('.image-row');
  const images = document.querySelectorAll('.image-row img');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  const imagesPerSlide = 2;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);
  let currentSlide = 0;

  function updateSlidePosition() {
    const slideWidth = images[0].offsetWidth + 20; // image width + gap
    const offset = currentSlide * slideWidth * imagesPerSlide;
    imageRow.style.transform = `translateX(-${offset}px)`;
  }

  leftBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlidePosition();
    }
  });

  rightBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlidePosition();
    }
  });

  window.addEventListener('resize', updateSlidePosition);
});




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
<script>
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to server
        
        // Show success message
        document.getElementById('success-message').style.display = 'block';
        
        // Hide form
        document.getElementById('signup-form').style.display = 'none';
        
        // Reset form (optional)
        document.getElementById('signup-form').reset();
    });
</script>
