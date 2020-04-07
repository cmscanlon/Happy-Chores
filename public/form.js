function formValidation() {
  const email = document.getElementById('email');
  const suButton = document.getElementById('submit');
  const checkbox = document.getElementById('accept');

  if (validateEmail(email)) {}
  return false;

  if(activeSubmit(suButton)) {}
    return false;

}

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

function clearForm () {
    const elements = oForm.elements;

    for (i = 0; i < elements.length; i++) {
        const fieldType = elements[i].type.toLowerCase();
        switch (fieldType) {
        case 'text':
            elements[i].value = '';
            break;
        case 'checkbox':
            if (elements[i].checked) {
                elements[i].checked = false;
            }
            break;
            default:
            break;
        }
    }
}

function activeSubmit(suButton) {

    if (email.value != '' && checkbox.checked === true ) {
        suButton.disabled = false;
    } else {
        suButton.disabled = true;
        }
    }

