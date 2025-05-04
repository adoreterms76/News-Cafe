// contact layout
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const thankYouMessage = document.querySelector('.thank-you-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload
    form.style.display = 'none'; // hide form
    thankYouMessage.style.display = 'block'; // show thank-you message
  });
});

