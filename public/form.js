const email = document.getElementById('email');
const suButton = document.getElementById('submit');
const checkbox = document.getElementById('accept');

function formValidation() {
    console.log("Validate Email", emailValidation(email));
    console.log("Active Submit", submitActive(suButton));
  if (emailValidation(email) && submitActive(suButton)) {
        return true;
     }
  return false;
}

function isValid(email) {
const atSymbol = email.indexOf('@');

  if (atSymbol < 1) return false;

const dot = email.indexOf('.');
const part = email.split('@');
const afterDot = part[1].indexOf('.');
const len = part[1].length;
const dotSplits = part[1].split('.');
const dotAmt = dotSplits.length -1;

  if(dot <= atSymbol + 1) return false;
  if (dot === email.length - 1) return false;
  if (dot == - 1 || dot < 2 || dotAmt > 2) return false

  for (var i = 0; i < dotSplits.length; i++) {
    if (dotSplits[i].length === 0) {
        return false;
    }
  }

return true;
}

function emailValidation() {
const email = document.getElementById('email').value;
const error = document.getElementById('error');

    error.textContent = '';
    if (!isValid(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }
    return true;
}

function submitActive() {
  if (email.value != '' && checkbox.checked === true ) {
    suButton.disabled = false;
    return true;
  } else {
    suButton.disabled = true;
    return false;
  }
}

function clearFields() {
    const elements = document.getElementById('interestForm').elements;

    for (i = 0; i < elements.length; i++) {
        fieldType = elements[i].type.toLowerCase();
        switch (fieldType) {
        case 'text':
            elements[i].value = '';
            break;
        case 'checkbox':
            if (elements[i].checked) {
                elements[i].checked = false;
            }
            break
        default:
            break;
        }
    }
}



