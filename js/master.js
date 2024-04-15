import { EmployeesService } from "./classes/Masters.js";

const employeesService = new EmployeesService('http://localhost:3001');

document.addEventListener('DOMContentLoaded', async function () {
    const employees = await employeesService.get_employees();
    renderEmployees(employees);  // Передаем сотрудников с сервера напрямую в функцию

    const deleteButton = document.getElementById('deleteSelectedEmployeesBtn');
    if (deleteButton) {
        deleteButton.addEventListener('click', deleteSelectedEmployees);
    }
});

// Измените определение функции renderEmployees для принятия параметра employees
async function renderEmployees(employees) {
    const accordionMasters = document.getElementById('accordionMasters');
    accordionMasters.innerHTML = '';

    employees.forEach(employee => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.id = `headingMaster${employee.employeeId}`;

        const accordionButton = document.createElement('button');
        accordionButton.classList.add('accordion-button');
        accordionButton.setAttribute('type', 'button');
        accordionButton.setAttribute('data-bs-toggle', 'collapse');
        accordionButton.setAttribute('data-bs-target', `#collapseEmployee${employee.employeeId}`);
        accordionButton.setAttribute('aria-expanded', 'false');
        accordionButton.setAttribute('aria-controls', `collapseEmployee${employee.employeeId}`);
        accordionButton.innerHTML = `<input type="checkbox" id="employee${employee.employeeId}Checkbox"> ${employee.firstname} ${employee.lastname}`;
        accordionHeader.appendChild(accordionButton);
        accordionItem.appendChild(accordionHeader);

        const accordionCollapse = document.createElement('div');
        accordionCollapse.classList.add('accordion-collapse', 'collapse');
        accordionCollapse.id = `collapseEmployee${employee.employeeId}`;
        accordionCollapse.setAttribute('aria-labelledby', `headingMaster${employee.employeeId}`);
        accordionCollapse.setAttribute('data-bs-parent', 'accordionMasters');

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.innerHTML = `
            <ul>
                <li>Email: ${employee.email}</li>
                <li>Phone: ${employee.phone}</li>
                <li>Specialization: ${employee.specialization}</li>
                <li>Employee Type: ${employee.employeeType}</li>
                <li>Status: ${employee.isActive ? 'Active' : 'Inactive'}</li>
                <li>User Account ID: ${employee.userAccountId}</li>
            </ul>`;

        accordionCollapse.appendChild(accordionBody);
        accordionItem.appendChild(accordionCollapse);

        accordionMasters.appendChild(accordionItem);
    });
}





async function deleteSelectedEmployees() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedBoxes.length === 0) {
        alert('Please select employees to delete.');
        return;
    }
    for (const box of checkedBoxes) {
        const employeeId = box.id.replace('employee', '').replace('Checkbox', '');
        await employeesService.delete_employee(employeeId);
    }

    // Перерисовываем список сотрудников после удаления
    await renderEmployees();
}


