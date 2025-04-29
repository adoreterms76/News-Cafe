// Index Layout

document.addEventListener("DOMContentLoaded", function () {
  const slideContainers = document.querySelectorAll(".slides-container");

  slideContainers.forEach((container) => {
    const prevButton = container.parentElement.querySelector(".prevBtn");
    const nextButton = container.parentElement.querySelector(".nextBtn");

    // Scroll amount per click (adjust as needed)
    const scrollAmount = 320;

    nextButton.addEventListener("click", () => {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevButton.addEventListener("click", () => {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  });
});




// breakfast layout
function scrollImages(direction) {
  const row = document.getElementById('imageRow');
  const scrollAmount = 400; // Adjust scroll step

  row.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
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
