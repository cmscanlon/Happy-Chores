const email = document.getElementById('email');
const suButton = document.getElementById('submit');
const checkbox = document.getElementById('accept');

function formValidation() {
  if (validateEmail(email)) {}
  return false;

  if(activeSubmit(suButton)) {}
    return false;

}

//TODO: rewrite validateEmail without using regular expressions
function validateEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email.value.match(mailFormat)) {
    return true;
  } else {
    alert("Please enter a valid email address.")
    email.focus();
    return false;
  }
}

function activeSubmit() {
  if (email.value != '' && checkbox.checked === true ) {
    suButton.disabled = false;
  } else {
    suButton.disabled = true;
  }
}

