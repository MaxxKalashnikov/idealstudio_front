class Timeslot{
    #timeslot_id;
    #timeslot_date;
    #start_time;
    #end_time;
    #is_available;
    #employee_id;

    constructor(timeslot_id, timeslot_date, start_time, end_time, is_available, employee_id) {
        this.#timeslot_id = timeslot_id;
        this.#timeslot_date = timeslot_date;
        this.#start_time = start_time;
        this.#end_time = end_time;
        this.#is_available = is_available;
        this.#employee_id = employee_id;
    }

    get timeslot_id() {
        return this.#timeslot_id;
    }

    get timeslot_date() {
        return this.#timeslot_date;
    }

    get start_time() {
        return this.#start_time;
    }

    get end_time() {
        return this.#end_time;
    }

    get is_available() {
        return this.#is_available;
    }

    get employee_id() {
        return this.#employee_id;
    }
}

export { Timeslot }