import apiInstance from "../utils/api";

class CustomerOrderService {
    static fetchOrders = () =>
        apiInstance.get('/api/customer/order/all').then(res => res.data);

    static deleteOrder = (id: number) =>
        apiInstance.delete(`/api/customer/order/${id}`).then(res => res.data);
}

export default CustomerOrderService;
