
const choreList = [];
const app = document.querySelector('.chore-list');
const chore = document.getElementById('chore');
const assign = document.getElementById('assigned');
const suButton = document.getElementById('submit');

// app.addEventListener('click', function(c) {
//     // this.removeChild(c.target);
//     console.log(c.target);
// })


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
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'delete');
    button.setAttribute('value', 'Delete');
    button.setAttribute('onclick', 'deleteChore(event)');

    const newLi = document.createElement('li');
    newLi.setAttribute('class', 'chore-li');
    newLi.setAttribute('id', 'chores')
    const newChore = {
        name: document.getElementById('chore').value,
        assignee: document.getElementById('assigned').value
    }
    newLi.textContent = `Chore: ${newChore.name} - Assigned to: ${newChore.assignee}`;
    
    newLi.appendChild(button);
    choreList.push(newChore);
    app.appendChild(newLi);
    clearFields();
    return false; 
}

function deleteChore(event) {
    console.log(event.target.closest('li'));
    const chores = document.getElementById('chores');
    if (chores.parentNode) {
        chores.parentNode.removeChild(event.target.closest('li'));
    }
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
// 