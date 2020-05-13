
const choreList = [];
const app = document.querySelector('.chore-list');
const chore = document.getElementById('chore');
const assign = document.getElementById('assigned');
const suButton = document.getElementById('submit');

app.addEventListener('click', function(c) {
    this.removeChild(c.target);
})

function emptyFields() {
    if (chore.value !== '' && assign.value !== '') {
        return false;
    }
    return true;
}

function submitActive() {
    if (emptyFields() === true) {
      suButton.disabled = true;
    return false;
    } else {
      suButton.disabled = false;
     return true;
  }
}

choreList.forEach(function (chore) {
    const li = document.createElement('li');
    li.textContent = `Chore: ${chore.name} - Assigned to: ${chore.assignee}`;
    app.appendChild(li);
});

function addChore() {
    const newLi = document.createElement('li');
    const newChore = {
        name: document.getElementById('chore').value,
        assignee: document.getElementById('assigned').value
    }
    newLi.textContent = `Chore: ${newChore.name} - Assigned to: ${newChore.assignee}`;
    choreList.push(newChore);
    app.appendChild(newLi);
    return false; 
}

function clearFields() {
    const elements = document.getElementById('chore-form').elements;

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

// function fieldValidation() {
//     const error = document.getElementById('error');
//     error.textContent = '';

//         if (emptyFields() === true) {
//             error.textContent = 'Cannot be blank.';
//             return false;
//         }
//     return true;
// }