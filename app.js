/* Created by Tivotal */

function validate() {
  let form = document.querySelector(".form");
  let emailInput = document.querySelector(".email-input");
  let txt = document.querySelector(".text");

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let email = emailInput.value;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    txt.textContent = "Your email address is valid";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    txt.textContent = "Your email address is not valid";
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    txt.textContent = "";
  }
}
