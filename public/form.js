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
function isValid(email) {

const atSymbol = email.indexOf('@');
  if (atSymbol < 1) return false;

const dot = email.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    if (dot === email.length - 1) return false;

return true;
  }

function validateEmail() {
    const email = document.getElementById('email').value;
    const error = document.getElementById('error');
    error.innerHTML = '';
    if (!isValid(email)) {
        error.innerHTML = "Please enter a valid email address.";
    }
}

function activeSubmit() {
  if (email.value != '' && checkbox.checked === true ) {
    suButton.disabled = false;
  } else {
    suButton.disabled = true;
  }
}

