import React from 'react';
import {Button, Form, Input} from "antd";
import {Address} from "../../models/Address";
import AddressService from "../../services/AddressService";

interface AddressFormProps {
    initialValues?: Address;
    onChange?: Function;
}

const AddressForm = (props: AddressFormProps) => {
    const [form] = Form.useForm();

    const handleSubmit = (address: Address) => {
        address.id = props.initialValues && props.initialValues.id;
        return props.initialValues ?
            AddressService.updateAddress(props.initialValues.id ? props.initialValues.id : 0, address)
                .then(() => props.onChange)
            :
            AddressService.createAddress(address)
                .then(() => props.onChange)
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
