class Customer{
    #customer_id;
    #firstname;
    #lastname;
    #email;
    #phone;
    #user_account_id;

    constructor(customer_id, firstname, lastname, email, phone, user_account_id) {
        this.#customer_id = customer_id;
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#email = email;
        this.#phone = phone;
        this.#user_account_id = user_account_id;
    }

    get customerId() {
        return this.#customer_id;
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

    get userAccountId() {
        return this.#user_account_id;
    }
}

export { Customer }