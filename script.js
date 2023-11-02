//selecting elements
const resetButton = document.getElementById('resetButton');
const form=document.getElementById('form');
const submitbutton=document.getElementById('submitbutton');
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
//adding event to the reset button so it can rest the content of the form
resetButton.addEventListener('click', function () {
   form.reset();
  });
