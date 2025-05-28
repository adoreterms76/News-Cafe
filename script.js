// contact layout
 // Form Submission Script
  <script>
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent actual form submission
      const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      thankYouModal.show();
      this.reset(); // Optional: Clear the form
    });
  </script>
