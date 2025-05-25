// Promo layout
 // Wait until the page fully loads
window.onload = function() {
  var form = document.getElementById("contactForm");
 
  // On form submission
  form.onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission
 
    // Get values from the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
 
    // Basic validation check (optional)
    if (name && email && message) {
      // Show a thank you alert
      alert("Thank you, " + name + "! Your sign up has been sent successfully.");
      // Reset the form after submission
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  };
};
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

