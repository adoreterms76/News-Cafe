// Promo layout
  <script>
  const form = document.getElementById('feedbackForm');
  const thankYou = document.getElementById('thankYouMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    thankYou.style.display = 'block'; // show thank you message
    form.reset(); // clear the form
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

