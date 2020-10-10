import apiInstance from "../utils/api";
import {Customer} from "../models/Customer";


class CustomerService {
    static createCustomer = (customer: Customer) =>
        apiInstance.post('/api/customer/new')
            .then(res => res.data)
            .catch(err => err);
}

export default CustomerService;
