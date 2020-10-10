import apiInstance from "../utils/api";

class MetaService {
    static fetchOrderTypes = () =>
        apiInstance.get('/api/meta/orders')
}

export default MetaService;
