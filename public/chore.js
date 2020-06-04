
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
    setAttributes(delbtn, {type: 'image', src: 'img/close-outline.svg', class: 'delete', value: "Delete", onclick: 'deleteChore(event)'});

    const editbtn = document.createElement('input');
    setAttributes(editbtn, {type: 'image', src: 'img/create-outline.svg', class: 'edit', value: 'Edit', onclick: 'editMode(event)'});
  
    const newLi = document.createElement('li');
    setAttributes(newLi, {class: 'chore-li', id: 'chores'});

    const readOnlyDiv = document.createElement('div');
    setAttributes(readOnlyDiv, {class: 'div1', id: 'div1'});
    
    const editModeDiv = document.createElement('div');
    setAttributes(editModeDiv, {class: 'div2', id: 'div2'});
    // const text = document.createTextNode('Now in edit mode!');
    // editModeDiv.appendChild(text);
    
    const newChore = {
        name: document.getElementById('chore').value,
        assignee: document.getElementById('assigned').value
    }

    const choreDescription = document.createElement('span');
    choreDescription.textContent = `Chore: ${newChore.name} - Assigned to: ${newChore.assignee}`;

    const editInput1 = document.createElement('input');
    setAttributes(editInput1, {class: 'edit', id: 'edit', value: `${newChore.name}` });

    const editInput2 = document.createElement('input');
    setAttributes(editInput2, {class: 'edit2', id: 'edit2', value: `${newChore.assignee}`});

    readOnlyDiv.appendChild(choreDescription);
    readOnlyDiv.appendChild(editbtn);
    readOnlyDiv.appendChild(delbtn);
    newLi.appendChild(readOnlyDiv);
    newLi.appendChild(editModeDiv);
    editModeDiv.appendChild(editInput1);
    editModeDiv.appendChild(editInput2);
    choreList.push(newChore);
    app.appendChild(newLi);
    clearFields();
    submitActive();
    return false; 
}

function deleteChore(event) {
    const chores = document.getElementById('chores');
    if (chores.parentNode) {
        chores.parentNode.removeChild(event.target.closest('li'));
    }
}

function editMode(event) {
    // console.log(event.target.closest('.div1'));
    const read = event.target.closest('.div1');
    const edit = event.target.closest('li').querySelector('.div2');
    // console.log(event.target.closest('li').querySelector('.div2'));
    read.style.display = 'none';
    edit.style.display = 'block'; 
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

// function editChore(event) {
//     const c = event.target.closest('li');
//     console.log(c.textContent);
// }

// function fieldValidation() {
//     const error = document.getElementById('error');
//     error.textContent = '';

//         if (emptyFields() === true) {
//             error.textContent = 'Cannot be blank.';
//             return false;
//         }
//     return true;
// 