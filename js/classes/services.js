import { Service } from "./service.js";

class Services{
    #services = [];//for service class objects
    #backend_url;

    constructor(url){
        this.#backend_url= url;
    }

    #readJson = (servicekAsJson) => {
        servicekAsJson.forEach(node => {
            //creating instances of service class for every json node from back response
            const service = new Service(
                node.service_id,
                node.service_name,
                node.description,
                node.category,
                node.price,
                node.is_available);
            this.#services.push(service);
        });
    }

    getServices = async () =>{
        this.#services.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + "/")//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readJson(json);//storing appointments from response as instances of appointment class inside appointments array
                resolve(this.#services)
            },(error) => {
                reject(error);
            })
        })
    }
}

export { Services }