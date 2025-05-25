// Promo layout
  <form id="newsletter-form">
  <input type="email" id="newsletter-email" placeholder="Enter your email" required>
  <button type="submit" class="newsletter-btn">Subscribe</button>
</form>

<script>
  document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from submitting
    const email = document.getElementById('newsletter-email').value;
    if (email) {
      alert("Thanks for subscribing, " + email + "!");
    } else {
      alert("Please enter a valid email address.");
    }
  });
</script>



  
// contact layout
function showThankYouMessage(event) {
  event.preventDefault(); // prevent form from reloading the page

  // Hide the form
  const form = document.getElementById("contactForm");
  form.style.display = "none";

  // Show the thank-you message
  const message = document.querySelector(".thank-you-message");
  message.style.display = "block";

  return false;
  });
  });

