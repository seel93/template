import apiInstance from "../utils/api";
import {CustomerOrder} from "../models/CustomerOrder";

class CustomerOrderService {
    static fetchOrders = () =>
        apiInstance.get<CustomerOrder []>('/api/customer/order/all').then(res => res.data);

    static createOrder = (order : CustomerOrder) =>
        apiInstance.post('/api/customer/order/new', order);

    static updateOrder = (id: number, order : CustomerOrder) =>
        apiInstance.put(`/api/customer/order/${id}`, order);

    static deleteOrder = (id: number) =>
        apiInstance.delete(`/api/customer/order/${id}`).then(res => res.data);
}

export default CustomerOrderService;
