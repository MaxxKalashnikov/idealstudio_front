class Master {
    #id;
    #user_account_id;
    #first_name;
    #last_name;
    #email;
    #phone;
    #specialization;
    #employee_type;
    #status;

    constructor(id, userAccountId, firstName, lastName, email, phone, specialization, employeeType, status) {
        this.#id = id;
        this.#user_account_id = userAccountId;
        this.#first_name = firstName;
        this.#last_name = lastName;
        this.#email = email;
        this.#phone = phone;
        this.#specialization = specialization;
        this.#employee_type = employeeType;
        this.#status = status;
    }
    
    getId() {
        return this.#id;
    }

    getUserAccountId() {
        return this.#user_account_id;
    }

    getFirstName() {
        return this.#first_name;
    }

    getLastName() {
        return this.#last_name;
    }

    getEmail() {
        return this.#email;
    }

    getPhone() {
        return this.#phone;
    }

    getSpecialization() {
        return this.#specialization;
    }

    getEmployeeType() {
        return this.#employee_type;
    }

    getStatus() {
        return this.#status;
    }
}

