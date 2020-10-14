import React, {useEffect, useState} from 'react';
import AddressService from "../../services/AddressService";
import {Address} from "../../models/Address";
import {Select} from "antd";


interface AddressComponentProps {
    onChange?: Function,
    value?: number,
}

const AddressComponent = (props: AddressComponentProps) => {
    const [addresses, setAddressses] = useState<Address []>([]);

    useEffect(() => {
        AddressService.getAddresses().then(setAddressses);
    }, [])

    const handleSelectedAddress = (values: number) =>
        props.onChange && props.onChange(values);

    return <>
            <Select onChange={handleSelectedAddress} value={props.value}>
                {addresses.map((address) =>
                    <Select.Option key={address.id} value={address.id ? address.id : 0}>
                        {address.street} {address.zip} {address.city}
                    </Select.Option>
                )}
            </Select>
    </>
}

export default AddressComponent
