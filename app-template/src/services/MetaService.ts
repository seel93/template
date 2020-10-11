import apiInstance from "../utils/api";

class MetaService {
    static fetchOrderTypes = () =>
        apiInstance.get('/api/meta/order').then(res => res.data);
}

export default MetaService;
