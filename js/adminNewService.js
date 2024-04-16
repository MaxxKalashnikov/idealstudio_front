
document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const serviceName = document.getElementById('serviceName').value;
    const category = document.getElementById('category').value;
    const service_price = document.getElementById('price').value;
    const isAvailable = document.getElementById('availability').value;
    const description = document.getElementById('description').value;

    const newService = {
        service_name: serviceName,
        category: category,
        service_price: service_price,
        is_available: isAvailable === '1' ? true : false,
        service_description: description
    };

    try {
        const response = await fetch('http://localhost:3001/services/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        });
        const responseData = await response.json();
        if (response.ok) {
            alert('Service added successfully');
            // Optionally clear form or redirect
        } else {
            throw new Error('Failed to add service');
        }
    } catch (error) {
        console.error('Failed to add service:', error);
        alert('Failed to add service');
    }
});
