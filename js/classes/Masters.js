// Function to fetch and display details of a specific master

import {Master} from "./Master_class.js";
class MasterS{
    #masters_list = [];
    #backend_url;


    constructor(url) {
        this.#backend_url = url;
    }

    #read_json = (taskAsJson) => {
        taskAsJson.forEach(row => {
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

    get_masters = () => {
        this.#masters_list = [];
        
        return fetch(`${this.#backend_url}/masters`) 
            .then(response => response.json())
            .then(json => {
                this.#read_json(json);
                console.log(this.#masters_list);
                return this.#masters_list;
            }).catch(error => {
                console.error('Error fetching masters:', error);
                throw error;
            });
    }

    get_master_by_id = async (masterId) => {
        try {
            const response = await fetch(`${this.#backend_url}/${masterId}`); 
            if (!response.ok) {
                throw new Error('Failed to fetch master details');
            }
            const master = await response.json();
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

    update_master_info = async (masterId, updatedData) => {
        try {
            const response = await fetch(`${this.#backend_url}/masters/update/${masterId}`, { 
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
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    delete_master = async (masterId) => {
        try {
            const response = await fetch(`${this.#backend_url}/masters/delete/${masterId}`, { // Исправлено здесь
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete master');
            }
            const deletedMaster = await response.json();
            console.log('Master deleted:', deletedMaster);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    

}


export {MasterS}


