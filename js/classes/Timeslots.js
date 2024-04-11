import { Timeslot } from "./timeslot.js";

class Timeslots{
    #timeslots = [];
    #backend_url;

    constructor(url){
        this.#backend_url = url;
    }

    #readJson = (timeslotAsJson) => {
        timeslotAsJson.forEach(node => {
            //creating instances of service class for every json node from back response
            const ts = new Timeslot(
                node.timeslot_id,
                node.timeslot_date,
                node.start_time,
                node.end_time,
                node.is_available,
                node.employee_id);
            this.#timeslots.push(ts);
        });
    }

    getTimeslots = async () =>{
        this.#timeslots.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url)//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);//storing employees from response as instances of employee class inside employees array
                resolve(this.#timeslots)
            },(error) => {
                reject(error);
            })
        })
    }

    getTimeslotsPerPerson = async(id) =>{
        this.#timeslots.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + `/time/${id}`)//fetching back
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.#readJson(json);//storing employees from response as instances of employee class inside employees array
                resolve(this.#timeslots)
            },(error) => {
                reject(error);
            })
        })
    }
}

export { Timeslots }