const familyList = [];
const fam = document.querySelector('.family-list');
const firstName = document.getElementById('fname');
const subFamButton = document.getElementById('familySubmit');
const familyMemberAdd = document.getElementById('famMembers');
const familyMemberEdit = document.getElementById('famMemberEdit');

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
    setAttributes(delbtn, {type: 'image', role: 'cell', src: 'img/trash-outline.svg', class: 'fam-flex-row', value: "Delete", onclick: 'deleteFamilyMember(event)' }); 
    
    const newFamilyMember = {
        name: document.getElementById('fname').value
    }

    const familyLi = document.createElement('li');
    setAttributes(familyLi, {class: 'family-li', id: `${newFamilyMember.name}` });
    
    const familyMemberList = document.createElement('div');
    setAttributes(familyMemberList, {type: 'text', role: 'rowgroup', class: 'fam-flex-table-row'});

    const familyInfo = document.createElement('div');
    setAttributes(familyInfo, {type: 'text', role: 'cell', name: 'familyInfo', class: 'fam-flex-row', id: 'flex-row-famName'});
    familyInfo.textContent = `${newFamilyMember.name}`;

    const famValues = document.createElement('option');
    setAttributes(famValues, {id: `${newFamilyMember.name}`});
    famValues.text = `${newFamilyMember.name}`;
    
    familyMemberAdd.add(famValues);
    fam.appendChild(familyLi);
    familyList.push(newFamilyMember);
    familyMemberList.appendChild(familyInfo);
    familyMemberList.appendChild(delbtn);
    familyLi.appendChild(familyMemberList);
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