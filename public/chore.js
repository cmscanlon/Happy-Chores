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


const choreList = [{ name: "Make Bed", assignee: "Kyle"}, { name: "Walk Dogs", assignee: "Kyle"},
                    { name: "Clean Room", assignee: "Kyle"}, { name: "Empty Dishwasher", assignee: "Kyle"}];
const list = document.createElement('ul');

choreList.forEach(function (chore) {
    const li = document.createElement('li');
    li.textContent = `Chore: ${chore.name} - Assigned to: ${chore.assignee}`;
    list.appendChild(li);
});

const app = document.querySelector('#app');
app.appendChild(list);

function addChore() {
    newChore = document.getElementById('chore').value;
    choreList.push(newChore);
    console.log(choreList);
    return false;
}