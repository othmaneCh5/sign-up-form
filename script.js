//selecting elements
const form=document.getElementById('form');
const confirm_password=document.getElementById('confirm_password');
const password=document.getElementById('password');
//making a function to check that the password and the confirmation are the same
form.addEventListener('submit', function (event) {
    if (password.value !== confirm_password.value) {
        password.setCustomValidity('password and confirmation not matching');
        confirm_password.setCustomValidity('password and confirmation not matching');
      event.preventDefault(); // Prevent form submission
    }
  });

