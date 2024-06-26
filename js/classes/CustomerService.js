// CustomerService.js
import { Customer } from './customer.js'
 class CustomerService {
    #customers = [];
    #backendUrl;

    constructor(url) {
        this.#backendUrl = url;
    }

    async getCustomers() {
        try {
            const response = await fetch(`${this.#backendUrl}/customers`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result)
            return await result;
        } catch (error) {
            console.error('Error fetching customer data:', error);
            throw error;
        }
    }

    // createNewCustomer = async()=>{
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const response = await fetch('http://localhost:3001/customers/new', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     user_account_id : null,
    //                     firstname : "test",
    //                     lastname : "test",
    //                     email : "test132@adbc.com",
    //                     phone : "0384740979"
    //                 })
    //             });
    
    //             const json = await response.json();
    
    //             console.log(json);
    //             resolve(json);
    //         } catch (error) {
    //             console.error('Error creating new customer:', error);
    //             reject(error);
    //         }
    //     });
    // }

    createNewCustomer = async(customer)=>{
        const firstname = customer.fname;
        const lastname = customer.lname;
        const email = customer.email;
        const phone = customer.phone;
        return new Promise((resolve, reject) => {
            fetch(this.#backendUrl + '/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phone: phone
                })
            })
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);
                console.log(this.#customers)
                resolve(this.#customers)
            })
            .catch(error => {
                console.error('Error creating new customer:', error);
                reject(error);
            });
        });
    }

    #readJson = (customerAsJson) => {
        customerAsJson.forEach(node => {
            //creating instances of service class for every json node from back response
            const cus = new Customer(
                node.customer_id,
                node.firstname,
                node.lastname,
                node.email,
                node.phone,
                node.user_account_id);
            this.#customers.push(cus);
        });
    }

    getAllCustomers = async () =>{
        this.#customers.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backendUrl)//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);//storing employees from response as instances of employee class inside employees array
                resolve(this.#customers)
            },(error) => {
                reject(error);
            })
        })
    }

    getCustomerByUserId = async(id)=>{
        return new Promise(async(resolve, reject) => {
            fetch(this.#backendUrl + '/profile' + `/${id}`)//fetching back
            .then((response) => response.json())
            .then((json) => {
                resolve(json)
            },(error) => {
                reject(error);
            })
        })
    }

    isThereCustomer = async(email)=>{
        return new Promise(async(resolve, reject) => {
            fetch(this.#backendUrl + '/profile' + `/${id}`)//fetching back
            .then((response) => response.json())
            .then((json) => {
                resolve(json)
            },(error) => {
                reject(error);
            })
        })
    }
}


export { CustomerService };