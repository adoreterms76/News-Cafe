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
<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      
      // Hide the form
      document.getElementById('contactForm').style.display = 'none';
      
      // Show the thank you message
      document.getElementById('thankYouMessage').style.display = 'block';
      
      // Optional: You could add form submission logic here (like sending to a server)
      // For now, we're just showing the message
    });
  </script>
