// promos layout
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('SubscriptionForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      modal.show();
      form.reset();
    });
  }
});

// contact layout
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    // Optional: clear the form fields
    form.reset();

    // Show the Bootstrap modal
    const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
    thankYouModal.show();
  });
});

