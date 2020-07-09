const modal = document.getElementById("overlay");
const btn = document.getElementById("add-chore");
const span = document.getElementsByClassName("close")[0];

const choreList = [];
const app = document.querySelector('.chore-list');
const chore = document.getElementById('choreSelect');
const assign = document.getElementById('famMembers');
const date = document.getElementById('due-date-select');
const suButton = document.getElementById('submit');

const famModal = document.getElementById("famOverlay");
const famBtn = document.getElementById("add-fam");
const famSpan = document.getElementsByClassName("famClose")[0];

/************Chore Modal ************/

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modual.style.display = "none";
    }
}

/******************Family Modal ***********/

famBtn.onclick = function() {
    famModal.style.display = "block";
}

famSpan.onclick = function() {
    famModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === famModal) {
        famModal.style.display = "none";
    }
}

function emptyFields() {
    if (choreSelect.value !== '' && famMembers.value !== '' ) {
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

function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function(name) {
        elements.setAttribute(name, attributes[name]);
    })
}

function addChore() {
    const delbtn = document.createElement('input');
    setAttributes(delbtn, {type: 'image', src: 'img/trash-outline.svg', class: 'delete', value: "Delete", onclick: 'deleteChore(event)'});

    const editbtn = document.createElement('input');
    setAttributes(editbtn, {type: 'image', src: 'img/create-outline.svg', class: 'editbtn', value: 'Edit', onclick: 'editMode(event)'});
  
    const newLi = document.createElement('li');
    setAttributes(newLi, {class: 'chore-li', id: 'chores'});

    const readOnlyDiv = document.createElement('div');
    setAttributes(readOnlyDiv, {class: 'div1', id: 'div1'});
    
    const editModeDiv = document.createElement('div');
    setAttributes(editModeDiv, {class: 'div2', id: 'div2'});
    
    const newChore = {
        name: document.getElementById('chore').value,
        assignee: document.getElementById('famMembers').value
    }

    const choreDescription = document.createElement('span');
    choreDescription.textContent = `Chore: ${newChore.name} - Assigned to: ${newChore.assignee}`;

    const editInput1 = document.createElement('input');
    setAttributes(editInput1, {class: 'edit', id: 'edit', type: 'text', value: `${newChore.name}` });

    const editInput2 = document.createElement('input');
    setAttributes(editInput2, {class: 'edit2', id: 'edit2', type: 'text', value: `${newChore.assignee}`});

    const cancelbtn = document.createElement('input');
    setAttributes(cancelbtn, {type: 'image', src: 'img/close-outline.svg', class: 'cancel', onclick: 'cancelEdit(event)'});

    const savebtn = document.createElement('input');
    setAttributes(savebtn, {type: 'image', src: 'img/checkmark-outline.svg', class: 'save', onclick: 'saveChore(event)'});

    readOnlyDiv.appendChild(choreDescription);
    readOnlyDiv.appendChild(editbtn);
    readOnlyDiv.appendChild(delbtn);
    newLi.appendChild(readOnlyDiv);
    newLi.appendChild(editModeDiv);
    editModeDiv.appendChild(editInput1);
    editModeDiv.appendChild(editInput2);
    editModeDiv.appendChild(savebtn);
    editModeDiv.appendChild(cancelbtn);
    choreList.push(newChore);
    app.appendChild(newLi);
    // clearFields();
    // submitActive();
    // console.log(addChore);
    return false; 
}

function deleteChore(event) {
    const chores = document.getElementById('chores');
    if (chores.parentNode) {
        chores.parentNode.removeChild(event.target.closest('li'));
    }
}

function editMode(event) {
    const read = event.target.closest('.div1');
    const edit = event.target.closest('li').querySelector('.div2');
    read.style.display = 'none';
    edit.style.display = 'block'; 
}

function cancelEdit(event) {
    const read = event.target.closest('li').querySelector('.div1');
    const edit = event.target.closest('li').querySelector('.div2');
    read.style.display = 'block';
    edit.style.display = 'none'; 
}

function saveChore(event) {
    const newEditChore = {
        editName: event.target.closest('li').querySelector('.edit').value,
        editAssignee: event.target.closest('li').querySelector('.edit2').value
    }
    cancelEdit(event);
    const editDescription = event.target.closest('li').querySelector('span');
    editDescription.textContent = `Chore: ${newEditChore.editName} - Assigned to: ${newEditChore.editAssignee}`;
    choreList.push(newEditChore);
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
            break;
        case "select-one":
        // case "select-multi":
            // elements[i].selectedIndex = -1;
            break;
        default:
            break;
            }
        }
    }
