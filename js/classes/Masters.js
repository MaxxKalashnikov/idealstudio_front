// Function to fetch and display details of a specific master

import {Employee} from "./employee.js";
class EmployeesService{
    #employee_list = [];
    #backend_url;


    constructor(url) {
        this.#backend_url = url;
    }

    #read_json = (taskAsJson) => {
        taskAsJson.forEach(row => {
            const employee = new Employee(
                row.employee_id,
                row.firstname,
                row.lastname,
                row.email,
                row.phone,
                row.employee_type,
                row.specialization,
                row.is_active,
                row.user_account_id
            );
            this.#employee_list.push(employee);
        });
    }

    get_employees = () => {
        this.#employee_list = [];
        
        return fetch(`${this.#backend_url}/employees`) 
            .then(response => response.json())
            .then(json => {
                this.#read_json(json);
                console.log(this.#employee_list);
                return this.#employee_list;
            }).catch(error => {
                console.error('Error fetching employees:', error);
                throw error;
            });
    }

    get_employee_by_id = async (employeeId) => {
        try {
            const response = await fetch(`${this.#backend_url}/${employeeId}`); 
            if (!response.ok) {
                throw new Error('Failed to fetch employee details');
            }
            const employee = await response.json();
            console.log(employee);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    

    add_new_employee = async(employeeData) => {
        try {
            const response = await fetch(this.#backend_url+ "/employees/new", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(employeeData)
            });
            if (!response.ok) {
                throw new Error('Failed to add new master');
            }
            const newEmployee = await response.json();
            console.log('New master added:', newEmployee);
            // Optionally, update UI to reflect the addition of the new master
        } catch (error) {
            console.error('Error:', error);
        }
    }

    update_employee_info = async (employeeId, updatedData) => {
        try {
            const response = await fetch(`${this.#backend_url}/employees/update/${employeeId}`, { 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            if (!response.ok) {
                throw new Error('Failed to update master');
            }
            const updatedEmployee = await response.json();
            console.log('Master updated:', updatedEmployee);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    delete_employee = async (employeeId) => {
        try {
            const response = await fetch(`${this.#backend_url}/employees/delete/${employeeId}`, { // Исправлено здесь
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete master');
            }
            const deletedEmployee = await response.json();
            console.log('Master deleted:', deletedEmployee);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    

}


export {EmployeesService}


