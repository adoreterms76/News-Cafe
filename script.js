// contact layout
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const thankYouMessage = document.querySelector(".thank-you-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    // Optionally, you can reset the form
    form.reset();

    // Hide the form and show thank-you message
    form.style.display = "none";
    thankYouMessage.style.display = "block";

function showThankYouMessage() {
  event.preventDefault(); // Stop the form from submitting
  document.getElementById("contactForm").style.display = "none";
  document.querySelector(".thank-you-message").style.display = "block";
  return false; // Prevent form refresh
}
    
  });
});
