import {Address} from "../models/Address";
import apiInstance from "../utils/api";
import {log} from "../index";
import {message} from "antd";

class AddressService {
    static getAddresses = () =>
        apiInstance.get('/api/address/all').then(res => res.data);

    static createAddress = (address: Address) =>
        apiInstance.post('/api/address/new', address)
            .then(res => res.data)
            .then(message.success('Address created', 5))
            .then(log.info('Created new address: %s', address.toString()))
            .catch((err) => AddressService.addressServiceErrorHandler(err, 'create'));

    static updateAddress = (id: number, address: Address) =>
        apiInstance.put(`/api/address/${id}`, address)
            .then(message.success(`Updated address with id: ${id}`, 5))
            .then(log.info('Updated address with id: %s', id, address.toString()))
            .catch((err) => AddressService.addressServiceErrorHandler(err, 'update'));

    static deleteAddress = (id: number) =>
        apiInstance.delete(`/api/address/${id}`)
            .then(message.success(`Deleted address with id: ${id}`, 5))
            .then(log.info('Deleted address with id: %s', id))
            .catch((err) => AddressService.addressServiceErrorHandler(err, 'delete'));

    static addressServiceErrorHandler = (err: any, operation: string) => {
        message.error(`Failed to ${operation} address`, 5);
        log.error(err);
    }
}

export default AddressService;
