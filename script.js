


// contact layout
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Optional: Grab form values
    const name = form.querySelector("input[placeholder='Name']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Basic validation (you can expand this)
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission (you can later hook this up to a real backend or email service)
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset the form
    form.reset();
  });
});



// promos layout
<script>
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to server
        
        // Show success message
        document.getElementById('success-message').style.display = 'block';
        
        // Hide form
        document.getElementById('signup-form').style.display = 'none';
        
        // Reset form (optional)
        document.getElementById('signup-form').reset();
    });
</script>
