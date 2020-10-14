import React from 'react';
import {Button, Form, Input, message} from "antd";
import {Address} from "../../models/Address";
import AddressService from "../../services/AddressService";
import {refresh} from "../StateRefresh";

interface AddressFormProps {
    initialValues?: Address;
}

const AddressForm = (props: AddressFormProps) => {
    const [form] = Form.useForm();
    const handleSubmit = (address: Address) => {
        address.id = props.initialValues && props.initialValues.id;
        return props.initialValues ?
            AddressService.updateAddress(props.initialValues.id ? props.initialValues.id : 0, address)
                .then(() => message.success(`Address updated with id: ${address.id}`))
                .then(refresh)
                .catch(() => message.error('Failed to update address'))
            :
            AddressService.createAddress(address)
                .then((res) => message.success(`Address created with id: ${res.data}`))
                .then(refresh)
                .catch(() => message.error('Failed to create address'))
    }

    return <>
        <Form form={form} onFinish={handleSubmit} layout='vertical'
        initialValues={props.initialValues && {
            street: props.initialValues.street,
            zip: props.initialValues.zip,
            city: props.initialValues.city,
        }}>
            <Form.Item label={'Street'} rules={[{required: true}]} name={'street'}>
                <Input/>
            </Form.Item>
            <Form.Item label={'Zip'} rules={[{required: true}]} name={'zip'}>
                <Input/>
            </Form.Item>
            <Form.Item label={'City'} rules={[{required: true}]} name={'city'}>
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type={'primary'} htmlType={'submit'}>Submit</Button>
            </Form.Item>
        </Form>
        </>
}

export default AddressForm;
