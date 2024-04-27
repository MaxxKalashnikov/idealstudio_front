import { Employee, EmployeeMore } from "./employee.js";

class Employees{
    #employees = [];//for employee class objects
    #employeesMore = [];
    #backend_url;

    constructor(url){
        this.#backend_url= url;
    }

    #readJsonMore = (employeeAsJson) => {
        employeeAsJson.forEach(mode => {
            //creating instances of service class for every json node from back response
            const employee = new EmployeeMore(
                mode.employee_id,
                mode.firstname,
                mode.lastname,
                mode.email,
                mode.phone,
                mode.specialization,
                mode.is_active,
                mode.user_account_id,
                mode.user_type,
                mode.profile_picture_url);
            this.#employeesMore.push(employee);
        });
    }

    #readJson = (employeeAsJson) => {
        employeeAsJson.forEach(mode => {
            //creating instances of service class for every json node from back response
            const employee = new Employee(
                mode.employee_id,
                mode.firstname,
                mode.lastname,
                mode.email,
                mode.phone,
                mode.employee_type,
                mode.specialization,
                mode.is_active,
                mode.user_account_id);
            this.#employees.push(employee);
        });
    }

    getEmployees = async () =>{
        this.#employees.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/")//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);//storing employees from response as instances of employee class inside employees array
                resolve(this.#employees)
            },(error) => {
                reject(error);
            })
        })
    }

    getMoreEmployee = async ()=>{
        this.#employeesMore.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/get/more")//fetching back
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.#readJsonMore(json);//storing employees from response as instances of employee class inside employees array
                resolve(this.#employeesMore)
            },(error) => {
                reject(error);
            })
        })
    }
}

export { Employees };