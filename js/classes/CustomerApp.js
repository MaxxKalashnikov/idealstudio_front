// CustomerApp.js
import { CustomerService } from './CustomerService.js'; 

const customerService = new CustomerService('http://localhost:3001');

const displayCustomers = async () => {
    try {
        const customers = await customerService.getCustomers();
        const tableBody = document.getElementById('customerData');
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.customer_id}</td>
                <td>${customer.firstname}</td>
                <td>${customer.lastname}</td>
                <td>${customer.phone}</td>
                <td>${customer.email}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Failed to display customers:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    displayCustomers();
});
