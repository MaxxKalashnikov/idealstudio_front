import { Appointment, AppointmentDetails } from "./appointment.js"
class Appointments{
    #appointments = [];
    #appointmentsMore = [];
    #backend_url;

    constructor(url){
        this.#backend_url = url;
    }

    #readJson = (taskAsJson) => {
        taskAsJson.forEach(node => {
            //creating instances of task class for every json node from back response
            const appoint = new Appointment(
                node.appointment_id,
                node.timeslot_date,
                node.start_time,
                node.end_time,
                node.service_name,
                node.employee_firstname,
                node.employee_lastname,
                node.customer_firstname,
                node.customer_lastname,
                node.is_canceled,
                node.username);
            this.#appointments.push(appoint);
        });
    }

    #readJsonMore = (taskAsJson) => {
        taskAsJson.forEach(node => {
            //creating instances of task class for every json node from back response
            const appoint = new AppointmentDetails(
                node.appointment_id,
                node.timeslot_date,
                node.start_time,
                node.end_time,
                node.service_name,
                node.category,
                node.price,
                node.employee_firstname,
                node.employee_lastname,
                node.employee_email,
                node.employee_phone,
                node.employee_specialization,
                node.customer_firstname,
                node.customer_lastname,
                node.customer_email,
                node.customer_phone,
                node.is_canceled
                );
            this.#appointmentsMore.push(appoint);
        });
    }

    getAppointments = async () =>{
        this.#appointments.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/all")//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);//storing appointments from response as instances of appointment class inside appointments array
                resolve(this.#appointments)
            },(error) => {
                reject(error);
            })
        })
    }

    cancelOrActivateAppointmentForUser = async (id) => {
        let appoint_status;
        this.#appointmentsMore.forEach(appoint =>{
            if(appoint.appointment_id == id){
                appoint_status = appoint.is_canceled;
            }
            console.log(appoint)
        })
        
        switch(appoint_status){
            case true:
                appoint_status = false;
                break;
            case false:
                appoint_status = true;
                break;
            default:
                console.log('no data');
        }

        return new Promise((resolve, reject) => {
            fetch(this.#backend_url + '/update/' + id, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_canceled: appoint_status })
            })
            .then(response => response.json())
            .then(json => {
                this.#appointmentsMore.length = 0
                resolve(json.appointment_id);
            })
            .catch(error => {
                reject(error);
            });
        });
    }  

    cancelOrActivateAppointment = async (id) => {
        let appoint_status;
        this.#appointments.forEach(appoint =>{
            if(appoint.appointment_id == id){
                appoint_status = appoint.is_canceled;
            }
        })
        
        switch(appoint_status){
            case true:
                appoint_status = false;
                break;
            case false:
                appoint_status = true;
                break;
            default:
                console.log('no data');
        }

        return new Promise((resolve, reject) => {
            fetch(this.#backend_url + '/update/' + id, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ is_canceled: appoint_status })
            })
            .then(response => response.json())
            .then(json => {
                this.#appointmentsMore = []
                resolve(json.appointment_id);
            })
            .catch(error => {
                reject(error);
            });
        });
    }  
    
    
    getMoreDetails = async(id) =>{
        this.#appointmentsMore = [];
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/more" + `/${id}`)//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJsonMore(json);//storing appointments from response as instances of appointment class inside appointments array
                resolve(this.#appointmentsMore)
            },(error) => {
                reject(error);
            })
        })
    }

    getApointmentsByUsername = async(username)=>{
        this.#appointments.length = 0
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/my" + `/${username}`)//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);//storing appointments from response as instances of appointment class inside appointments array
                resolve(this.#appointments)
            },(error) => {
                reject(error);
            })
        })
    }

    createNewAppointment = async(appointment)=>{
        const description = appointment.description;
        const customer_id = appointment.customerID
        const service_id = appointment.serviceID
        const timeslot_id = appointment.timeslotID
        return new Promise((resolve, reject) => {
            fetch(this.#backend_url + '/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description: description,
                    customer_id: customer_id,
                    service_id: service_id,
                    timeslot_id: timeslot_id
                })
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                resolve(json)
            })
            .catch(error => {
                console.error('Error creating new customer:', error);
                reject(error);
            });
        });
    }
    
    
}

export { Appointments }