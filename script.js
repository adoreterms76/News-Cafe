// Index layout
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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

