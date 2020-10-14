import {Address} from "../models/Address";
import apiInstance from "../utils/api";

class AddressService {
    static getAddresses = () =>
        apiInstance.get('/api/address/all').then(res => res.data);

    static createAddress = (address: Address) =>
        apiInstance.post('/api/address/new', address).then(res => res.data);

    static updateAddress = (id: number, address: Address) =>
        apiInstance.put(`/api/address/${id}`, address);

    static deleteAddress = (id: number) =>
        apiInstance.delete(`/api/address/${id}`)

}

export default AddressService;
