// contact layout
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const thankYouMessage = document.querySelector('.thank-you-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload
    form.style.display = 'none'; // hide form
    thankYouMessage.style.display = 'block'; // show thank-you message

    function showThankYouMessage() {
  // Hide the form
  document.getElementById('contactForm').style.display = 'none';

  // Show the thank you message
  document.querySelector('.thank-you-message').style.display = 'block';

  // Prevent actual form submission (reload)
  return false;
}

  });  
});

