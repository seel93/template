import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select} from "antd";
import {SaveOutlined} from "@ant-design/icons";
import AddressService from "../../services/AddressService";
import {Address} from "../../models/Address";


interface AddressComponentProps {
    value?: number,
    onChange?: Function,
    existingAddress: boolean
}

const AddressComponent = (props: AddressComponentProps) => {
    const [form] = Form.useForm();
    const [addresses, setAddressses] = useState<Address []>([]);

    useEffect(() => {
        AddressService.getAddresses().then(setAddressses);
    }, [])

    const handleSubmit = async (values: any) => {
        const addressId = await AddressService.addAddress(values).then(res => res.data);
        return props.onChange && props.onChange(addressId);
    }

    const handleSelectedAddress = (values: any) =>
        props.onChange && props.onChange(values);


    return <>
        {props.existingAddress ?
            <Select onSelect={handleSelectedAddress} value={props.value}>
                {addresses.map((address) =>
                    <Select.Option value={address.id}>
                        {address.street} {address.zip} {address.city}
                    </Select.Option>
                )}
            </Select>
             :

            <Form form={form} onFinish={handleSubmit}>
            <Form.Item label={'Street'} name={'street'}>
            <Input/>
            </Form.Item>
            <Form.Item label={'Zip'} name={'zip'}>
            <Input/>
            </Form.Item>
            <Form.Item label={'City'} name={'city'}>
            <Input/>
            </Form.Item>
            <Form.Item>
            <Button type={'link'} htmlType={'submit'}> add address <SaveOutlined /> </Button>
            </Form.Item>
            </Form>
        }
    </>

}

export default AddressComponent
