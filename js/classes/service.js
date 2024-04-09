class Service{
    #service_id;
    #service_name;
    #category;
    #description;
    #price;
    #is_available;

    constructor(service_id, service_name, category, description, price, is_available) {
        this.#service_id = service_id;
        this.#service_name = service_name;
        this.#category = category;
        this.#description = description;
        this.#price = price;
        this.#is_available = is_available;
    }

    // Getter methods using get keyword
    get serviceId() {
        return this.#service_id;
    }

    get serviceName() {
        return this.#service_name;
    }

    get category() {
        return this.#category;
    }

    get description() {
        return this.#description;
    }

    get price() {
        return this.#price;
    }

    get isAvailable() {
        return this.#is_available;
    }
}

export { Service }