const familyList = [];
const fam = document.querySelector('.family-list');
const parentName = document.getElementById('pfname');
const parentEmail = document.getElementById('email');
const suButton = document.getElementById('parentSubmit');
const childName = document.getElementById('cfname');
const childEmail = document.getElementById('cemail');
const suChildButton = document.getElementById('childSubmit');

function emptyFields() {
    if (parentName.value !== '' && parentEmail.value !== '') {
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

familyList.forEach(function (parent) {
    const li = document.createElement('li');
    li.textContent = `${parent.name} ${parent.email}`;
    fam.appendChild(li);
});

function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function(name) {
        elements.setAttribute(name, attributes[name]);
    })
}

function addParent() {
    const delbtn = document.createElement('input');
    setAttributes(delbtn, {type: 'image', src: 'img/trash-outline.svg', class: 'delete', value: "Delete"});

    const parentLi = document.createElement('li');
    setAttributes(parentLi, {class: 'parent-li', id: 'parent'});
    
    const newParent = {
        name: document.getElementById('pfname').value,
        email: document.getElementById('email').value
    }

    const parentInfo = document.createElement('span');
    parentInfo.textContent = `${newParent.name} - ${newParent.email}`;

    fam.appendChild(parentLi);
    familyList.push(newParent);
    parentLi.appendChild(parentInfo);
    parentLi.appendChild(delbtn);
    clearFields();
    return false;
}

function clearFields() {
    const elements = document.getElementById('parentForm').elements;

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



function emptyChildFields() {
    if (childName.value !== '' && childEmail.value !== '') {
        return false;
    }
    return true;
}

function submitChildActive() {
    if (emptyChildFields() === true) {
      suChildButton.disabled = true;
    return false;
    } else {
      suChildButton.disabled = false;
     return true;
  }
}

function addChildren() {
    const delbtn = document.createElement('input');
    setAttributes(delbtn, {type: 'image', src: 'img/trash-outline.svg', class: 'delete', value: 'Delete'});

    const childLi = document.createElement('li');
    setAttributes(childLi, {class: 'childLi', id: child});

    const newChild = {
        name: document.getElementById('cfname').value,
        email: document.getElementById('cemail').value
    }

    const childInfo = document.createElement('span');
    childInfo.textContent = `${newChild.name} - ${newChild.email}`;

    fam.appendChild(childLi);
    familyList.push(newChild);
    childLi.appendChild(childInfo);
    clearChildFields();
    return false;
}

function clearChildFields() {
    const elements = document.getElementById('childForm').elements;

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