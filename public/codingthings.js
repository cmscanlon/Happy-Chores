function formValidation() {
    const email = document.forms['interestForm']['email'];

    if (email.value === '') {
        window.alert("Cannot leave blank. Please enter an email address.");
        return false;
    }
    return true;
}

function clearFields() {
    const elements = oForm.elements;

    for (i = 0; i < elements.length; i++) {
        fieldType = elements[i].type.toLowerCase();
        switch (fieldType) {
        case 'text':
        case 'password';
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