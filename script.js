// Promo layout
<script>
  const form = document.getElementById('SubscribekForm');
  const thankYou = document.getElementById('thankYouMsg');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    thankYou.style.display = 'block'; // show thank you message
    form.reset(); // clear the form
  });
</script>

// contact layout
script>
    function showThankYouMessage(event) {
      event.preventDefault();
      document.getElementById('contactForm').style.display = 'none';
      document.querySelector('.thank-you-message').style.display = 'block';
      return false;
    }
