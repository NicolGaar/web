// script.js
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('projectForm');
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
  


