// admin-new-master.js
import { EmployeesService } from "./classes/Masters.js"; // Исправьте путь, если он неверен

let employeesService = new EmployeesService('http://localhost:3001');

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.btn-primary'); // Проверьте селектор
    if (addButton) {
        addButton.addEventListener('click', addEmployee);
    }
});

async function addEmployee() {
    // Получение значений полей формы
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const specialization = document.getElementById('specialization').value;
    const status = document.getElementById('status').value; // Активный/Неактивный
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const profilePictureUrl = document.getElementById('profilePictureUrl').value;

    const employeeData = {
        firstname,
        lastname,
        email,
        phone,
        employee_type: "Master",
        specialization,
        is_active: status === "Active", // Преобразование статуса в boolean
        username,
        password,
        profile_picture_url: profilePictureUrl // Убедитесь, что ваш бэкенд обрабатывает это поле
    };

    try {
        await employeesService.add_new_employee(employeeData);
        alert('New employee added successfully!');
    } catch (error) {
        console.error('Failed to add employee:', error);
        alert('Failed to add new employee');
    }
}
