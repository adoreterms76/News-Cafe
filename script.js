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
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from reloading the page
  document.getElementById("thankYouPopup").style.display = "flex"; // Show popup
  this.reset(); // Optional: Clear the form
});

function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none"; // Hide popup
}
