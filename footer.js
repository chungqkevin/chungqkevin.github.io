// footer.js
document.addEventListener("DOMContentLoaded", function () {
  // Fetch and insert the footer
  fetch("footer.html")
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML += html;
    });
});
