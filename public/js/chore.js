const modal = document.getElementById("overlay");
const btn = document.getElementById("add-chore");
const span = document.getElementsByClassName("close")[0];

const choreList = [];
const app = document.querySelector('.chore-list');
const chore = document.getElementById('choreSelect');
const assign = document.getElementById('famMembers');
const date = document.getElementById('due-date-select');
const dateAssign = document.getElementById('dateAssign');
const suButton = document.getElementById('submit');
const choreTable = document.getElementById('choreTable');

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

/************Family Modal ***********/

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
    const choreLength = document.getElementById('choreSelect').selectedIndex === 0;
    const famMembersLength = document.getElementById('famMembers').selectedIndex === 0;
    if (choreLength === false && famMembersLength === false) { 
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

    const checkbtn = document.createElement('input');
    setAttributes(checkbtn, {type: 'image', role: 'cell', src: 'img/stop-outline.svg', class: 'flex-row', value: "Check", }); 

    const delbtn = document.createElement('input');
    setAttributes(delbtn, {type: 'image', role: 'cell', src: 'img/trash-outline.svg', class: 'flex-row', value: "Delete", onclick: 'deleteChore(event)'});

    const editbtn = document.createElement('input');
    setAttributes(editbtn, {type: 'image', role: 'cell', src: 'img/create-outline.svg', class: 'flex-row', value: 'Edit', onclick: 'editMode(event)'});
  
    const newLi = document.createElement('li');
    setAttributes(newLi, {class: 'chore-li', id: 'chores'});

    const readOnlyDiv = document.createElement('div');
    setAttributes(readOnlyDiv, {class: 'div1', id: 'div1'});
    
    const editModeDiv = document.createElement('div');
    setAttributes(editModeDiv, {class: 'div2', id: 'div2'});
    
    const newChore = {
        name: document.getElementById('choreSelect').value,
        assignee: document.getElementById('famMembers').value,
        dateAssign: document.getElementById('dateAssign').value,
        date: document.getElementById('due-date-select').value
    }

    const choreDescription = document.createElement('div');
    setAttributes(choreDescription, {type: 'text', role: 'rowgroup', class: 'flex-table-row'});
    
    const choreName = document.createElement('div');
    setAttributes(choreName, {type: 'text', role: 'cell', class: 'flex-row', id: 'flex-row-name'});
    choreName.textContent = `${newChore.name}`;

    const choreOwner = document.createElement('div');
    setAttributes(choreOwner, {type: 'text', role: 'cell', class: 'flex-row', id: 'flex-row-owner'});
    choreOwner.textContent = `${newChore.assignee}`;

    const choreDateAssign = document.createElement('div');
    setAttributes(choreDateAssign, {type: 'text', role: 'cell', class: 'flex-row', id: 'flex-row-date-assign'});
    choreDateAssign.textContent = `${newChore.dateAssign}`;

    const choreDueDate = document.createElement('div');
    setAttributes(choreDueDate, {type: 'text', role: 'cell', class: 'flex-row', id: 'flex-row-date'});
    choreDueDate.textContent = `${newChore.date}`;

    const editInput1 = document.createElement('select');
    setAttributes(editInput1, {class: 'edit', id: 'edit', value: `${newChore.name}` });

    const inputData = ["Bathroom", "Bedroom", "Kitchen", "Family Room", "Yard"];

    inputData.forEach(function(item) {
        editOption = document.createElement('option');
        editOption.value = editOption.textContent = item;
        editInput1.appendChild(editOption);
    });

    const editInput2 = document.createElement('select');
    setAttributes(editInput2, {class: 'edit2', id: 'famMemberEdit'});

    const editInput3 = document.createElement('input');
    setAttributes(editInput3, {class: 'edit3', id: 'edit3', type: 'text', value: `${newChore.date}`});

    const cancelbtn = document.createElement('input');
    setAttributes(cancelbtn, {type: 'image', src: 'img/close-outline.svg', class: 'cancel', onclick: 'cancelEdit(event)'});

    const savebtn = document.createElement('input');
    setAttributes(savebtn, {type: 'image', src: 'img/checkmark-outline.svg', class: 'save', onclick: 'saveChore(event)'});
    
    choreDescription.appendChild(checkbtn);
    readOnlyDiv.appendChild(choreDescription);

    choreDescription.appendChild(choreName);
    choreDescription.appendChild(choreOwner);
    choreDescription.appendChild(choreDueDate);
    choreDescription.appendChild(choreDateAssign);
    choreDescription.appendChild(editbtn);
    choreDescription.appendChild(delbtn);

    newLi.appendChild(readOnlyDiv);
    newLi.appendChild(editModeDiv);

    editModeDiv.appendChild(editInput1);
    editInput1.appendChild(editOption);
    editModeDiv.appendChild(editInput2);
    editModeDiv.appendChild(editInput3);
    editModeDiv.appendChild(savebtn);
    editModeDiv.appendChild(cancelbtn);

    choreList.push(newChore);

    app.appendChild(newLi);

    clearFields();
    submitActive();
    noChores();

    return false; 
}

function deleteChore(event) {
    const chores = document.getElementById('chores');
    if (chores.parentNode) {
        chores.parentNode.removeChild(event.target.closest('li'));
    }
}
const editModeDiv = document.getElementById('div2');

function editMode(event) {
    const read = event.target.closest('.div1');
    const edit = event.target.closest('li').querySelector('.div2');
    read.style.display = 'none';
    edit.style.display = 'block'; 

    // const newFamilyMember = {
    //     name: document.getElementById('fname').value
    // }

    // const famEditValues = document.createElement('option');
    // setAttributes(famEditValues, {id: `${newFamilyMember.name}`});
    // famEditValues.text = `${newFamilyMember.name}`;

    // // famMemberEdit.add(famEditValues);
    // editModeDiv.appendChild(famMemberEdit);
    // app.appendChild(famMemberEdit);

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
        editAssignee: event.target.closest('li').querySelector('.edit2').value,
        editDate: event.target.closest('li').querySelector('.edit3').value
    }
    cancelEdit(event);
    const editModeName = document.getElementById('flex-row-owner');
    const editModeChore = document.getElementById('flex-row-name');
    const editModeDate = document.getElementById('flex-row-date');

    editModeName.textContent = `${newEditChore.editAssignee}`;
    editModeChore.textContent =  `${newEditChore.editName}`;
    editModeDate.textContent = `${newEditChore.editDate}`;
    
    choreList.push(newEditChore);
}

function noChores() {
    const noChoreDiv = document.getElementById("noChore");
    const choreListApp = document.getElementById('app');
    noChoreDiv.style.display = 'none';
    choreListApp.style.display = 'block'
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

