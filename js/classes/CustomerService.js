// CustomerService.js
 class CustomerService {
    constructor(url) {
        this.backendUrl = url;
    }

    async getCustomers() {
        try {
            const response = await fetch(`${this.backendUrl}/customers`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching customer data:', error);
            throw error;
        }
    }
}


export {CustomerService};