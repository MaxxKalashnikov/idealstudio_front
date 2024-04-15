class Statistics{
    #appointments;
    #employees;
    #customers;
    #reviews;

    constructor(appint_num, master_num, customer_num, reviews_num){
        this.#appointments = appint_num;
        this.#employees = master_num;
        this.#customers = customer_num;
        this.#reviews = reviews_num;
    }

    get appointments() {
        return this.#appointments;
    }

    get employees() {
        return this.#employees;
    }

    get customers() {
        return this.#customers;
    }

    get reviews() {
        return this.#reviews;
    }
}

export { Statistics }