// CustomerService.js
 class CustomerService {
    // #customers = [];
    // #backendUrl;

    constructor(url) {
        this.backendUrl = url;
    }

    async getCustomers() {
        try {
            const response = await fetch(`${this.backendUrl}/customers`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result)
            return await result;
        } catch (error) {
            console.error('Error fetching customer data:', error);
            throw error;
        }
    }
}


export { CustomerService };