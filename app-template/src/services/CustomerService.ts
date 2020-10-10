import apiInstance from "../utils/api";
import {Customer} from "../models/Customer";
import {message} from "antd";


class CustomerService {
    static fetchAllCustomers = () =>
        apiInstance.get('/api/customer/all').then(res => res.data);


    static createCustomer = (customer: Customer) =>
        apiInstance.post('/api/customer/new', customer)
            .then(res => res.data)
            .catch(err => err);

    static deleteCustomer = (id: number) =>
        apiInstance.delete(`/api/customer/${id}`)
            .then(message.success(`Deleted customer with id ${id}`))
            .catch(() => message.error(`Failed to delete customer with id ${id}`))
}

export default CustomerService;
