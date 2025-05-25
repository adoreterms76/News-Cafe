// Promo layout
  <script>
  document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    const message = document.getElementById('newsletter-message');

    if (email) {
      message.textContent = "Thanks for subscribing, " + email + "!";
    } else {
      message.textContent = "Please enter a valid email address.";
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

