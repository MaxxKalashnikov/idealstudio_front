import { MasterS } from "./classes/Masters.js";

document.addEventListener('DOMContentLoaded', async function () {
    const masterService = new MasterS('http://localhost:3001'); // Assuming backend URL
    const masters = await masterService.get_masters();
    renderMastersAccordion(masters);
    

    // Обработчик для удаления выбранных мастеров
    const deleteButton = document.getElementById('deleteSelectedEmployeesBtn');
    if (deleteButton) {
        deleteButton.addEventListener('click', deleteSelectedMasters);
    }
   
});

// Объявляем masterService на уровне файла
const masterService = new MasterS('http://localhost:3001');


// Функция для добавления нового мастера
async function addMaster() {
    const masterData = {
        first_name: document.getElementById('fname').value,
        last_name: document.getElementById('lname').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        specialization: document.getElementById('specialization').value,
        status: document.getElementById('status').value,
        // Здесь можно добавить другие поля, если они нужны
    };

    try {
        const newMaster = await masterService.add_new_master(masterData);
        console.log('New master added:', newMaster);
        alert('Master added successfully');
        // Опционально: обновите интерфейс пользователя, например, очистите форму
        // document.getElementById('formId').reset(); // Пример сброса формы, если у неё есть id="formId"
    } catch (error) {
        console.error('Failed to add master:', error);
        alert('Failed to add master');
    }
}

async function deleteSelectedMasters() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (const box of checkedBoxes) {
        const masterId = box.id.replace('master', '').replace('Checkbox', '');
        await masterService.delete_master(masterId);
    }

    // Перезагрузка списка мастеров после удаления
    const masters = await masterService.get_masters();
    renderMastersAccordion(masters);
}



function renderMastersAccordion(masters) {
    
    const accordionMasters = document.getElementById('accordionMasters');

    accordionMasters.innerHTML = '';

    masters.forEach(master => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        accordionItem.dataset.masterId = master.getId();

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');

        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#collapseMaster${master.getId()}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `collapseMaster${master.getId()}`);
        button.innerHTML = `<input type="checkbox" id="master${master.getId()}Checkbox"> ${master.getFirstName()} ${master.getLastName()}`;

        accordionHeader.appendChild(button);
        accordionItem.appendChild(accordionHeader);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.id = `collapseMaster${master.getId()}`;
        accordionCollapse.setAttribute('aria-labelledby', `headingMaster${master.getId()}`);
        accordionCollapse.setAttribute('data-bs-parent', 'accordionMasters');

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.innerHTML = `
            <ul>
                <li>ID: ${master.getId()}</li>
                <li>Account ID: ${master.getUserAccountId()}</li>
                <li>First Name: ${master.getFirstName()}</li>
                <li>Last Name: ${master.getLastName()}</li>
                <li>Phone: ${master.getPhone()}</li>
                <li>Email: ${master.getEmail()}</li>
                <li>Specialization: ${master.getSpecialization()}</li>
                <li>Employee Type: ${master.getEmployeeType()}</li>
                <li>Status: ${master.getStatus()}</li>
            </ul>`;

        accordionCollapse.appendChild(accordionBody);
        accordionItem.appendChild(accordionCollapse);

        accordionMasters.appendChild(accordionItem);
    });
}


