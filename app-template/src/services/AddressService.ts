import {Address} from "../models/Address";
import apiInstance from "../utils/api";

class AddressService {
    static addAddress = (address: Address) =>
        apiInstance.post('/api/address/new', address).then(res => res.data);

    static getAddresses = () =>
        apiInstance.get('/api/address/all').then(res => res.data);
}

export default AddressService;
