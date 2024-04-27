class Employee{
    #employee_id;
    #firstname;
    #lastname;
    #email;
    #phone;
    #employee_type;
    #specialization;
    #is_active;
    #user_account_id;

    constructor(employee_id, firstname, lastname, email, phone, employee_type, specialization, is_active, user_account_id) {
        this.#employee_id = employee_id;
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#email = email;
        this.#phone = phone;
        this.#employee_type = employee_type;
        this.#specialization = specialization;
        this.#is_active = is_active;
        this.#user_account_id = user_account_id;
    }

    get employeeId() {
        return this.#employee_id;
    }

    get firstname() {
        return this.#firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    get email() {
        return this.#email;
    }

    get phone() {
        return this.#phone;
    }

    get employeeType() {
        return this.#employee_type;
    }

    get specialization() {
        return this.#specialization;
    }

    get isActive() {
        return this.#is_active;
    }

    get userAccountId() {
        return this.#user_account_id;
    }
}

class EmployeeMore{
    #employee_id;
    #firstname;
    #lastname;
    #email;
    #phone;
    #employee_type;
    #specialization;
    #is_active;
    #user_account_id;
    #profile_picture_url

    constructor(employee_id, firstname, lastname, email, phone, specialization, is_active, user_account_id, employee_type, url) {
        this.#employee_id = employee_id;
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#email = email;
        this.#phone = phone;
        this.#employee_type = employee_type;
        this.#specialization = specialization;
        this.#is_active = is_active;
        this.#user_account_id = user_account_id;
        this.#profile_picture_url = url;
    }

    get employeeId() {
        return this.#employee_id;
    }

    get firstname() {
        return this.#firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    get email() {
        return this.#email;
    }

    get phone() {
        return this.#phone;
    }

    get employeeType() {
        return this.#employee_type;
    }

    get specialization() {
        return this.#specialization;
    }

    get isActive() {
        return this.#is_active;
    }

    get userAccountId() {
        return this.#user_account_id;
    }

    get picture(){
        return this.#profile_picture_url;
    }
}

export { Employee, EmployeeMore }