import apiInstance from "../utils/api";
import {CustomerOrder} from "../models/CustomerOrder";
import {log} from "../index";

class CustomerOrderService {
    static fetchOrders = () =>
        apiInstance.get<CustomerOrder []>('/api/customer/order/all').then(res => res.data);

    static createOrder = (order : CustomerOrder) => {
        log.info('Creating order: %s', order);
        return apiInstance.post('/api/customer/order/new', order);
    }

    static updateOrder = (id: number, order : CustomerOrder) => {
        log.info('Updating order with id: %s', id, order);
        return apiInstance.put(`/api/customer/order/${id}`, order);
    }

    static deleteOrder = (id: number) => {
        log.info('Deleting order with id: %s', id);
        return apiInstance.delete(`/api/customer/order/${id}`).then(res => res.data);
    }
}

export default CustomerOrderService;
