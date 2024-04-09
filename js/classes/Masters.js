// Function to fetch and display details of a specific master
async function fetchMasterDetails(masterId) {
    try {
        const response = await fetch(`http://localhost:3001/masters/${masterId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch master details');
        }
        const master = await response.json();
        // Display master details in a modal or any other UI element
        console.log(master);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Event listener for checkboxes or master names to view master details
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        if (event.target.matches('input[type="checkbox"]')) {
            const masterId = event.target.id.replace('master', '');
            fetchMasterDetails(masterId);
        }
    });
});

// Function to add a new master
async function addNewMaster(masterData) {
    try {
        const response = await fetch('http://localhost:3001/masters/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(masterData)
        });
        if (!response.ok) {
            throw new Error('Failed to add new master');
        }
        const newMaster = await response.json();
        console.log('New master added:', newMaster);
        // Optionally, update UI to reflect the addition of the new master
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to update master information
async function updateMaster(masterId, updatedData) {
    try {
        const response = await fetch(`http://localhost:3001/masters/update/${masterId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Failed to update master');
        }
        const updatedMaster = await response.json();
        console.log('Master updated:', updatedMaster);
        // Optionally, update UI to reflect the updated master information
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to delete a master
async function deleteMaster(masterId) {
    try {
        const response = await fetch(`http://localhost:3001/masters/delete/${masterId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete master');
        }
        const deletedMaster = await response.json();
        console.log('Master deleted:', deletedMaster);
        // Optionally, update UI to reflect the deletion of the master
    } catch (error) {
        console.error('Error:', error);
    }
}
