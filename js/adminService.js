import { Services } from './classes/services.js';

document.addEventListener('DOMContentLoaded', async function () {
    const servicesInstance = new Services('http://localhost:3001/services');
    const services = await servicesInstance.getServices();
    renderServices(services);
    document.getElementById('servicesContainer').addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const serviceId = event.target.getAttribute('data-id');
            editService(serviceId);
        } else if (event.target.classList.contains('delete-btn')) {
            const serviceId = event.target.getAttribute('data-id');
            deleteService(serviceId);
        }
    });
    document.getElementById('saveChangesBtn').addEventListener('click', saveServiceChanges);
});

function renderServices(services) {
    const servicesContainer = document.getElementById('servicesContainer');
    servicesContainer.innerHTML = '';
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${service.serviceName}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="card-text">Price: $${service.price}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-sm btn-outline-primary edit-btn" data-id="${service.serviceId}">Edit</button>
                    <button type="button" class="btn btn-sm btn-outline-danger delete-btn" data-id="${service.serviceId}">Delete</button>
                </div>
            </div>
        `;
        servicesContainer.appendChild(serviceCard);
    });
}

async function editService(serviceId) {
    const response = await fetch(`http://localhost:3001/services/${serviceId}`);
    const service = await response.json();

    document.getElementById('serviceId').value = serviceId;
    document.getElementById('serviceName').value = service.serviceName;
    document.getElementById('serviceDescription').value = service.description;
    document.getElementById('servicePrice').value = service.price;

    const editModal = new bootstrap.Modal(document.getElementById('editServiceModal'));
    editModal.show();
}

async function saveServiceChanges() {
    const serviceId = document.getElementById('serviceId').value;
    const serviceName = document.getElementById('serviceName').value;
    const serviceDescription = document.getElementById('serviceDescription').value;
    const servicePrice = document.getElementById('servicePrice').value;

    const updatedService = {
        serviceName,
        serviceDescription,
        servicePrice
    };

    // Отправка обновленных данных на сервер
    const response = await fetch(`http://localhost:3001/services/update/${serviceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedService)
    });

    if (response.ok) {
        alert('Service updated successfully');
        // Закрыть модальное окно и обновить список сервисов
        bootstrap.Modal.getInstance(document.getElementById('editServiceModal')).hide();
        location.reload(); // Или вызвать функцию для перерисовки сервисов
    } else {
        alert('Failed to update service');
    }
}

async function deleteService(serviceId) {
    if (!confirm('Are you sure you want to delete this service?')) return;

    // Отправка запроса на удаление
    const response = await fetch(`http://localhost:3001/services/delete/${serviceId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        alert('Service deleted successfully');
        location.reload(); // Или вызвать функцию для перерисовки сервисов
    } else {
        alert('Failed to delete service');
    }
}

