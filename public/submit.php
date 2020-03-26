function validateForm() {
  const firstName = document.forms["InterestForm"]["fname"];
  const emailAdd = document.forms["InterestForm"]["email"];
  if (firstName.value === "") {
    window.alert("Name must be filled out");
    firstName.focus();
    return false;
  }
  if(emailAdd.value === "") {
    window.alert("Email address must be filled out");
    emailAdd.focus();
    return false;
    }
  }
  return true;
}