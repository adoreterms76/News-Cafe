// contact layout
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // stops the page from refreshing
    alert('Thank you! Your message has been sent.');
    form.reset(); // clear the form
  });
});

