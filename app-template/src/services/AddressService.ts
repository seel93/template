import {Address} from "../models/Address";
import apiInstance from "../utils/api";

class AddressService {
    static addAddress = (address: Address) =>
        apiInstance.post('/api/address').then(res => res.data);
}

export default AddressService;
