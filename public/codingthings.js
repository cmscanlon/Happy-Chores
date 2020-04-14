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

<form name="interestForm" onsubmit="return formValidation()">
    <ul>
    <li><label for='fname' >First Name</label></li>
    <li><input type="text" size=65 id="fname" name="fname" placeholder="Enter your first name"/></li>
    <li><label for="lname">Last Name</label><br></li>
    <li><input type="text" size=65 id="lname" name="lname" placeholder="Enter your last name"/></li>
    <li><label for="email" >Email Address*</label></li>
    <li><input type="text" size=65 id="email" name="email" placeholder="Enter your email address" onkeyup="activeSubmit()" /></li>
    <li><span id="error" style="color:red   "></span></li>
    <li><input type="submit" id="submit" disabled/></li>
    <li><button type="clear" id="clear" name="clear"/>Clear</button></li>
    <li><input type="checkbox" id="accept" onchange="activeSubmit()"/></li>
    <li><label for="accept">By checking this box you accept the terms of this page.*</label></li>
    <li><p>* Required Field</p></li>
    </ul>
</form>