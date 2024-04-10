// Function to fetch and display details of a specific master

import {Master} from "./Master_class.js";
class MasterS{
    #masters_list = [];
    #backend_url;

    constructor(url){
        this.#backend_url = url;
    }

    #read_json = (taskAsJson) => {
        taskAsJson.forEach(row => {
            //creating instances of task class for every json node from back response
            const master = new Master(
                row.id,
                row.user_account_id,
                row.first_name,
                row.last_name,
                row.email,
                row.phone,
                row.specialization,
                row.employee_type,
                row.status
            );
            this.#masters_list.push(master);
        });
    }

    get_masters = async () =>{
        this.#masters_list.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/")//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#read_json(json);//storing appointments from response as instances of appointment class inside appointments array
                console.log(this.#masters_list)
                resolve(this.#masters_list)
            },(error) => {
                reject(error);
            })
        })
    }

    get_master_by_id = async (masterId) => {
        try {
            const response = await fetch(this.#backend_url+ "/masters/${masterId}");
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

    add_new_master = async(masterData) => {
        try {
            const response = await fetch(this.#backend_url+ "/masters/new", {
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

    update_master_info = async(masterId, updatedData) => {
        try {
            const response = await fetch(this.#backend_url+ "/masters/update/${masterId}", {
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
    delete_master = async(masterId) => {
        try {
            const response = await fetch(this.#backend_url+ "/masters/delete/${masterId}", {
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

export {MasterS}

// Function to delete a master
