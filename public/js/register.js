const familyList = [];
const fam = document.querySelector('.family-list');
const firstName = document.getElementById('fname');
const subFamButton = document.getElementById('familySubmit');
const familyMemberAdd = document.getElementById('famMembers');

function emptyFamFields() {
    if (firstName.value !== '') {
        return false;
    }
    return true;
}

function submitButtonActive() {
    if (emptyFamFields() === true) {
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

    const newFamilyMember = {
        name: document.getElementById('fname').value
    }
    
    const familyLi = document.createElement('li');
    setAttributes(familyLi, {class: 'family-li', id: `${newFamilyMember.name}` });
    
    const familyInfo = document.createElement('span');
    setAttributes(familyInfo, {name: 'familyInfo', id: 'familyInfo'});
    familyInfo.textContent = `${newFamilyMember.name}`;

    const famValues = document.createElement('option');
    setAttributes(famValues, {id: `${newFamilyMember.name}`});
    famValues.text = `${newFamilyMember.name}`;
    
    familyMemberAdd.add(famValues);
    fam.appendChild(familyLi);
    familyList.push(newFamilyMember);
    familyLi.appendChild(familyInfo);
    familyLi.appendChild(delbtn);
    clearFamFields();
    submitButtonActive();
                                                            
    return false;
}

function deleteFamilyMember(event) {
    const family = document.getElementById('family-list');
    family.removeChild(event.target.closest('li'));

    const delFamily = document.getElementById('famMembers');
    const memberToDelete = document.getElementById(event.target.closest('li').id);
        delFamily.removeChild(memberToDelete);
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
            break;
        case "select-one":
        case "select-multi":
            elements[i].selectedIndex = -1;
            break;
        default:
            break;
        }
    }
}