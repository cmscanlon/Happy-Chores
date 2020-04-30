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


const choreList = ["Make Bed", "Walk Dogs", "Clean Room", "Empty Dishwasher"];
const list = document.createElement('ul');

choreList.forEach(function (choreList) {
    const li = document.createElement('li');
    li.textContent = choreList;
    list.appendChild(li);
});

const app = document.querySelector('#app');
app.appendChild(list);