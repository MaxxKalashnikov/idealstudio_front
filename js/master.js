import { MasterS } from "./classes/Masters.js";

document.addEventListener('DOMContentLoaded', async function () {
    const masterService = new MasterS('http://localhost:3001'); // Assuming backend URL
    const masters = await masterService.get_masters();

    renderMastersAccordion(masters);
});

function renderMastersAccordion(masters) {
    const accordionMasters = document.getElementById('accordionMasters');

    masters.forEach(master => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        accordionItem.dataset.masterId = master.id;

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');

        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#collapseMaster${master.id}`);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', `collapseMaster${master.id}`);
        button.innerHTML = `<input type="checkbox" id="master${master.id}Checkbox"> ${master.first_name} ${master.last_name}`;

        accordionHeader.appendChild(button);
        accordionItem.appendChild(accordionHeader);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.id = `collapseMaster${master.id}`;
        accordionCollapse.setAttribute('aria-labelledby', `headingMaster${master.id}`);
        accordionCollapse.setAttribute('data-bs-parent', 'accordionMasters');

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.innerHTML = `
            <ul>
                <li>ID: ${master.id}</li>
                <li>Account ID: ${master.user_account_id}</li>
                <li>First Name: ${master.first_name}</li>
                <li>Last Name: ${master.last_name}</li>
                <li>Phone: ${master.phone}</li>
                <li>Email: ${master.email}</li>
                <li>Specialization: ${master.specialization}</li>
                <li>Employee Type: ${master.employee_type}</li>
                <li>Status: ${master.status}</li>
            </ul>`;

        accordionCollapse.appendChild(accordionBody);
        accordionItem.appendChild(accordionCollapse);

        accordionMasters.appendChild(accordionItem);
    });
}


