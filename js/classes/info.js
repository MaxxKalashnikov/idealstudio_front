class Info {
    #fname;
    #sname;
    #email;
    #phone;

    constructor(fname, sname, email, phone) {
        this.#fname = fname;
        this.#sname = sname;
        this.#email = email;
        this.#phone = phone;
    }

    get firstname() {
        return this.#fname;
    }

    get secondname() {
        return this.#sname;
    }

    get email() {
        return this.#email;
    }

    get phone() {
        return this.#phone;
    }
}

export { Info }