
const choreList = [];
const app = document.querySelector('.chore-list');
const chore = document.getElementById('chore');
const assign = document.getElementById('assigned');
const suButton = document.getElementById('submit');


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

function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function(name) {
        elements.setAttribute(name, attributes[name]);
    })
}

function addChore() {
    const delbtn = document.createElement('input');
    setAttributes(delbtn, {type: "button", class: 'delete', value: "Delete", onclick: 'deleteChore(event)'});

    const editbtn = document.createElement('input');
    setAttributes(editbtn, {type: 'button', class: 'edit', value: 'Edit', onclick: 'editChore(event)'});
  
    const newLi = document.createElement('li');
    setAttributes(newLi, {class: 'chore-li', id: 'chores'});

    const newChore = {
        name: document.getElementById('chore').value,
        assignee: document.getElementById('assigned').value
    }
    newLi.textContent = `Chore: ${newChore.name} - Assigned to: ${newChore.assignee}`;
    
    newLi.appendChild(editbtn);
    newLi.appendChild(delbtn);
    choreList.push(newChore);
    app.appendChild(newLi);
    clearFields();
    return false; 
}

function deleteChore(event) {
    // console.log(event.target.closest('li'));
    const chores = document.getElementById('chores');
    if (chores.parentNode) {
        chores.parentNode.removeChild(event.target.closest('li'));
    }
}

function editChore(event) {
    // const chores = document.getElementById('chores');
    const c = event.target.closest('li');
    // console.log(event.target.closest('li'));
    console.log(c.textContent);
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


















// app.addEventListener('click', function(c) {
//     // this.removeChild(c.target);
//     console.log(c.target);
// })

// function fieldValidation() {
//     const error = document.getElementById('error');
//     error.textContent = '';

//         if (emptyFields() === true) {
//             error.textContent = 'Cannot be blank.';
//             return false;
//         }
//     return true;
// 