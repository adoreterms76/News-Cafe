// Promo layout
  document.querySelector('.newsletter-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
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

