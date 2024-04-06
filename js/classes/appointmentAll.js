import { Appointment, AppointmentDetails } from "./appointment.js"
class Appointments{
    #appointments = [];
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

    #readOnlyTask = (id, newStat) =>{
        this.#appointments.forEach(appoint =>{
            if(appoint.appointment_id = node.appointment_id){
                appoint.is_canceled = newStat
            }
        })
    }

    getAppointments = async () =>{
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
                this.#readOnlyTask(json.appointment_id, appoint_status);
                resolve(json.appointment_id);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
    
}

export { Appointments }