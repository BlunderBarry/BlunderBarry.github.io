const sendEmail = document.getElementById("arrowImg");
const error = document.getElementById("emailError");
const formField = document.getElementById("email");

sendEmail.addEventListener("click", function (e) {
  if (formField.value === "" || formField.validity.valid === false) {
    error.innerHTML = "Please provide a valid email";
    e.preventDefault();
    formField.style.backgroundImage = "url(images/icon-error.svg)";
  }
});
