const familyList = [];
const fam = document.querySelector('.family-list');
const firstName = document.getElementById('fname');
const subFamButton = document.getElementById('familySubmit');

function emptyFamFields() {
    if (firstName.value !== '') {
        return false;
    }
    return true;
}

function submitButtonActive() {
    if (emptyFields() === true) {
      subFamButton.disabled = true;
    return false;
    } else {
      subFamButton.disabled = false;
     return true;
  }
}
function setAttributes(elements, attributes) {
    Object.keys(attributes).forEach(function(name) {
        elements.setAttribute(name, attributes[name]);
    })
}

function addFamilyMember() {
    const familyDiv = document.createElement('div');
    setAttributes(familyDiv, {class: 'family', id: 'family'});

    const choreDiv = document.createElement('div');
    setAttributes(choreDiv, {class: 'choreDiv', id: 'choreDiv'});

    const delbtn = document.createElement('input');
    setAttributes(delbtn, {type: 'image', src: 'img/trash-outline.svg', class: 'delete', value: "Delete", onclick: 'deleteFamilyMember(event)' });

    const familyLi = document.createElement('li');
    setAttributes(familyLi, {class: 'family-li', id: 'familyLi'});
    
    const newFamilyMember = {
        name: document.getElementById('fname').value
    }

    const familyInfo = document.createElement('span');
    familyInfo.textContent = `${newFamilyMember.name}` ;
    
    fam.appendChild(familyLi);
    familyList.push(newFamilyMember);
    familyLi.appendChild(familyInfo);
    familyLi.appendChild(delbtn);
    clearFamFields();
    submitButtonActive();
    return false;
}

function deleteFamilyMember(event) {
    const family = document.getElementById('familyLi');
    if (family.parentNode) {
        family.parentNode.removeChild(event.target.closest('li'));
    }
}

function clearFamFields() {
    const elements = document.getElementById('registerForm').elements;

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