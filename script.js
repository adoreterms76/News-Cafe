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

// download as pdf
<script>
  document.getElementById('downloadPdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;

    html2canvas(document.querySelector("#menu-images")).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // Calculate width and height to fit A4
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save("news-cafe-menu.pdf");
    });
  });

