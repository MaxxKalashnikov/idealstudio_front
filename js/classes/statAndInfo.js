import { Statistics } from "./statistics.js";
import { Info } from "./info.js";

class StatAndInfo{
    #info = [];
    #statistics = [];
    #backend_url;

    constructor(url){
        this.#backend_url = url;
    }

    #readOnlyInfo(json){
        const personalInfo = json.personalInfo; // Extracting personal information from the input JSON
        // console.log(personalInfo[0].firstname, "\n\n" + personalInfo[0].lastname)
        // Create an instance of Info class with the personal information
        console.log("PERSONAL INFO json:: ", personalInfo)
        const info = new Info(
            personalInfo[0].firstname,
            personalInfo[0].lastname,
            personalInfo[0].email,
            personalInfo[0].phone
            
        );
        console.log(info)
        this.#info.push(info); // Push the Info instance to the #info array
    }

    #readOnlyStat(json){
        const statistics = json.statistics;

        const stat = new Statistics(statistics[0].count, statistics[1].count,
        statistics[2].count, statistics[3].count);
        
        this.#statistics.push(stat); // Push the Info instance to the #info array
    }
    
    

    getInfo = async (id) =>{
        this.#info.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url + `/${id}`)//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readOnlyInfo(json);//storing appointments from response as instances of appointment class inside appointments array
                resolve(this.#info)
            },(error) => {
                reject(error);
            })
        })
    }

    getStat = async () =>{
        this.#statistics.length = 0;
        return new Promise(async(resolve, reject) => {
            fetch(this.#backend_url)//fetching back
            .then((response) => response.json())
            .then((json) => {
                this.#readOnlyStat(json);//storing appointments from response as instances of appointment class inside appointments array
                resolve(this.#statistics)
            },(error) => {
                reject(error);
            })
        })
    }

    updateInfo = async (newName, newSname, newEmail, newPhone) =>{
        return new Promise((resolve, reject) => {
            console.log(newName + "   " + newSname + "   " + newPhone + "  " + newEmail)
            newEmail = newEmail.trim();
            console.log('New Email:', JSON.stringify(newEmail));
            fetch(this.#backend_url + '/update/',{
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    firstname: newName,
                    lastname: newSname,
                    email: newEmail,
                    phone: newPhone
                })
            })
            .then(response => response.json())
            .then(json => {
                resolve(json);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
    
}

export { StatAndInfo }