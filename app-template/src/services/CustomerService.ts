import apiInstance from "../utils/api";
import {Customer} from "../models/Customer";
import {message} from "antd";
import {log} from "../index";


class CustomerService {
    static fetchAllCustomers = () =>
        apiInstance.get('/api/customer/all').then(res => res.data);

    static createCustomer = (customer: Customer) =>
        apiInstance.post('/api/customer/new', customer)
            .then(res => res.data)
            .then(log.info('Customer created %s', customer))
            .catch((err) => CustomerService.customerServiceErrorHandler(err, 'create'));

    static updateCustomer = (customer: Customer) =>
        apiInstance.put(`/api/customer/${customer.id}`, customer)
            .then(res => res.data)
            .then(log.info('Customer updated %s', customer))
            .catch((err) => CustomerService.customerServiceErrorHandler(err, 'update'));

    static deleteCustomer = (id: number) =>
        apiInstance.delete(`/api/customer/${id}`)
            .then(message.success(`Deleted customer with id ${id}`))
            .then(log.info('Deleted customer with id: %s', id))
            .catch((err) => CustomerService.customerServiceErrorHandler(err, 'delete'));

    static customerServiceErrorHandler = (err: any, operation: string) => {
        message.error(`Failed to ${operation} customer`);
        log.error(err);
    }
}

export default CustomerService;
