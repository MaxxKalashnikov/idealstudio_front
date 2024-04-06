class Appointment {
    #appointment_id;
    #timeslot_date;
    #start_time;
    #end_time;
    #service_name;
    #employee_firstname;
    #employee_lastname;
    #customer_firstname;
    #customer_lastname;
    #is_canceled;
    #username;
    
    constructor(id, date, start, end, service, emp_fname, emp_sname, cus_fname, cus_sname, status, uname) {
        this.#appointment_id = id;
        this.#timeslot_date = date;
        this.#start_time = start;
        this.#end_time = end;
        this.#service_name = service;
        this.#employee_firstname = emp_fname;
        this.#employee_lastname = emp_sname;
        this.#customer_firstname = cus_fname;
        this.#customer_lastname = cus_sname;
        this.#is_canceled = status;
        this.#username = uname;
    }

    get appointment_id() {
        return this.#appointment_id;
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

    get service_name() {
        return this.#service_name;
    }

    get employee_firstname() {
        return this.#employee_firstname;
    }

    get employee_lastname() {
        return this.#employee_lastname;
    }

    get customer_firstname() {
        return this.#customer_firstname;
    }

    get customer_lastname() {
        return this.#customer_lastname;
    }

    get is_canceled() {
        return this.#is_canceled;
    }

    get username() {
        return this.#username;
    }
}


class AppointmentDetails {
    #appointment_id;
    #timeslot_date;
    #start_time;
    #end_time;
    #service_name;
    #category;
    #price;
    #employee_firstname;
    #employee_lastname;
    #employee_email;
    #employee_phone;
    #employee_specialization;
    #customer_firstname;
    #customer_lastname;
    #customer_email;
    #customer_phone;
    #is_canceled;

    constructor(id, date, start, end, service, category, price, emp_fname, emp_sname, emp_email, 
        emp_phone, emp_specialization, cus_fname, cus_sname, cus_email, cus_phone, status) {
        this.#appointment_id = id;
        this.#timeslot_date = date;
        this.#start_time = start;
        this.#end_time = end;
        this.#service_name = service;
        this.#category = category;
        this.#price = price;
        this.#employee_firstname = emp_fname;
        this.#employee_lastname = emp_sname;
        this.#employee_email = emp_email;
        this.#employee_phone = emp_phone;
        this.#employee_specialization = emp_specialization;
        this.#customer_firstname = cus_fname;
        this.#customer_lastname = cus_sname;
        this.#customer_email = cus_email;
        this.#customer_phone = cus_phone;
        this.#is_canceled = status;
    }

    get appointment_id() {
        return this.#appointment_id;
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

    get service_name() {
        return this.#service_name;
    }

    get category() {
        return this.#category;
    }

    get price() {
        return this.#price;
    }

    get employee_firstname() {
        return this.#employee_firstname;
    }

    get employee_lastname() {
        return this.#employee_lastname;
    }

    get employee_email() {
        return this.#employee_email;
    }

    get employee_phone() {
        return this.#employee_phone;
    }

    get employee_specialization() {
        return this.#employee_specialization;
    }

    get customer_firstname() {
        return this.#customer_firstname;
    }

    get customer_lastname() {
        return this.#customer_lastname;
    }

    get customer_email() {
        return this.#customer_email;
    }

    get customer_phone() {
        return this.#customer_phone;
    }

    get is_canceled() {
        return this.#is_canceled;
    }
}

export { Appointment, AppointmentDetails }